import SearchIcon from '@/assets/svg/Search';
import { Input } from '../ui/input';
import { CSSProperties } from 'react';

interface Props {
  width: string;
  style?: CSSProperties;
  onFocus?: () => void;
  onBlur?: () => void;
}

function SearchInput({ width, style, onFocus, onBlur }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width,
      }}
    >
      <Input
        style={style}
        onFocus={() => onFocus?.()}
        onBlur={() => onBlur?.()}
        placeholder="검색어를 입력하세요"
      />
      <div style={{ position: 'absolute', right: 16 }}>
        <SearchIcon width="24" height="24" />
      </div>
    </div>
  );
}

export default SearchInput;
