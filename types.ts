
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  content: string;
  rating: number;
  treatment: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
