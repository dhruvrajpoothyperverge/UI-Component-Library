export default function UnknownError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 1L1 17h18L10 1z" fill="currentColor" />
      <text
        x="10"
        y="14"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="bold"
      >
        !
      </text>
    </svg>
  );
}
