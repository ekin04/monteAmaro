import { collection, fields } from "@keystatic/core";

export const categorieCollection = collection({
  label: "📑 Categorie Blog",
  slugField: "title",
  path: "src/content/categorie/*",
  columns: ["title", "icon"],
  format: { contentField: "emptyContent" },
  schema: {
    emptyContent: fields.emptyContent({ extension: "md" }),
    title: fields.slug({
      name: { label: "Titolo", validation: { isRequired: true } },
    }),
    description: fields.text({
      label: "Breve descrizione",
      multiline: true,
      validation: { isRequired: true },
    }),
    icon: fields.text({
      label: "Icona categoria",
      validation: { isRequired: true },
      defaultValue: "mdi:mountain-outline",
    }),
  },
});
