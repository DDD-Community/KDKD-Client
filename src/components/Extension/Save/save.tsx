import { useEffect, useState } from 'react';
import { ColorPalette, gray } from '@/styles/ColorPalette';
import { Input } from '@/components/ui/input';
import Home from '@/assets/svg/Home';
import defaultUrlOGImage from '@/assets/images/defaultUrlOGImage.png';
import IsNotSaved from '@/assets/svg/IsNotSaved';
import { Controller, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { fetcher, requester } from '@/api/extension';
import TagInput, { Tag } from '@/components/common/TagInput';
import { Textarea } from '@/components/ui/textarea';
import UrlInfoSection from '@/components/Extension/UrlInfoSection';
import { Label } from '@/components/common/Typography';
import { Button } from '@/components/ui/button';
import CategorySelect from '@/components/common/CategorySelect/CategorySelect';
import { UrlDetailResponse } from '@/components/Extension/Save/types';

interface IFormInputs {
  urlTitle: string;
  category: number | null;
  tags: Tag[];
  memo: string;
  isWatchedLater: boolean;
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
};

function Save() {
  const [url, setUrl] = useState('www.naver.com');
  const { data: urlDetail }: { data: UrlDetailResponse } = useSWR(
    ['/urls', `?address=${url}`],
    ([url, params]) => fetcher(url, params),
  );

  const defaultValues: IFormInputs = {
    urlTitle: '',
    category: null,
    tags: [],
    memo: '',
    isWatchedLater: false,
  };

  async function getCurrentTabUrl() {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab?.url ?? '';
  }

  useEffect(() => {
    const setUrlTitle = async () => {
      const currentUrl = await getCurrentTabUrl();
      setUrl(currentUrl);
      // TODO: URL에 대한 데이터 담아오는 API 요청
    };
    setUrlTitle();
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

  const onSubmit = async (data: IFormInputs) => {
    try {
      const tag = data.tags.map((tag) => tag.text);

      await requester('/urls', 'POST', {
        urlAddress: url,
        name: data.urlTitle,
        categoryId: data.category,
        tag,
        memo: data.memo,
        isWatchedLater: data.isWatchedLater,
        thumbnail: '',
      });
      window.close();
    } catch (error) {
      console.error(error);
    }
  };

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
              src={urlDetail?.thumbnail ?? defaultUrlOGImage}
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
                    value: urlDetail?.isSaved ? urlDetail?.name : '',
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
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                // TODO: 카테고리 id 넣기
                <CategorySelect onChange={onChange} />
              )}
            />
          </UrlInfoSection>
          <UrlInfoSection label={'태그'}>
            <Controller
              name="tags"
              control={control}
              render={({ field: { onChange } }) => (
                // TODO: tag 데이터 넣기
                <TagInput onChange={onChange} />
              )}
            />
          </UrlInfoSection>
          <UrlInfoSection label={'메모'}>
            <Textarea
              {...register('memo', {
                value: urlDetail?.isSaved ? urlDetail?.memo : '',
              })}
              placeholder="메모 입력이 가능합니다."
            />
          </UrlInfoSection>
          <section style={{ display: 'flex', gap: '9px' }}>
            <input
              {...register('isWatchedLater', {
                value: urlDetail?.isWatchedLater,
              })}
              type="checkbox"
            />
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
