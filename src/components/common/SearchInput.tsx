import SearchIcon from '@/assets/svg/Search';
import { Input } from '../ui/input';
import { CSSProperties } from 'react';
interface Props {
  style?: CSSProperties;
  onFocus?: () => void;
  onBlur?: () => void;
}

function SearchInput({ style, onFocus, onBlur }: Props) {
  return (
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <Input style={style} onFocus={onFocus} onBlur={onBlur} />
      <div style={{ position: 'absolute', right: 16 }}>
        <SearchIcon width="24" height="24" />
      </div>
    </div>
  );
}

export default SearchInput;
