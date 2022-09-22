export interface IPaginatedData<T>
{
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  data: T[]
}

export interface IPagination
{
  pageNumber: number;
  pageSize: number;
}


export interface IFooterLinks {
  title: string;
  links: string[];
}
