import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    axios.get(url).then(({ data }) => {
      setState({ data: data, loading: false });
    });
  }, [url, setState]);

  return state;
};

export default useAxios;
