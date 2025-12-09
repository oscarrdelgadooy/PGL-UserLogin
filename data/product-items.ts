import uuid from "react-native-uuid";
import { Product } from "../types/Product";

export const PRODUCTS: Product[] = [
  // TABACO DE LIAR
  {
    id: uuid.v4(),
    name: "Manitou",
    family: "Tabaco de Liar",
    price: 7.5,
  },
  {
    id: uuid.v4(),
    name: "American Spirit",
    family: "Tabaco de Liar",
    price: 8.1,
  },
  {
    id: uuid.v4(),
    name: "Drum",
    family: "Tabaco de Liar",
    price: 6.95,
  },
  {
    id: uuid.v4(),
    name: "Virginia",
    family: "Tabaco de Liar",
    price: 7.2,
  },
  {
    id: uuid.v4(),
    name: "Chesterfield",
    family: "Tabaco de Liar",
    price: 6.8,
  },

  // TABACO INDUSTRIAL
  {
    id: uuid.v4(),
    name: "Marlboro",
    family: "Tabaco Industrial",
    price: 5.7,
  },
  {
    id: uuid.v4(),
    name: "Camel",
    family: "Tabaco Industrial",
    price: 5.6,
  },
  {
    id: uuid.v4(),
    name: "Lucky Strike",
    family: "Tabaco Industrial",
    price: 5.5,
  },
  {
    id: uuid.v4(),
    name: "Winston",
    family: "Tabaco Industrial",
    price: 5.4,
  },
  {
    id: uuid.v4(),
    name: "Ducados Rubio",
    family: "Tabaco Industrial",
    price: 5.2,
  },

  // TABACO NEGRO
  {
    id: uuid.v4(),
    name: "Black Devil",
    family: "Tabaco Negro",
    price: 5.8,
  },
  {
    id: uuid.v4(),
    name: "Tango",
    family: "Tabaco Negro",
    price: 5.3,
  },
  {
    id: uuid.v4(),
    name: "Fortuna Negro",
    family: "Tabaco Negro",
    price: 5.1,
  },
  {
    id: uuid.v4(),
    name: "Ducados Negro",
    family: "Tabaco Negro",
    price: 5.0,
  },
  {
    id: uuid.v4(),
    name: "Nobel Negro",
    family: "Tabaco Negro",
    price: 5.25,
  },

  // TABACO DE PIPA
  {
    id: uuid.v4(),
    name: "Dunhill Early Morning",
    family: "Tabaco de Pipa",
    price: 12.5,
  },
  {
    id: uuid.v4(),
    name: "Peterson Sherlock Holmes",
    family: "Tabaco de Pipa",
    price: 11.9,
  },
  {
    id: uuid.v4(),
    name: "Stanwell Melange",
    family: "Tabaco de Pipa",
    price: 10.8,
  },
  {
    id: uuid.v4(),
    name: "Mac Baren Vanilla",
    family: "Tabaco de Pipa",
    price: 11.2,
  },
  {
    id: uuid.v4(),
    name: "Capstan Original Navy Cut",
    family: "Tabaco de Pipa",
    price: 12.0,
  },

  // 💨 PUROS
  {
    id: uuid.v4(),
    name: "Cohiba Siglo I",
    family: "Puros",
    price: 14.0,
  },
  {
    id: uuid.v4(),
    name: "Montecristo No1",
    family: "Puros",
    price: 12.8,
  },
  {
    id: uuid.v4(),
    name: "Romeo y Julieta No1",
    family: "Puros",
    price: 11.9,
  },
  {
    id: uuid.v4(),
    name: "Partagás Serie D No1",
    family: "Puros",
    price: 13.5,
  },
  {
    id: uuid.v4(),
    name: "H. Upmann Magnumu16",
    family: "Puros",
    price: 12.4,
  },

  // ⚡ VAPES
  {
    id: uuid.v4(),
    name: "Elf Bar 600",
    family: "Vapes",
    price: 7.9,
  },
  {
    id: uuid.v4(),
    name: "WAKA Solo",
    family: "Vapes",
    price: 8.5,
  },
  {
    id: uuid.v4(),
    name: "Vaporesso XROS",
    family: "Vapes",
    price: 12.0,
  },
  {
    id: uuid.v4(),
    name: "OXVA Xlim",
    family: "Vapes",
    price: 19.9,
  },
  {
    id: uuid.v4(),
    name: "Lost Mary BM600",
    family: "Vapes",
    price: 8.1,
  },
];

