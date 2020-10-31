import React from 'react';
import './App.css';
import useAxios from './useAxios';

function App() {
  let { data, loading } = useAxios('http://api.tvmaze.com/shows');
  return (
    <div className="App">
      <div>
        {loading
          ? 'Loading...'
          : data.map((show) => {
              return <div id={show.id}>{show.name}</div>;
            })}
      </div>
    </div>
  );
}

export default App;
