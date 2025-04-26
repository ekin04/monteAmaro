import { singleton, fields } from "@keystatic/core";

export const caroselloHomeSingleton = singleton({
  label: "🎠 Carosello Attività Home",
  path: "src/content/carousel/caroselloattivita",
  format: { data: "json" },
  schema: {
    slide: fields.array(
      fields.object({
        title: fields.text({
          label: "Titolo",
          validation: { isRequired: true },
        }),
        link: fields.url({ label: "Link", validation: { isRequired: true } }),
        image: fields.image({
          label: "Immagine",
          directory: "src/assets/img/cms/carosello",
          publicPath: "/src/assets/img/cms/carosello",
          validation: { isRequired: true },
        }),
      }),
      {
        label: "Slide carosello attività",
        itemLabel: (props) => props.fields.title.value,
      },
    ),
  },
});
