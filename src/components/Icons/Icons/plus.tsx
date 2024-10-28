export default function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="8"
        width="2"
        height="18"
        rx="1"
        fill="currentColor"
      />
      <rect
        y="8"
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
}
