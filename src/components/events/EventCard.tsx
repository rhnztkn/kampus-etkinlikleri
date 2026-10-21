import type { Etkinlik } from '../../types/etkinlik';

interface EtkinlikKartiProps {
  e: Etkinlik;
  detaylaraGit: (etkinlik: Etkinlik) => void;
}

export default function EtkinlikKarti({ e, detaylaraGit }: EtkinlikKartiProps) {
  return (
    <div style={{ border: '1px solid #ddd', borderTop: '4px solid #1a933d', borderRadius: '4px', padding: '20px', background: 'white', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h3 style={{ margin: 0, color: '#333', fontSize: '18px' }}>{e.baslik}</h3>
      <div><span style={{ color: '#1a933d', background: '#e8f5e9', padding: '4px 8px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>{e.kategori}</span></div>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>Tarih: {e.tarih}, {e.saat}</p>
      <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>Yer: {e.yer}</p>
      <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>Kontenjan: {e.kontenjan} kişi</p>
      <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>{e.aciklama}</p>
      <div style={{ marginTop: 'auto' }}>
        <button onClick={() => detaylaraGit(e)} style={{ background: 'none', border: 'none', color: '#1a933d', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Detayları gör</button>
      </div>
    </div>
  );
}