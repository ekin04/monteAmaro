import { singleton, fields } from "@keystatic/core";
export const navbarHeaderSingleton = singleton({
  label: "🛠️ Navbar",
  path: "src/content/navbar/navbarHeader",
  format: { data: "json" },
  schema: {
    items: fields.array(
      fields.object({
        label: fields.text({
          label: "Etichetta",
          validation: { isRequired: true },
        }),
        path: fields.text({
          label: "Percorso",
          validation: { isRequired: true },
        }),
        icon: fields.text({
          label: "Icona",
          description:
            "Puoi trovare le icone qui https://icon-sets.iconify.design/mdi/",
        }),
        externalLink: fields.checkbox({ label: "Link esterno" }),
        children: fields.array(
          fields.object({
            label: fields.text({
              label: "Etichetta",
              validation: { isRequired: true },
            }),
            path: fields.text({
              label: "Percorso",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Sottomenu",
            itemLabel: (props) => props.fields.label.value,
          },
        ),
      }),
      {
        label: "Voci della Navbar Header",
        itemLabel: (props) => props.fields.label.value,
      },
    ),
  },
});
