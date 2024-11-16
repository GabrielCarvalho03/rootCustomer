export interface usePaginationProps {
  actualPage: number;
  setPage: (value: number) => void;

  handlePageChange: (page: number) => Promise<void>;
}
