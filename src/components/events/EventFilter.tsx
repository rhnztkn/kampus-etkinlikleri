interface EtkinlikFiltresiProps {
  aramaMetni: string;
  onAramaDegisti: (deger: string) => void;
  seciliKategori: string;
  onKategoriDegisti: (deger: string) => void;
}

const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' as const, fontSize: '14px' };

export default function EtkinlikFiltresi({ aramaMetni, onAramaDegisti, seciliKategori, onKategoriDegisti }: EtkinlikFiltresiProps) {
  return (
    <div style={{ display: 'flex', gap: '20px', background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '20px' }}>
      <div style={{ flex: 2 }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Etkinlik ara</label>
        <input type="text" placeholder="Örn. atölye, kariyer" value={aramaMetni} onChange={(e) => onAramaDegisti(e.target.value)} style={inputStyle} />
      </div>
      <div style={{ flex: 1 }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Kategori</label>
        <select value={seciliKategori} onChange={(e) => onKategoriDegisti(e.target.value)} style={inputStyle}>
          <option value="Tümü">Tümü</option>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Söyleşi">Söyleşi</option>
        </select>
      </div>
    </div>
  );
}