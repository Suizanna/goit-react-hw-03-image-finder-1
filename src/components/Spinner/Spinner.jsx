import Loader from "react-loader-spinner";
import { LoaderContainer } from "./Spinner.styled";

export const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#3f51b5" height={200} width={200} />
    </LoaderContainer>
  );
};



