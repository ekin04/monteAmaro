import { caroselloHomeSingleton } from "./caroselloHome";
import { navbarHeaderSingleton } from "./navbarHeader";
import { homePage } from "./pages/home";

export const singletons = {
  caroselloHome: caroselloHomeSingleton,
  navbarHeader: navbarHeaderSingleton,
  home: homePage,
};
