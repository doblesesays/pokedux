import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchPokemonSearch, fetchPokemonsWithDetails } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    if (value) {
      dispatch(fetchPokemonSearch(value));
    } else {
      dispatch(fetchPokemonsWithDetails());
    }
  }

  return <Input.Search
      placeholder='Buscar...'
      style={{ marginBottom: 10 }}
      onSearch={handleSearch}
      allowClear
    />;
};

export default Searcher;
