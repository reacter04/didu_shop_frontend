import { useContext, useState } from "react";
import Star from "./Star";
import { ShopContext } from "../../../Context/ShopContext";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const starContainerStyle = {
  display: "flex",
};


export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 30,
  className = "",
  messages = [],
  productId,
}) {
  
  const {votes, setVotes} = useContext(ShopContext)


  const defaultRating = () => {
    const voteForProduct = votes.find((_, index) => index + 1 === productId);
    return voteForProduct ? voteForProduct.rating : 0;
  }

  const [tempRating, setTempRating] = useState(defaultRating());

  function handleVote(ratingValue) {
    setVotes(prev => prev.map((item, i)  =>  i + 1 === productId ? {...item, voted: true, rating: ratingValue }: item))
    
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : defaultRating() >= i + 1}
            onRate={() => handleVote(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : defaultRating() - 1]
          : tempRating || defaultRating() || ""}
      </p>
    </div>
  );
}


