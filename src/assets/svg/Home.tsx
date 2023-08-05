interface Props {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

function Home({ onClick }: Props) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{ ':hover': { cursor: 'pointer' } }}
      onClick={onClick}
    >
      <path
        d="M0.5 18C0.223858 18 0 17.7761 0 17.5V6.25C0 6.09262 0.0740971 5.94443 0.2 5.85L7.7 0.225C7.87778 0.0916667 8.12222 0.0916666 8.3 0.225L15.8 5.85C15.9259 5.94443 16 6.09262 16 6.25V17.5C16 17.7761 15.7761 18 15.5 18H10.5C10.2239 18 10 17.7761 10 17.5V11.5C10 11.2239 9.77614 11 9.5 11H6.5C6.22386 11 6 11.2239 6 11.5V17.5C6 17.7761 5.77614 18 5.5 18H0.5Z"
        fill="#101828"
      />
    </svg>
  );
}

export default Home;
