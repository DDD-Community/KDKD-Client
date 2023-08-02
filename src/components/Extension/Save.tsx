import { useEffect, useState } from 'react';
import { gray } from '@/styles/ColorPalette';
import { Input } from '@/components/ui/input';
import { Label } from '../common/Typography';
import defaultUrlOGImage from '@/assets/images/defaultUrlOGImage.png';

const styles = {
  container: {
    width: '370px',
    height: '502px',
    padding: '15px 15px 20px 15px',
    backgroundColor: gray[100],
  },
  header: {},
  urlSection: {
    display: 'flex',
    gap: '10px',
  },
  urlLeftSection: {
    flex: 1,
  },
  footer: {},
};

function Save() {
  const [url, setUrl] = useState('');
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
      <header style={styles.header}></header>
      <main style={styles.urlSection}>
        <img src={defaultUrlOGImage} alt="Page Og Image" />
        <section style={styles.urlLeftSection}>
          <section></section>
          <Input
            type="text"
            placeholder="URL 제목을 입력하세요."
            error={urlInputError}
            value={urlTitle}
            onChange={(e) => setUrlTitle(e.target.value)}
          />
        </section>
      </main>
      <main>
        <section>
          <Label>카테고리</Label>
          {/* <Input placeholder="태그는 최대 10개까지 입력 가능합니다." /> */}
        </section>
        <section>
          <Label>태그</Label>
          <Input placeholder="태그는 최대 10개까지 입력 가능합니다." />
        </section>
        <section>
          <Label>메모</Label>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Save;
