interface HeaderProps {
  baslik: string;
  aciklama?: string; // Soru işareti (?) bu prop'un isteğe bağlı olduğunu gösterir
}

export default function Header({ baslik, aciklama }: HeaderProps) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>{baslik}</h1>
      {aciklama && <p style={{ margin: 0, fontSize: '16px' }}>{aciklama}</p>}
    </div>
  );
}