import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

interface InputArray {
  type: string;
  placeholder: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SignUpContainerProps {
  inputArray: InputArray[];
  verficationArray:InputArray[];
  onSubmit: () => void;
  onVerify: () => void;
  footerlink: string;
}

const SignUpContainer: React.FC<SignUpContainerProps> = ({
  inputArray,
  verficationArray,
  onSubmit,
  onVerify,
  footerlink,
}) => {
  const [step, setStep] = useState<number>(0);

  const onStep0Submit = () => {
    onSubmit();
    setStep(1);
  };

  return (
    <div>
      {step === 0 && (
        <AuthForm
          step="signup"
          inputArray={inputArray}
          onSubmit={onStep0Submit}
          footerlink={footerlink}
        />
      )}

      {step === 1 && (
        <AuthForm
          step="signup"
          description="We have sent a verification code to the e-mail address you entered, by entering the code you can set your create your account."
          inputArray={verficationArray}
          onSubmit={onVerify}
          footerlink={footerlink}
        />
      )}
    </div>
  );
};

export default SignUpContainer;
