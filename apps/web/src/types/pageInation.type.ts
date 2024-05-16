export interface IPageInationQueries {
  take?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface IpageInationMeta {
  page: number;
  take: number;
  total: number;
}
