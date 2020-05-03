import React from 'react';

const SearchShows = (props) => {
  const handleChange = (e) => {
    props.searchValue(e.target.value);
  };
  return (
    <form method="POST " name="formName">
      <label>
        Search Term:
        <input type="text" name="searchTerm" onChange={handleChange} />
      </label>
    </form>
  );
};

export default SearchShows;
