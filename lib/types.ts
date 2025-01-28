export interface Blog {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface BlogListResponse {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
}
