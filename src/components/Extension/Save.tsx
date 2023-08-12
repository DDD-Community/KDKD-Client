import { useEffect, useState } from 'react';
import { ColorPalette, gray } from '@/styles/ColorPalette';
import UrlInfoSection from './UrlInfoSection';
import { Input } from '@/components/ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../common/Typography';
import defaultUrlOGImage from '@/assets/images/defaultUrlOGImage.png';
import Home from '@/assets/svg/Home';
import IsNotSaved from '@/assets/svg/IsNotSaved';
import TagInput, { Tag } from '../common/TagInput';
import { useForm, Controller } from 'react-hook-form';

interface IFormInputs {
  urlTitle: string;
  category: string; //temp
  tags: Tag[];
  memo: string;
  saveForLater: boolean;
}

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
  urlAddress: {
    color: ColorPalette.gray[500],
    width: '235px',
    whiteSpace: 'nowrap' as const,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  helperTextStyle: {
    color: ColorPalette.error,
    paddingTop: '4xp',
    paddingLeft: '12px',
  },
  footer: {},
};

function Save() {
  const [url, setUrl] = useState(
    'https://www.default.com/hi-this-is-default-url',
  );

  const defaultValues: IFormInputs = {
    urlTitle: '',
    category: 'temp',
    tags: [],
    memo: '',
    saveForLater: false,
  };

  useEffect(() => {
    // 해당 페이지의 URL을 받아 URL 설정
    // setUrl(현재 페이지의 URL)
    defaultValues.urlTitle = url;
  }, []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues,
  });

  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
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
                  {...register('urlTitle', {
                    required: true,
                  })}
                />
                {errors.urlTitle && (
                  <Label style={styles.helperTextStyle}>
                    URL 타이틀을 비울 수 없습니다.
                  </Label>
                )}
              </section>
            </section>
          </section>
          <UrlInfoSection label={'카테고리'}>
            <Input placeholder="일단 임시방편 select 대신" />
          </UrlInfoSection>
          <UrlInfoSection label={'태그'}>
            <Controller
              name="tags"
              control={control}
              render={({ field: { onChange } }) => (
                <TagInput onChange={onChange} />
              )}
            />
          </UrlInfoSection>
          <UrlInfoSection label={'메모'}>
            <Textarea
              {...register('memo')}
              placeholder="메모 입력이 가능합니다."
            />
          </UrlInfoSection>
          <section style={{ display: 'flex', gap: '9px' }}>
            <input {...register('saveForLater')} type="checkbox" />
            <Label style={{ color: ColorPalette.gray[700] }}>
              나중에 볼 URL에 저장
            </Label>
          </section>
        </main>
        <footer style={{ width: '100%', display: 'flex', gap: '10px' }}>
          <Button variant="outline" style={{ flex: 1 }}>
            취소
          </Button>
          <Button type="submit" style={{ flex: 1 }}>
            확인
          </Button>
        </footer>
      </div>
    </form>
  );
}

export default Save;
