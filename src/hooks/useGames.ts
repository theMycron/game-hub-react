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
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games", [gameQuery], {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    },
  });
};

export default useGames;
