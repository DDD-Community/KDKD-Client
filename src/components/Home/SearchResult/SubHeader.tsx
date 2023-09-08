import { useSearchParams } from 'react-router-dom';
import HStack from '@/components/common/Stack/HStack';
import S, { styles } from './styles';
import PopoverStyle from '@/components/common/Popover/styles';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ArrowDownIcon from '@/assets/svg/ArrowDownIcon';
import useUrlSearchParams from '@/hooks/useUrlSearchParams';

function SubHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { order, pageSize } = useUrlSearchParams();

  const toggleOrder = (newOrder: 'asc' | 'desc') => {
    if (order === newOrder) return;

    searchParams.set('order', newOrder);
    setSearchParams(searchParams);
  };

  const changePageSize = (newPageSize: number) => {
    if (pageSize === newPageSize.toString()) return;

    searchParams.set('pageSize', newPageSize.toString());
    setSearchParams(searchParams);
  };

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      style={{ width: '100%' }}
    >
      <S.OrderToggleContainer>
        <S.OrderToggleItem
          onClick={() => toggleOrder('desc')}
          style={{
            ...(order !== 'asc' ? styles.orderToggleSelected : {}),
          }}
        >
          최신순
        </S.OrderToggleItem>
        <S.OrderToggleItem
          onClick={() => toggleOrder('asc')}
          style={{
            ...(order === 'asc' ? styles.orderToggleSelected : {}),
          }}
        >
          오래된순
        </S.OrderToggleItem>
      </S.OrderToggleContainer>
      <HStack>
        <Popover>
          <PopoverTrigger>
            <HStack alignItems="center" gap={2}>
              {pageSize ?? 25}개씩 보기 <ArrowDownIcon />
            </HStack>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverStyle.Container>
              <PopoverStyle.ContentItem onClick={() => changePageSize(25)}>
                25개씩 보기
              </PopoverStyle.ContentItem>
              <PopoverStyle.ContentItem onClick={() => changePageSize(50)}>
                50개씩 보기
              </PopoverStyle.ContentItem>
              <PopoverStyle.ContentItem onClick={() => changePageSize(100)}>
                100개씩 보기
              </PopoverStyle.ContentItem>
            </PopoverStyle.Container>
          </PopoverContent>
        </Popover>
      </HStack>
    </HStack>
  );
}

export default SubHeader;
