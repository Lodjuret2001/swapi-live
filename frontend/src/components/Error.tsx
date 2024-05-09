import deathStarIcon from "../assets/images/death-star-icon.png";
import { ErrorButton, ErrorText } from "../styles/styledComponents";

const Error = ({ error }: ErrorProps) => {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <ErrorText $red>Welcome to the Dark Side</ErrorText>
      <div className="flex items-center justify-center mt-6">
        <img className="w-2/5 animate-bounce" src={deathStarIcon} />
      </div>
      <ErrorText>{error}</ErrorText>
      <ErrorText>"Great shot kid. That was one in a million."</ErrorText>
      <ErrorButton onClick={() => window.location.reload()}>
        Lets get you home
      </ErrorButton>
    </div>
  );
};

type ErrorProps = {
  error: string;
};

export default Error;
