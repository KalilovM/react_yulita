export interface IModelCreate {
  // TODO: change some of them to required or optional
  name: string;
  article: string;
  cloth_type: string;
  suit: string;
  size: string;
  fabric_width: string;
  textile: string;
  dublerin_usage: string;
  flazelin_usage: string;
  actual_fabric_usage: string;
  lining: string;
  twist: string;
  technical_description: string;
  processing: string;
  furniture: string;
  photosession_images: string[];
  sample_images: string[];
  date_created: string;
  data_updated: string;
}

export interface IModelTypesList {
  id: number;
  name: string;
  data_created: string;
  data_updated: string;
}

export interface IModelImage {
  id: string;
  image: string;
}