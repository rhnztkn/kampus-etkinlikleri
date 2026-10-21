import type { Etkinlik } from '../../types/etkinlik';
import EtkinlikKarti from './EtkinlikKarti';

interface EtkinlikListesiProps {
  etkinlikler: Etkinlik[];
  detaylaraGit: (etkinlik: Etkinlik) => void;
  bosMesaji?: string; // Etkinlik yoksa gösterilecek mesaj
}

export default function EtkinlikListesi({ etkinlikler, detaylaraGit, bosMesaji = "Gösterilecek etkinlik bulunamadı." }: EtkinlikListesiProps) {
  if (etkinlikler.length === 0) {
    return <p style={{ color: '#777', fontStyle: 'italic', marginBottom: '20px' }}>{bosMesaji}</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
      {etkinlikler.map(e => (
        <EtkinlikKarti key={e.id} e={e} detaylaraGit={detaylaraGit} />
      ))}
    </div>
  );
}