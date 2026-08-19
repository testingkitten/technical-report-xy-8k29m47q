export function PageHero({
  title,
  lede,
}: {
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="center" style={{ marginBottom: 12 }}>
      <h2>{title}</h2>
      <p>
        <b>{lede}</b>
      </p>
      <hr className="stars" />
    </div>
  );
}
