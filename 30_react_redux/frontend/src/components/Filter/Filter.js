import React from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilters,
  seletAuthorFilter,
  seletTitleFilter,
  setAuthorFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlices';

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(seletTitleFilter);
  const authorFilter = useSelector(seletAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>

        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>

        <button type="button" onClick={handleResetFilters}>
          Reset Filterts
        </button>
      </div>
    </div>
  );
}
