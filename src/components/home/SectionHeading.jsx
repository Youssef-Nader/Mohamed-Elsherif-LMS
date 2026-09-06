export default function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
