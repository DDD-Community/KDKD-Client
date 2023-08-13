function AddIcon({
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
    >
      <rect width="18" height="18" rx="9" fill="#ADB5C2" />
      <path
        d="M12.4286 9.57143H9.57143V12.4286C9.57143 12.7429 9.31429 13 9 13C8.68571 13 8.42857 12.7429 8.42857 12.4286V9.57143H5.57143C5.25714 9.57143 5 9.31429 5 9C5 8.68571 5.25714 8.42857 5.57143 8.42857H8.42857V5.57143C8.42857 5.25714 8.68571 5 9 5C9.31429 5 9.57143 5.25714 9.57143 5.57143V8.42857H12.4286C12.7429 8.42857 13 8.68571 13 9C13 9.31429 12.7429 9.57143 12.4286 9.57143Z"
        fill="white"
      />
    </svg>
  );
}

export default AddIcon;
