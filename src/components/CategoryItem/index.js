import './index.css'

const CategoryItem = props => {
  const {categoryDetails, categoryClicked} = props
  const {name, categoryId} = categoryDetails

  const onClickCategory = () => {
    categoryClicked(categoryId)
  }
  return (
    <li className="list-ele">
      <button
        className="category-button"
        type="button"
        onClick={onClickCategory}
      >
        <p>{name}</p>
      </button>
    </li>
  )
}
export default CategoryItem
