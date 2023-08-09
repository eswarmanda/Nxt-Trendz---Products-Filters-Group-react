import './index.css'

const RatingItem = props => {
  const {ratingDetails, onRatingClicked} = props
  const {imageUrl, ratingId} = ratingDetails
  const onClickRating = () => {
    onRatingClicked(ratingId)
  }
  return (
    <li className="list-ele">
      <button className="rating-button" type="button" onClick={onClickRating}>
        <img className="rate" src={imageUrl} alt={`rating ${ratingId}`} />
        <p>& up</p>
      </button>
    </li>
  )
}
export default RatingItem
