import platforms from "../data/platforms.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return { data: platforms.results, isLoading: false, error: null };
};

export default usePlatforms;
