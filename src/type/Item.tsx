
export enum StatusFilds {
  ON_SALE = 'on_sale',
  SOLD_OUT = 'sold_out',
  NOT_FOR_SALE = 'not_for_sale',
  DRAFT = 'draft',
  ON_DIGITALIZATION = 'on_digitalization',
  READY_FOR_VERIFICATION = 'ready_for_verification',
  PUBLISHED = 'published',
}
export interface Item {
    id: number;
    artwork_name: string;
    documents_number: number;
    has_notifications: boolean;
  status: StatusFilds;
    artist_name: string;
    creation_year: number;
    main_photo: MainPhoto;
    visibility?: string;
    views?: number;
    date_created: string;
    date_updated: string | null;
    price: number;
  }

export interface MainPhoto {
    id: string;
    width: number;
    height: number;
    title: string;
    filename_disk: string;
    transformations: Transformation[];
  }

export interface Transformation {
    preset_key: string;
    width: number;
    height: number;
    filename_disk: string;
  }

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}


export type SortField = keyof Item;
