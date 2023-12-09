import { create } from "zustand";
import clientAxios from "../libs/axios/ClientAxios";


export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

interface movieStore {

    searchTerm: string
    page: number;
    movies: Movie[];
    card: Movie[];
    maxPage: number;
    allMovies: (searchName: string, page: number) => void;
    setPage: (value: number) => void;
    addToTheCard: (movie: Movie) => void;

}

const useMoviesStore = create<movieStore>((set) => ({

    searchTerm: "Batman",
    page: 1,
    movies: [],
    maxPage: 1,
    card: [],

    allMovies: async (searchName: string, page: number = 1) => {

        try {

            const { data } = await clientAxios(`https://www.omdbapi.com/?s=${searchName}&page=${page}&apikey=b7f28821`);

            set({
                movies: data.Search,
                maxPage: Math.round(data.totalResults / 10)
            });

            console.log(data)
        } catch (error) {

            set({
                movies: [],
                maxPage: 1
            });
        }
    },

    setPage: (value: number) => {
        set({ page: value });
    },

    addToTheCard: (movie: Movie) => {

        set((state) => {

            // If the product already in the cart

            if (!state.card.some(mov => mov.imdbID == movie.imdbID)) {

            }

            console.log(state.card);




            return {
                card: [...state.card, movie]
            }


        })
    }

}));

export default useMoviesStore;