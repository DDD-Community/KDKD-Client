import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import VStack from '@/components/common/Stack/VStack';
import HStack from '@/components/common/Stack/HStack';
import { Headline } from '@/components/common/Typography';
import UrlCard from '../UrlCard';
import { fetcher } from '@/api/index';
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
  } = useSWR<SearchResult>(
    [
      'urls/find',
      // eslint-disable-next-line prettier/prettier
      `?categoryId=${searchParams.get('categoryId') ?? ''}&urlKeyword=${searchParams.get('urlKeyword') ?? ''}&order=${searchParams.get('order') ?? ''}&pageNo=${searchParams.get('pageNo') ?? ''}&pageSize=${searchParams.get('pageSize') ?? ''}`,
    ],
    ([url, params]: string[]) => fetcher(url, params),
  );

  return (
    <S.Container>
      {isLoading && <div>IsLoading...</div>}
      {searchDetails && (
        <>
          <S.Header>
            <Headline className="headline-24-600">제목제목</Headline>
            <Headline className="headline-24-600">
              {searchDetails?.totalCount}
            </Headline>
          </S.Header>
          <VStack gap={18}>
            <HStack justifyContent="space-between">
              <span>최신순 오래된순</span>
              <span>25개씩 보기</span>
            </HStack>
            <VStack gap={12}>
              {searchDetails?.url.map((urlInfo) => (
                <UrlCard urlInfo={urlInfo} key={urlInfo.urlId} />
              ))}
            </VStack>
          </VStack>
        </>
      )}
    </S.Container>
  );
}

export default SearchResult;
