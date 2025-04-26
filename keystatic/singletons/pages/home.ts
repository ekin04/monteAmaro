import { singleton, fields } from "@keystatic/core";

export const homePage = singleton({
  label: "🏠 Home",
  path: "src/content/pages/home",
  format: { data: "json" },
  schema: {
    seoTitle: fields.text({
      label: "Titolo SEO",
      validation: { 
        isRequired: true,
        length: { max: 80 }
       },
    }),
    seoDescription: fields.text({
      label: "Descrizione SEO",
      multiline: true,
      validation: { 
        isRequired: true, 
        length: { max: 160 }
      },

    }),
    slide: fields.array(
      fields.object({
        title: fields.text({
          label: "Titolo",
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: "Immagine",
          directory: "src/assets/img/cms/home",
          publicPath: "/src/assets/img/cms/home",
          validation: { isRequired: true },
        }),
      }),
      {
        label: "Slide hero Home",
        itemLabel: (props) => props.fields.title.value,
      }
    ),

    pretitle: fields.text({
      label: "Pre-titolo",
      validation: { isRequired: true },
    }),
    title: fields.text({
      label: "Titolo",
      validation: { isRequired: true },
    }),
    description: fields.text({
      label: "Descrizione",
      multiline: true,
      validation: { isRequired: true },
    }),
  },
});
