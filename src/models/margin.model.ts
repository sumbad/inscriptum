export type Margin = {
  id: string;
  pageId: string;
  img?: string;
  imgBase64?: string | null;
  options?: MarginOptions;
};


export interface MarginOptions {
  width: number;
  height: number;
  ratio: number;
  type: string;
}