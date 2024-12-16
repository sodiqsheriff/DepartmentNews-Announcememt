// types.ts
export interface NewsItem {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    publishedAt: string;
    url: string;
    category: string;
    author: string;
    slug: string;
  }


  export interface News {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
    publishedAt: string;
    category: string;
    _id?: string;      // Optional field (can be missing from some data sources)
    author?: string;   // Optional field (can be missing from some data sources)
    slug?: string;     // Optional field (can be missing from some data sources)
  }
  

  