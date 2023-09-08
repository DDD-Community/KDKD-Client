import HStack from '@/components/common/Stack/HStack';
import TempRNBPaginationImg from '@/assets/images/TempRNBPagination.png';

function Pagination() {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <img src={TempRNBPaginationImg} />
    </HStack>
  );
}

export default Pagination;
