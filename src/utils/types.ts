export type FetchCarsProps = {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
};

export type UpadateSearchParams = {
  type: string;
  value: string;
};
