import { Headline } from '@/components/common/Typography';
import S from './styles';
import HStack from '@/components/common/Stack/HStack';
import useSWR from 'swr';
import { fetcher } from '@/api';
import { SearchResult, UrlInfo } from '../SearchResult';
import VStack from '@/components/common/Stack/VStack';
import LaterUrlCard from './LaterUrlCard';
import Pagination from './Pagination';

function RNB() {
  const { data, isLoading } = useSWR<SearchResult>(
    [
      'urls/find',
      `?categoryId=&urlKeyword=&isWatched=true&order=&pageNo=&pageSize=`,
    ],
    ([url, params]: string[]) => fetcher(url, params),
  );

  const temp: UrlInfo = {
    urlId: 17,
    urlAddress: 'https://www.youtube.com/',
    name: '유튜브유튜브유튜브유튜브유튜브유튜브유튜브유튜브유튜브유튜브유튜브',
    thumbnail: '',
    category: {
      categoryId: 57,
      fullName: '장소',
    },
    tag: ['구글', '태그'],
    memo: '메모',
  };

  return (
    <S.Container>
      <S.Header>
        <HStack gap={8}>
          <Headline className="headline-24-600">나중에 볼 url</Headline>
          {data && <S.Count>{data?.totalCount}</S.Count>}
        </HStack>
      </S.Header>
      <VStack gap={12}>
        <Pagination />
        {data ? <LaterUrlCard urlInfo={temp} /> : <div />}
      </VStack>
    </S.Container>
  );
}

export default RNB;
