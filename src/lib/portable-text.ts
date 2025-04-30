import { toHTML } from '@portabletext/to-html';

export function renderPortableText(content: any[]) {
  return toHTML(content, {
    components: {
      types: {},
      marks: {
        strong: ({ children }) => `<strong>${children}</strong>`,
        em: ({ children }) => `<em>${children}</em>`,
        link: ({ value, children }) =>
          `<a href="${value.href}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${children}</a>`,
      },
      block: {
        normal: ({ children }) => `<p class="mb-4 text-base leading-relaxed">${children}</p>`,
        h1: ({ children }) => `<h1 class="text-3xl font-bold mb-2">${children}</h1>`,
        h2: ({ children }) => `<h2 class="text-2xl font-semibold mb-2">${children}</h2>`,
        h3: ({ children }) => `<h3 class="text-xl font-medium mb-2">${children}</h3>`,
      },
    },
  });
}