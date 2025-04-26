import { config } from "@keystatic/core";
import { collections } from "./keystatic/collection";
import { singletons } from "./keystatic/singletons";
import React from "react";

import { siteConfig } from "./siteConfig";

export default config({
  storage: import.meta.env.DEV ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: siteConfig.keystaticProject },
  ui:{
    brand: {
        name: siteConfig.site.defaultTitle,
        mark: () =>
          React.createElement("img", { src: siteConfig.site.favicon, width: 35 }),
      },
      navigation: {
        Pagine: ["home"],
        /* Blog: ["blog", "categorie"],
        Home: ["caroselloHome"],
        Impostazioni: ["navbarHeader"], */
      },
  },
  collections,
  singletons,
});
