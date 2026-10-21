import { useState, useEffect } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import EtkinlikListesi from './components/events/EtkinlikListesi';
import EtkinlikFiltresi from './components/events/EtkinlikFiltresi';
import EtkinlikDetay from './components/events/EtkinlikDetay';
import EtkinlikFormu from './components/forms/EtkinlikFormu';
import type { Etkinlik } from './types/etkinlik';
import type { SayfaAdi } from './types/page';

export default function App() {
  const [aktifSayfa, setAktifSayfa] = useState<SayfaAdi>('anasayfa');
  const [etkinlikler, setEtkinlikler] = useState<Etkinlik[]>([]);
  const [aramaMetni, setAramaMetni] = useState<string>('');
  const [seciliKategori, setSeciliKategori] = useState<string>('Tümü');
  const [seciliEtkinlik, setSeciliEtkinlik] = useState<Etkinlik | null>(null);

  useEffect(() => {
    setEtkinlikler([
      { id: 1, baslik: "Kariyer Günleri 2026", kategori: "Seminer", tarih: "12 Ekim 2026", saat: "14:00", yer: "A Blok Konferans Salonu", kontenjan: 100, aciklama: "Mezunlarla kariyer söyleşileri ve şirket standları." },
      { id: 2, baslik: "Robotik Atölyesi", kategori: "Atölye", tarih: "20 Ekim 2026", saat: "10:00", yer: "Bilgisayar Laboratuvarı 2", kontenjan: 20, aciklama: "Arduino ile çizgi izleyen robot yapımı, başlangıç seviyesi." },
      { id: 3, baslik: "Web Tasarım Atölyesi", kategori: "Atölye", tarih: "3 Kasım 2026", saat: "15:00", yer: "Bilgisayar Laboratuvarı 1", kontenjan: 30, aciklama: "HTML ve CSS ile ilk kişisel sayfanı yap." }
    ]);
  }, []);

  const sayfayaGit = (hedef: SayfaAdi) => {
    setAktifSayfa(hedef);
    setAramaMetni('');
    setSeciliKategori('Tümü');
  };

  const detaylaraGit = (etkinlik: Etkinlik) => {
    setSeciliEtkinlik(etkinlik);
    setAktifSayfa('detay');
  };

  const etkinligiGuncelle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!seciliEtkinlik) return;

    const formData = new FormData(e.currentTarget);
    const guncellenmisEtkinlik: Etkinlik = {
      ...seciliEtkinlik,
      baslik: formData.get('baslik') as string,
      kategori: formData.get('kategori') as string,
      tarih: formData.get('tarih') as string,
      saat: formData.get('saat') as string,
      yer: formData.get('yer') as string,
      kontenjan: Number(formData.get('kontenjan')),
      aciklama: formData.get('aciklama') as string,
    };

    setEtkinlikler(etkinlikler.map(etk => etk.id === guncellenmisEtkinlik.id ? guncellenmisEtkinlik : etk));
    setSeciliEtkinlik(guncellenmisEtkinlik);
    setAktifSayfa('detay');
  };

  const filtrelenmisEtkinlikler = etkinlikler.filter(e => {
    const metinUygun = e.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || e.aciklama.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = seciliKategori === 'Tümü' || e.kategori === seciliKategori;
    return metinUygun && kategoriUygun;
  });

  let baslik = "";
  let aciklama = "";
  if (aktifSayfa === 'anasayfa') { baslik = "Kampüs Etkinlikleri"; aciklama = "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin."; }
  else if (aktifSayfa === 'etkinlikler') { baslik = "Tüm Etkinlikler"; aciklama = "Ekim ayında kampüste düzenlenen etkinlikler."; }
  else if (aktifSayfa === 'ekle') { baslik = "Etkinlik Ekle"; }
  else if (aktifSayfa === 'detay') { baslik = "Etkinlik Detayı"; }
  else if (aktifSayfa === 'guncelle') { baslik = "Etkinliği Güncelle"; }

  return (
    <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f5f7f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <header style={{ background: '#1a933d', color: 'white', padding: '40px 40px 0 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Header baslik={baslik} aciklama={aciklama} />
          <Navigation aktifSayfa={aktifSayfa} sayfayaGit={sayfayaGit} />
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        
        {aktifSayfa === 'anasayfa' && (
          <div>
            <h2 style={{ color: '#333', fontSize: '22px', marginBottom: '20px' }}>Yaklaşan 2 Etkinlik</h2>
            <EtkinlikListesi etkinlikler={etkinlikler.slice(0, 2)} detaylaraGit={detaylaraGit} />
            <button onClick={() => sayfayaGit('etkinlikler')} style={{ background: '#1a933d', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              Tüm etkinlikleri gör
            </button>
          </div>
        )}

        {aktifSayfa === 'etkinlikler' && (
          <div>
            <EtkinlikFiltresi aramaMetni={aramaMetni} onAramaDegisti={setAramaMetni} seciliKategori={seciliKategori} onKategoriDegisti={setSeciliKategori} />
            <p style={{ color: '#1a933d', fontWeight: 'bold', marginBottom: '20px' }}>{filtrelenmisEtkinlikler.length} etkinlik listeleniyor.</p>
            <EtkinlikListesi etkinlikler={filtrelenmisEtkinlikler} detaylaraGit={detaylaraGit} bosMesaji="Arama kriterlerinize uygun etkinlik bulunamadı." />
          </div>
        )}

        {aktifSayfa === 'ekle' && (
          <div style={{ maxWidth: '600px' }}>
            <p style={{ color: '#555', marginBottom: '30px' }}>Bu sprintte form sadece görünüm; kayıt yapılmaz.</p>
            <EtkinlikFormu onSubmit={(e) => { e.preventDefault(); window.scrollTo(0,0); }} butonMetni="Kaydet" />
          </div>
        )}

        {aktifSayfa === 'detay' && seciliEtkinlik && (
          <EtkinlikDetay etkinlik={seciliEtkinlik} onGeriDon={() => sayfayaGit('etkinlikler')} onGuncelle={() => setAktifSayfa('guncelle')} />
        )}

        {aktifSayfa === 'guncelle' && seciliEtkinlik && (
          <div style={{ maxWidth: '600px' }}>
            <button onClick={() => setAktifSayfa('detay')} style={{ background: 'none', border: 'none', color: '#1a933d', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px', padding: 0, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              ← Detaylara Dön
            </button>
            <EtkinlikFormu onSubmit={etkinligiGuncelle} baslangicVerisi={seciliEtkinlik} butonMetni="Değişiklikleri Kaydet" />
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}