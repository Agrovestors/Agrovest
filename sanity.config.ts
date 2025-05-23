import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import StudioNavbar from "./src/components/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Agrovestors_Studio",
  title: "Agrovestors Studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  // No schema needed for image uploads only
  schema: {
    types: [], // Empty schema since we're only uploading images
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});