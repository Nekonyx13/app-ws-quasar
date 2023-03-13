export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Time {
  id: number;
  name?: string;
  description?: string;
  start: string;
  end: string;

  createdAt: string;

  happiness?: number;
}
