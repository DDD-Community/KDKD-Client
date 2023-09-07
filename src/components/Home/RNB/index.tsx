import { Headline } from '@/components/common/Typography';
import S from './styles';
import HStack from '@/components/common/Stack/HStack';
import useSWR from 'swr';
import { fetcher } from '@/api';
import { SearchResult } from '../SearchResult';

function RNB() {
  const { data, isLoading } = useSWR<SearchResult>(
    [
      'urls/find',
      `?categoryId=&urlKeyword=&isWatched=true&order=&pageNo=&pageSize=`,
    ],
    ([url, params]: string[]) => fetcher(url, params),
  );

  return (
    <S.Container>
      <S.Header>
        <HStack gap={8}>
          <Headline className="headline-24-600">나중에 볼 url</Headline>
          <S.Count>{data?.totalCount}</S.Count>
        </HStack>
      </S.Header>
    </S.Container>
  );
}

export default RNB;
