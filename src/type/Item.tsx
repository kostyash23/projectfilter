export interface Item {
    id: number;
    artwork_name: string;
    documents_number: number;
    has_notifications: boolean;
    status: 'on_sale' | 'sold_out' | 'not_for_sale' | 'draft';
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



export type SortField = keyof Item;
