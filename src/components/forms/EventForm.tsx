import React from 'react';
import type { Etkinlik } from '../../types/etkinlik';

interface EtkinlikFormuProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  baslangicVerisi?: Etkinlik | null;
  butonMetni: string;
}

const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' as const, fontSize: '14px' };
const labelStyle = { display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '14px' };

export default function EtkinlikFormu({ onSubmit, baslangicVerisi, butonMetni }: EtkinlikFormuProps) {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label style={labelStyle}>Etkinlik Adı</label>
        <input name="baslik" type="text" defaultValue={baslangicVerisi?.baslik || ''} placeholder="Örn. Kariyer Günleri 2026" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Kategori</label>
        <select name="kategori" defaultValue={baslangicVerisi?.kategori || 'Seminer'} style={inputStyle}>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Söyleşi">Söyleşi</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Tarih</label>
        <input name="tarih" type="text" defaultValue={baslangicVerisi?.tarih || ''} placeholder="Örn. 12 Ekim 2026" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Saat</label>
        <input name="saat" type="time" defaultValue={baslangicVerisi?.saat || ''} style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Yer</label>
        <input name="yer" type="text" defaultValue={baslangicVerisi?.yer || ''} placeholder="Örn. A Blok Konferans Salonu" style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Kontenjan</label>
        <input name="kontenjan" type="number" defaultValue={baslangicVerisi?.kontenjan || ''} style={inputStyle} required />
      </div>
      <div>
        <label style={labelStyle}>Açıklama</label>
        <textarea name="aciklama" rows={4} defaultValue={baslangicVerisi?.aciklama || ''} style={inputStyle} required></textarea>
      </div>
      <button type="submit" style={{ background: '#1a933d', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
        {butonMetni}
      </button>
    </form>
  );
}