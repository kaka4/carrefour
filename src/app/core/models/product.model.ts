export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductBasicInfos {
  id: string;
  category: string;
  title: string;
  price: number;
  image: string;
}


export interface ProductCart {
  product: ProductBasicInfos;
  quantity: number;
}


