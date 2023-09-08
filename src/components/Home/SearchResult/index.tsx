import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '@/api/index';
import VStack from '@/components/common/Stack/VStack';
import { Headline } from '@/components/common/Typography';
import UrlCard from '../UrlCard';
import NoResult from './NoResult';
import SubHeader from './SubHeader';
import S from './styles';

export interface UrlInfo {
  urlId: number;
  urlAddress: string;
  name: string;
  thumbnail: string;
  category: {
    categoryId: number;
    fullName: string;
  };
  tag: string[];
  memo: string;
}

export interface SearchResult {
  totalCount: number;
  url: UrlInfo[];
}

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: searchDetails,
    error,
    isLoading,
    isValidating,
  } = useSWR<SearchResult>(
    [
      'urls/find',
      // eslint-disable-next-line prettier/prettier
      `?categoryId=${searchParams.get('categoryId') ?? ''}&urlKeyword=${searchParams.get('urlKeyword') ?? ''}&order=${searchParams.get('order') ?? 'desc'}&pageNo=${searchParams.get('pageNo') ?? ''}&pageSize=${searchParams.get('pageSize') ?? 25}`,
    ],
    ([url, params]: string[]) => fetcher(url, params),
  );

  return (
    <S.Container>
      {searchDetails && (
        <>
          <S.Header>
            <Headline className="headline-24-600">검색 결과</Headline>
            <Headline className="headline-24-600">
              {searchDetails?.totalCount}
            </Headline>
          </S.Header>
          <VStack gap={18}>
            <SubHeader />
            <VStack gap={12}>
              {searchDetails?.url.map((urlInfo) => (
                <UrlCard urlInfo={urlInfo} key={urlInfo.urlId} />
              ))}
            </VStack>
          </VStack>
        </>
      )}
      {searchDetails?.url.length === 0 && <NoResult />}
      {error && <NoResult />}
    </S.Container>
  );
}

export default SearchResult;
