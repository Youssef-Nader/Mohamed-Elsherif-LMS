// Central icon geometry keeps decorative SVGs consistent across components.
const paths = {
  up: "M12 19V5m-6 6 6-6 6 6",
  whatsapp:
    "M20.5 11.6a8.5 8.5 0 0 1-12.7 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6ZM8 7l2 3-1 1a9 9 0 0 0 4 4l1-1 3 1c-1 4-9 0-10-5Z",
  arrow: "M19 12H5m6-6-6 6 6 6",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18",
  play: "m9 5 11 7-11 7V5Z",
  check: "m5 12 4 4L19 6",
  sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  moon: "M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  chart: "M4 3v18h17M8 16v-5m5 5V7m5 9V4",
  trophy:
    "M8 3h8v7a4 4 0 0 1-8 0V3Zm4 11v6m-4 1h8M8 5H3v3a4 4 0 0 0 5 4m8-7h5v3a4 4 0 0 1-5 4",
  chat: "M21 11a9 9 0 0 1-9 9H3l2-5a9 9 0 1 1 16-4ZM8 10h8m-8 4h5",
  calendar:
    "M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2ZM7 2v6m10-6v6M3 11h18m-14 4h3m4 0h3",
  clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2",
  user: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 22v-3a8 8 0 0 1 16 0v3",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  phone: "m7 3 3 5-3 3a16 16 0 0 0 6 6l3-3 5 3v3c-10 3-21-8-18-18h4Z",
  lock: "M6 10h12v11H6V10Zm2 0V6a4 4 0 0 1 8 0v4m-4 5v3",
};
// WhatsApp uses a filled mark; the other icons share the stroked outline style.
export default function Icon({ name, size = 22, ...props }) {
  if (name === "whatsapp")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.59 5.97L0 24l6.25-1.64a11.94 11.94 0 0 0 5.8 1.48h.01C18.63 23.84 24 18.49 24 11.92c0-3.19-1.24-6.19-3.48-8.44ZM12.06 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 1 1 8.36 4.61Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    );
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.code} />
    </svg>
  );
}
