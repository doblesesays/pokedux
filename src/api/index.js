import axios from 'axios';

export const getPokemon = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}

export const searchPokemon = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(res => [res.data])
  .catch((err) => console.log(err));
}
