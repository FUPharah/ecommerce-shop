import { SizeLimit } from "next"

export interface Billboard {
  id: string
  label: string
  imageUrl: string
};

export interface Category {
  id: string
  name: string
  billboard: Billboard;
}

export interface Product {
  id: string
  name: string
  price: string
  category: Category
  isFeatured: boolean
  size: Size
  colour: Colour
  images: Image[]
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Colour {
  id: string
  name: string
  value: string
}

export interface Image {
  id: string
  url: string
}
