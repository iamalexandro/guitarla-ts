export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

//Could use Pick or Omit to extends or avoid specific items from a type

export type CartItem = Guitar & {
  quantity: number;
};

//lookup -> take the value of a key ['key'] It could be used directly on componentes
export type GuitarID = Guitar["id"];
