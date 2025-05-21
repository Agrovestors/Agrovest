import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Agrovestors CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4cq9bgt6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema,
});