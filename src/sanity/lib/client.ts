import { createClient } from 'next-sanity';

  export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4cq9bgt6',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2021-08-31',
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  });