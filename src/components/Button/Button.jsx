import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};