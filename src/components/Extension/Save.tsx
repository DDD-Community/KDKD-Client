import { useEffect, useState } from 'react';
import { ColorPalette, gray } from '@/styles/ColorPalette';
import { Input } from '@/components/ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../common/Typography';
import defaultUrlOGImage from '@/assets/images/defaultUrlOGImage.png';
import Home from '@/assets/svg/Home';
import IsNotSaved from '@/assets/svg/IsNotSaved';

const styles = {
  container: {
    width: '370px',
    padding: '15px 15px 20px 15px',
    backgroundColor: gray[100],
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  urlSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  urlRightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  urlInfoSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5px',
  },
  urlAddress: {
    color: ColorPalette.gray[500],
    width: '235px',
    whiteSpace: 'nowrap' as const,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  footer: {},
};

function Save() {
  const [url, setUrl] = useState(
    'https://www.default.com/hi-this-is-default-url',
  );
  const [pageOGImage, setPageOGImage] = useState('');
  const [urlTitle, setUrlTitle] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [tagList, setTagList] = useState([]);
  const [memo, setMemo] = useState('');
  const [saveForLater, setSaveForLater] = useState(false);

  const [urlInputError, setUrlInputError] = useState({
    isError: false,
    helperText: '',
  });

  useEffect(() => {
    urlTitle.length === 0
      ? setUrlInputError({
          isError: true,
          helperText: 'URL 타이틀을 비울 수 없습니다.',
        })
      : setUrlInputError({ isError: false, helperText: '' });
  }, [urlTitle]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Home />
      </header>
      <main style={styles.main}>
        <section style={styles.urlSection}>
          <img
            style={{ width: '70px', height: '70px' }}
            src={defaultUrlOGImage}
            alt="Page Og Image"
          />
          <section style={styles.urlRightSection}>
            <section style={{ display: 'flex', gap: '5px' }}>
              <IsNotSaved />
              <Label style={styles.urlAddress}>{url}</Label>
            </section>
            <section>
              <Input
                type="text"
                placeholder="URL 제목을 입력하세요."
                error={urlInputError}
                value={urlTitle}
                onChange={(e) => setUrlTitle(e.target.value)}
              />
            </section>
          </section>
        </section>
        <section style={styles.urlInfoSection}>
          <Label style={{ color: ColorPalette.gray[500] }}>카테고리</Label>
          <Input placeholder="일단 임시방편 select 대신" />
        </section>
        <section style={styles.urlInfoSection}>
          <Label style={{ color: ColorPalette.gray[500] }}>태그</Label>
          <Input placeholder="10개 입력부터 가능" />
        </section>
        <section style={styles.urlInfoSection}>
          <Label style={{ color: ColorPalette.gray[500] }}>메모</Label>
          <Textarea placeholder="메모 입력이 가능합니다." />
        </section>
        <section style={{ display: 'flex', gap: '9px' }}>
          <input type="checkbox" />
          <Label style={{ color: ColorPalette.gray[700] }}>
            나중에 볼 URL에 저장
          </Label>
        </section>
      </main>
      <footer style={{ width: '100%', display: 'flex', gap: '10px' }}>
        <Button variant="outline" style={{ flex: 1 }}>
          취소
        </Button>
        <Button style={{ flex: 1 }}>확인</Button>
      </footer>
    </div>
  );
}

export default Save;
