import { FaStar } from "react-icon/fa";

export default function StarRating({ noOfStars }) {
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return <FaStar />;
      })}
    </div>
  );
}
