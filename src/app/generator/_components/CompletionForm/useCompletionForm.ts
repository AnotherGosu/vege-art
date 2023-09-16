import { useCompletion } from "ai/react";

export const useCompletionForm = () => {
  const { setInput, ...rest } = useCompletion();

  const onPromptChange = (value: string) => {
    setInput(value);
  };

  return { ...rest, onPromptChange };
};
