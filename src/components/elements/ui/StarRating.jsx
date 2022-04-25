import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { StarFullIcon, StarEmptyIcon } from "../icons";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        initialValue={4.8}
        emptyIcon={<StarEmptyIcon />}
        fullIcon={<StarFullIcon />}
        readonly={true}
      />
    </div>
  );
};

export default StarRating;
