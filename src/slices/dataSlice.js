import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading, setNotFound } from "./uiSlice";
import { searchPokemon } from '../api/index';

const initialState = {
    pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true));
        dispatch(setNotFound(false));
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const fetchPokemonSearch = createAsyncThunk(
    'data/fetchPokemonSearch',
    async (name, {dispatch}) => {
        dispatch(setLoading(true));
        const pokemonsRes = await searchPokemon(name);

        if (pokemonsRes) {
            dispatch(setPokemons(pokemonsRes));
            dispatch(setNotFound(false));
        } else {
            dispatch(setPokemons([]));
            dispatch(setNotFound(true));
        }
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
        
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        }
    }
});

export const { setPokemons, setFavorite } = dataSlice.actions;
console.log(dataSlice)
export default dataSlice.reducer;