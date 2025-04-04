"use server";
import { Cat } from "@/types";


function mapCatData(cat: Record<string, any>): Cat {
    return {
        id: cat.id,
        image: cat.url,
        breed: cat.breeds?.[0]?.name || "Unknown",
        temperament: cat.breeds?.[0]?.temperament || "Unknown",
    };
}

export default async function getCats(): Promise<Cat[]> {
    const CAT_API_KEY = process.env.CAT_API_KEY;
    const desiredCount = 12;

    let catsWithBreeds: Cat[] = [];
    let tries = 0;
  
    while (catsWithBreeds.length < desiredCount && tries < 5) {
      tries++;
  
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=1",
        {
          headers: {
            "x-api-key": CAT_API_KEY || "",
          },
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch cats");
      }
  
      const data = await res.json();
      const mapped = data.map(mapCatData).filter((cat: Cat) => cat.breed !== "Unknown");
      catsWithBreeds = [...catsWithBreeds, ...mapped];
    }
  
    return catsWithBreeds.slice(0, desiredCount);
  }
   