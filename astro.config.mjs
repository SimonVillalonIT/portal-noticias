// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [sanity({
        projectId: '0cxgagfd',
        dataset: 'production',
        useCdn: import.meta.env.PROD,
        apiVersion: "2025-04-08",
        studioBasePath: "/studio",
    }
    ), react()]
});
