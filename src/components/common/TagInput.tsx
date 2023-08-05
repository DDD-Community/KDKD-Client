import { useEffect, useRef, useState } from 'react';
import { ColorPalette } from '@/styles/ColorPalette';
import { Body, Label } from './Typography';
import TagCancelIcon from '@/assets/svg/TagCancelIcon';

export interface Tag {
  text: string;
  id: number;
}

interface Props {
  onTagChange: (tag: Tag[]) => void;
}

const styles = {
  container: {
    position: 'relative' as const,
    width: '340px',
    minHeight: '40px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
    padding: '10px',
    borderRadius: '4px',
    background: ColorPalette.white,
    cursor: 'text',
  },
  tag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 8px 6px 12px',
    borderRadius: '4px',
    backgroundColor: ColorPalette.blue['000'],
    cursor: 'pointer',
  },
  input: {
    border: 'none',
    fontSize: '12px',
    fontWeight: '400',
    outline: 'none',
  },
  placeholder: {
    position: 'absolute' as const,
    left: '10px',
    color: ColorPalette.gray[500],
  },
};

function TagInput({ onTagChange }: Props) {
  const CHARACTER_WIDTH = 10.5;
  const [tags, setTags] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inputWidth, setInputWidth] = useState(4);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (e.key === 'Enter' && inputValue.trim().length > 0) {
      if (e.nativeEvent.isComposing) return;

      setTags((prevTags) => [
        ...prevTags,
        { text: `# ${inputValue.trim()}`, id: Date.now() },
      ]);
      setInputValue('');
    }

    if (e.key === 'Backspace' && inputValue.trim().length === 0) {
      setTags((prevTags) => [...prevTags.slice(0, prevTags.length - 1)]);
    }
  };

  useEffect(() => {
    onTagChange([...tags]);
  }, [tags]);

  useEffect(() => {
    setInputWidth((inputValue.length + 1) * CHARACTER_WIDTH);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.length === 0 && tags.length === 0) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }
  }, [inputValue, tags]);

  const handleTagDelete = (tagId: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
  };

  return (
    <div style={styles.container} onClick={focusInput}>
      {tags.map((tag) => (
        <div key={tag.id} style={styles.tag}>
          <Label>{tag.text}</Label>
          <TagCancelIcon onClick={() => handleTagDelete(tag.id)} />
        </div>
      ))}
      <input
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        style={{ ...styles.input, width: inputWidth }}
      />
      {showPlaceholder && (
        <Body style={styles.placeholder}>
          태그는 최대 10개까지 입력 가능합니다.
        </Body>
      )}
    </div>
  );
}

export default TagInput;
