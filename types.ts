
export interface MenuItem {
  id: string;
  category: 'Kasoami' | 'Es Teler';
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
