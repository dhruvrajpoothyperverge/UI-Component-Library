import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface InputArray {
  type: string;
  placeholder: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthFormProps {
  inputArray: InputArray[];
  onSubmit: () => void;
  description?: string;
  step: "signin" | "signup";
  footerlink: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  inputArray,
  onSubmit,
  description,
  step,
  footerlink,
}) => {
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const isAnyInputEmpty = inputArray.some((item) => !item.value.trim());

  return (
    <div>
      <div className="w-fit mx-auto mb-14">
        <Logo className="text-[28px]" />
      </div>

      {description !== "" && (
        <p className="font-medium text-xs text-white text-center mb-8">
          {description}
        </p>
      )}

      <form onSubmit={onFormSubmit} className="flex flex-col gap-4">
        {inputArray.map((item, index) => (
          <Input
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            onChange={item.onChange}
            required
          />
        ))}

        <Button
          variant="primarydark"
          text={step === "signin" ? "Sign In" : "Sign Up"}
          isGlow={true}
          type="submit"
          className="mt-4"
          disabled={isAnyInputEmpty}
        />
      </form>

      {step === "signup" ? (
        <p className="text-white text-center my-6 text-sm">
          Already have an account?{" "}
          <Link to={footerlink} className="text-primary underline">
            Sign In
          </Link>{" "}
          now!
        </p>
      ) : (
        <p className="text-white text-center my-6 text-sm">
          Don't you have an account?{" "}
          <Link to={footerlink} className="text-primary underline">
            Sign Up
          </Link>{" "}
          now!
        </p>
      )}
    </div>
  );
};

export default AuthForm;
