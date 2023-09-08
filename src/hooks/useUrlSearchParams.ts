import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useUrlSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [categoryId, setCategoryId] = useState('');
  const [urlKeyword, setUrlKeyword] = useState('');
  const [order, setOrder] = useState('');
  const [pageNo, setPageNo] = useState('');
  const [pageSize, setPageSize] = useState('');

  useEffect(() => {
    setCategoryId(searchParams.get('categoryId') ?? '');
    setUrlKeyword(searchParams.get('urlKeyword') ?? '');
    setOrder(searchParams.get('order') ?? 'desc');
    setPageNo(searchParams.get('pageNo') ?? '');
    setPageSize(searchParams.get('pageSize') ?? '25');
  }, [searchParams]);

  return {
    categoryId,
    urlKeyword,
    order,
    pageNo,
    pageSize,
  };
}
