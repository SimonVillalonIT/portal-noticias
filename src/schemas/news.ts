import { defineField, defineType } from "sanity";

export const CATEGORIES = [
  { title: "Política", value: "politica" },
  { title: "Economía", value: "economia" },
  { title: "Tecnología", value: "tecnologia" },
  { title: "Ciencia", value: "ciencia" },
  { title: "Salud", value: "salud" },
  { title: "Medio Ambiente", value: "medio_ambiente" },
  { title: "Cultura", value: "cultura" },
  { title: "Entretenimiento", value: "entretenimiento" },
  { title: "Deportes", value: "deportes" },
  { title: "Educación", value: "educacion" },
  { title: "Viajes", value: "viajes" },
  { title: "Gastronomía", value: "gastronomia" },
  { title: "Moda", value: "moda" },
  { title: "Opinión", value: "opinion" },
  { title: "Internacional", value: "internacional" },
  { title: "Local", value: "local" },
];

export default defineType({
  name: "news",
  title: "Noticia",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "summary",
      title: "Resumen",
      type: "text",
      description:
        "Pequeño resumen para mostrar en cards (máx. 200 caracteres)",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "imageUrl",
      title: "URL de la imagen",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Imagen subida",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: CATEGORIES,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "source",
      title: "Fuente",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "content",
      title: "Cuerpo de la noticia",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  // Validación a nivel documento: al menos una imagen
  validation: (Rule) =>
    Rule.custom((fields) =>
      fields?.imageUrl || fields?.image
        ? true
        : "Debes proporcionar una imagen o una URL de imagen.",
    ),
});
