import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    useCdn: import.meta.env.PROD,
    apiVersion: "2025-04-08",
})
