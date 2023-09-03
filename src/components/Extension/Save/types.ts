export interface UrlDetailResponse {
  isSaved: boolean;
  urlAddress: string;
  name: string;
  thumbnail: string;
  category_id?: number;
  tag?: string[];
  memo?: string;
  isWatchedLater?: boolean;
}
