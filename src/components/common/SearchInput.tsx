import { CSSProperties, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@/assets/svg/Search';
import { Input } from '../ui/input';

interface Props {
  width: string;
  style?: CSSProperties;
  onFocus?: () => void;
  onBlur?: () => void;
}

function SearchInput({ width, style, onFocus, onBlur }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setInputValue('');
    inputRef.current?.blur();
    onBlur?.();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue.trim().length > 0) {
      if (e.nativeEvent.isComposing) return;
      setSearchParams(`urlKeyword=${inputValue}`);
      handleInputBlur();
    } else if (e.key === 'Escape') {
      handleInputBlur();
    }
  };

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
        ref={inputRef}
        style={style}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
