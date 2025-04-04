export type Cat = {
    id: string;
    image: string;
    breed: string;
    temperament: string;
}

export type CatApiResponse = {
    id: string;
    url: string;
    breeds: {
      name: string;
      temperament: string;
    }[];
};