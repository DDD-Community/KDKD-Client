export default function Done({
  onClick,
}: {
  onClick: React.MouseEventHandler<SVGSVGElement>;
}) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
        fill="#0643F1"
      />
      <path
        d="M7.30338 11.4843L5.07674 9.25765C4.82863 9.00954 4.43419 9.00954 4.18608 9.25765C3.93797 9.50576 3.93797 9.9002 4.18608 10.1483L6.85169 12.8139C7.0998 13.062 7.5006 13.062 7.74871 12.8139L14.4922 6.07674C14.7404 5.82863 14.7404 5.43419 14.4922 5.18608C14.2441 4.93797 13.8497 4.93797 13.6016 5.18608L7.30338 11.4843Z"
        fill="white"
      />
    </svg>
  );
}
