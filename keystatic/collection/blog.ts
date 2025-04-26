import { collection, fields } from "@keystatic/core";

export const blogCollection = collection({
  label: "📰 Blog",
  slugField: "title",
  path: "src/content/blog/*",
  columns: ["title", "date"],
  format: { contentField: "body" },
  entryLayout: "content",
  schema: {
    title: fields.slug({
      name: {
        label: "Titolo",
        validation: { isRequired: true, length: { max: 60 } },
      },
    }),
    excerpt: fields.text({
      label: "Breve descrizione",
      multiline: true,
      validation: { length: { max: 160 }, isRequired: true },
    }),
    date: fields.datetime({
      label: "Data di pubblicazione",
      validation: { isRequired: true },
      defaultValue: { kind: "now" },
    }),
    thumbnail: fields.image({
      label: "Immagine in evidenza",
      directory: "src/assets/img/cms/blog",
      publicPath: "/src/assets/img/cms/blog",
      validation: { isRequired: true },
    }),
    body: fields.markdoc({
      label: "Scrivi il tuo articolo",
      extension: "md",
      options: {
        image: {
          directory: "public/img/blogEntry",
          publicPath: "/img/blogEntry",
        },
      },
    }),
    categoria: fields.array(
      fields.relationship({
        label: "Categorie",
        validation: { isRequired: true },
        description: "Lista delle categorie di questo articolo",
        collection: "categorie",
      }),
      {
        label: "Categorie",
        itemLabel: (item) => item.value || "Seleziona una categoria",
      },
    ),
  },
});
