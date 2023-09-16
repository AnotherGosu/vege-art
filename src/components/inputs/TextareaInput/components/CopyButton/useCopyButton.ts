import { useState, useEffect } from "react";

interface UseCopyButtonArgs {
  value: string;
}

export const useCopyButton = ({ value }: UseCopyButtonArgs) => {
  const [isToast, setIsToast] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    setIsToast(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToast(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isToast]);

  return { isToast, onCopy };
};
