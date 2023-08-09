import CategoryItem from '../CategoryItem'

import RatingItem from '../RatingItem'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onInputSearch,
    onRatingClicked,
    categoryClicked,
    onClickFilter,
    handleKeyDown,
  } = props

  const onChangeSearchInput = event => {
    onInputSearch(event)
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        onChange={onChangeSearchInput}
        onKeyDown={handleKeyDown}
      />

      <h1 className="p">Category</h1>
      {categoryOptions.map(eachCategory => (
        <CategoryItem
          categoryDetails={eachCategory}
          key={eachCategory.categoryId}
          categoryClicked={categoryClicked}
        />
      ))}
      <p className="p">Rating</p>
      {ratingsList.map(eachRating => (
        <RatingItem
          ratingDetails={eachRating}
          key={eachRating.ratingId}
          onRatingClicked={onRatingClicked}
        />
      ))}
      <button className="clear-btn" type="button" onClick={onClickFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
