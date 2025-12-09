import { ImageSourcePropType } from "react-native";

export type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const CATEGORIES: Category[] = [
  {
    id: "Vapes",
    name: "Vapes",
    image: require("../assets/categoriesPics/Vapes.png"),
  },
  {
    id: "Puros",
    name: "Puros",
    image: require("../assets/categoriesPics/Puros.png"),
  },
  {
    id: "Tabaco de Liar",
    name: "Tabaco de Liar",
    image: require("../assets/categoriesPics/TabacoDeLiar.png"),
  },
  {
    id: "Tabaco Negro",
    name: "Tabaco Negro",
    image: require("../assets/categoriesPics/TabacoNegro.png"),
  },
  {
    id: "Tabaco Industrial",
    name: "Tabaco Industrial",
    image: require("../assets/categoriesPics/TabacoIndustrial.png"),
  },
  {
    id: "Tabaco de Pipa",
    name: "Tabaco de Pipa",
    image: require("../assets/categoriesPics/TabacodePipa.png"),
  }
];
