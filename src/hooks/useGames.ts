import useData from "./useData.ts";
import { Genre } from "./useGenres.ts";
import { Platform } from "./usePlatforms.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: {
    platform: Platform;
  }[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) => {
  return useData<Game>("/games", [selectedGenre?.id, selectedPlatform?.id], {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id,
    },
  });
};

export default useGames;
