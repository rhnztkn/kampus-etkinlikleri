import type { SayfaAdi } from '../../types/page';

interface NavigationProps {
  aktifSayfa: SayfaAdi;
  sayfayaGit: (hedef: SayfaAdi) => void;
}

// App.tsx'ten buraya taşıdık
const sekmeStili = (aktif: boolean) => ({
  background: aktif ? 'white' : 'transparent',
  color: aktif ? '#1a933d' : 'white',
  border: 'none',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  cursor: 'pointer'
});

export default function Navigation({ aktifSayfa, sayfayaGit }: NavigationProps) {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <button onClick={() => sayfayaGit('anasayfa')} style={sekmeStili(aktifSayfa === 'anasayfa')}>Ana Sayfa</button>
      <button onClick={() => sayfayaGit('etkinlikler')} style={sekmeStili(aktifSayfa === 'etkinlikler')}>Etkinlikler</button>
      <button onClick={() => sayfayaGit('ekle')} style={sekmeStili(aktifSayfa === 'ekle')}>Ekle</button>
    </div>
  );
}