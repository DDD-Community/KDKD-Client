import { useEffect } from 'react';

function SearchDetail() {
  useEffect(() => {
    document.getElementById('content').style.backgroundColor =
      'rgba(0, 0, 0, 0.5)';

    return () => {
      document.getElementById('content').style.backgroundColor = 'white';
    };
  }, []);

  return (
    <div
      style={{
        width: '1060px',
        position: 'absolute',
        transform: 'translate(-50%, 0%)',
        left: '50%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        padding: '24px 32px',
      }}
    >
      <span>1231231223</span>
    </div>
  );
}

export default SearchDetail;
