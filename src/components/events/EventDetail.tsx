import type { Etkinlik } from '../../types/etkinlik';

interface EtkinlikDetayProps {
  etkinlik: Etkinlik;
  onGeriDon: () => void;
  onGuncelle: () => void;
}

export default function EtkinlikDetay({ etkinlik, onGeriDon, onGuncelle }: EtkinlikDetayProps) {
  return (
    <div style={{ background: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <button onClick={onGeriDon} style={{ background: 'none', border: 'none', color: '#1a933d', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px', padding: 0, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '5px' }}>
        ← Geri Dön
      </button>

      <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '10px', marginTop: 0 }}>{etkinlik.baslik}</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <span style={{ color: '#1a933d', background: '#e8f5e9', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
          {etkinlik.kategori}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px', color: '#555', marginBottom: '30px', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <p style={{ margin: 0 }}><strong>📅 Tarih ve Saat:</strong> {etkinlik.tarih}, {etkinlik.saat}</p>
        <p style={{ margin: 0 }}><strong>📍 Yer:</strong> {etkinlik.yer}</p>
        <p style={{ margin: 0 }}><strong>👥 Kontenjan:</strong> {etkinlik.kontenjan} kişi</p>
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '15px' }}>Etkinlik Hakkında</h3>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', margin: 0 }}>{etkinlik.aciklama}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button onClick={onGuncelle} style={{ width: '100%', background: '#f39c12', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Etkinliği Güncelle
        </button>
      </div>
    </div>
  );
}