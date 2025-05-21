import { PortableTextBlock } from '@portabletext/react';

   export interface TeamMember {
     _id: string;
     name: string;
     image: {
       asset: { _ref: string };
       alt: string;
     };
     role: string;
     quote?: string;
     speech?: PortableTextBlock[];
   }

   export interface SiteImage {
     _id: string;
     name: string;
     image: {
       asset: { _ref: string };
       alt: string;
     };
   }

   export interface Author {
     _id: string;
     _type: string;
     _createdAt: string;
     _rev: string;
     _updatedAt: string;
     name: string;
     slug: {
       current: string;
     };
     image: {
       asset: { _ref: string };
       alt: string;
     };
     description: string;
   }

   export interface Category {
     _id: string;
     title: string;
   }

   export interface Post {
     _id: string;
     _type: string;
     _createdAt: string;
     _rev: string;
     _updatedAt: string;
     title: string;
     slug: {
       current: string;
     };
     mainImage: {
       asset: { _ref: string };
       alt: string;
     };
     description: string;
     body: PortableTextBlock[];
     publishedAt: string;
     author: Author;
     categories: Category[];
   }