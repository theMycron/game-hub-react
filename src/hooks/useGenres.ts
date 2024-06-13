import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genres.results, isLoading: false, error: null };
};

export default useGenres;
