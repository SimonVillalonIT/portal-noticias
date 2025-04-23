import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'Noticia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'summary',
      title: 'Resumen',
      type: 'text',
      description: 'Pequeño resumen para mostrar en cards (máx. 200 caracteres)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'imageUrl',
      title: 'URL de la imagen',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Imagen subida',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
    defineField({
      name: 'source',
      title: 'Fuente',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'content',
      title: 'Cuerpo de la noticia',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
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
        : 'Debes proporcionar una imagen o una URL de imagen.'
    ),
})