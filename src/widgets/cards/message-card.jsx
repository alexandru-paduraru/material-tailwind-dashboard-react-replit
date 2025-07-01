
import PropTypes from "prop-types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function MessageCard({ img, name, message }) {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={img} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <h6 className="mb-1 font-sans text-base font-semibold text-gray-800 antialiased">
          {name}
        </h6>
        <p className="font-sans text-sm font-normal text-gray-600 antialiased">
          {message}
        </p>
      </div>
    </div>
  );
}

MessageCard.defaultProps = {
  img: "/img/team-2.jpeg",
  name: "Tania Andrew",
  message: "Hi there, I'm Jesse and I've been using your product for a few months now and I'm very happy with it.",
};

MessageCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
