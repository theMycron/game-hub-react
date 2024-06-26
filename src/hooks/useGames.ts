import useData from "./useData.ts";
import { Platform } from "./usePlatforms.ts";
import { GameQuery } from "../App.tsx";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: {
    platform: Platform;
  }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games", [gameQuery], {
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });
};

export default useGames;
