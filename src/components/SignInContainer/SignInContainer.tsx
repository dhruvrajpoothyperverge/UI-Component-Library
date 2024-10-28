import React from "react";
import AuthForm from "../AuthForm/AuthForm";

interface InputArray {
  type: string;
  placeholder: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SignInContainerProps {
  inputArray: InputArray[];
  onSubmit: () => void;
  footerlink: string;
}

const SignInContainer: React.FC<SignInContainerProps> = ({
  inputArray,
  onSubmit,
  footerlink,
}) => {
  return (
    <AuthForm
      step="signin"
      inputArray={inputArray}
      onSubmit={onSubmit}
      footerlink={footerlink}
    />
  );
};

export default SignInContainer;
