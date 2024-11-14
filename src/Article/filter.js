import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value, keyword);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    onFilter(category, e.target.value);
  };

  const clearFilters = () => {
    setCategory('');
    setKeyword('');
    onFilter('', '');
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Technology">Technology</option>
        <option value="Science">Science</option>
        <option value="Sports">Sports</option>
      </select>
      <input
        type="text"
        placeholder="Search by keyword"
        value={keyword}
        onChange={handleKeywordChange}
      />
      <button onClick={clearFilters}>Clear</button>
    </div>
  );
};

export default Filter;
