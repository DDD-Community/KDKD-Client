import { useState } from 'react';
import useSWR from 'swr';
import VStack from '@/components/common/Stack/VStack';
import HStack from '@/components/common/Stack/HStack';
import { Headline } from '@/components/common/Typography';
import UrlCard from '../UrlCard';
import { fetcher } from '@/api';
import S from './styles';

export interface UrlInfo {
  urlAddress: string;
  name: string;
  thumbnail: string;
  category_id: number;
  tag: string[];
  memo: string;
}

export interface SearchResult {
  totalCount: number;
  url: UrlInfo[];
}

function SearchResult() {
  const [categoryId, setCategoryId] = useState('');
  const [urlKeyword, setUrlKeyword] = useState('');
  const [isWatched, setIsWatched] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const { data, error } = useSWR<SearchResult, Error>(
    [
      'urls',
      `?categoryId=${categoryId}&urlKeyword=${urlKeyword}&isWatched=${isWatched}&order=${order}&pageNo=${pageNo}&pageSize=${pageSize}`,
    ],
    ([url, params]: string[]) => fetcher(url, params),
  );

  return (
    <S.Container>
      <S.Header>
        <Headline className="headline-24-600">제목제목</Headline>
        <Headline className="headline-24-600">{data?.totalCount}</Headline>
      </S.Header>
      <VStack gap={18}>
        <HStack justifyContent="space-between">
          <span>최신순 오래된순</span>
          <span>25개씩 보기</span>
        </HStack>
        <VStack gap={12}>
          {data?.url.map((urlInfo) => (
            <UrlCard urlInfo={urlInfo} key={urlInfo.urlAddress} />
          ))}
        </VStack>
      </VStack>
    </S.Container>
  );
}

export default SearchResult;
