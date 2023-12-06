import thumbUp from "../assets/thumb.png";
import trend from "../assets/trend.png";
import favorite from "../assets/favorite.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: thumbUp, alt: "thumbup" },
    4: { src: trend, alt: "Trend" },
    5: { src: favorite, alt: "Favorites" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
