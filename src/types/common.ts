export interface IMeta {
  page: number;
  limit: number;
  size: number;
  total: number
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta
}


export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export interface IDepartments  {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number,
  
};
