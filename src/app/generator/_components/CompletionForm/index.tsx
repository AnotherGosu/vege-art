"use client";

import { TextareaInput } from "@/components/inputs/TextareaInput";

import { Controls } from "./components/Controls";

import { useCompletionForm } from "./useCompletionForm";

export const CompletionForm = () => {
  const {
    completion,
    input: prompt,
    stop,
    isLoading,
    onPromptChange,
    handleSubmit,
  } = useCompletionForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <TextareaInput
          label="Prompt"
          name="prompt"
          placeholder="List 10 different colors"
          onChange={onPromptChange}
          value={prompt}
          isErase
        />

        <TextareaInput
          label="Completion"
          name="completion"
          value={completion}
          isDisabled
          isCopy
        />
      </div>

      <Controls
        isLoading={isLoading}
        isPrompt={Boolean(prompt)}
        stop={stop}
      />
    </form>
  );
};
