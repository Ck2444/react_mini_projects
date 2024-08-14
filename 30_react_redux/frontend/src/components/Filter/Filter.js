import React from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilters,
  selectOnlyFavoriteFilter,
  seletAuthorFilter,
  seletTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlices';

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(seletTitleFilter);
  const authorFilter = useSelector(seletAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filterts
        </button>
      </div>
    </div>
  );
}
