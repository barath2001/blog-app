import { useEffect, useState } from "react";

const useFormInput = (isInvalid, defaultValue) => {
  const [input, setInput] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInvalid(input) === null) {
        setIsValid(true);
        setError(null);
      } else {
        if (isTouched) {
          setError(isInvalid(input));
        }
        setIsValid(false);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [input, isTouched]);

  const inputChangeHandler = (event) => setInput(event.target.value);

  const inputBlurHandler = () => setIsTouched(true);

  return { input, isValid, error, inputChangeHandler, inputBlurHandler };
};

export default useFormInput;
