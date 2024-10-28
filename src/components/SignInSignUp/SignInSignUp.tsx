import React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Logo from "../Logo/Logo";

interface SignInSignUpProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const SignInSignUp: React.FC<SignInSignUpProps> = ({ onSignIn, onSignUp }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-fit mx-auto mb-14">
        <Logo className="text-[28px]" />
      </div>

      <Button
        text="Sign In"
        variant="primarydark"
        isGlow={true}
        onClick={onSignIn}
      />
      <Divider text="Or" />
      <Button
        text="Sign Up"
        variant="primarydark"
        isGlow={true}
        onClick={onSignUp}
      />
    </div>
  );
};

export default SignInSignUp;
