"use client";

import dynamic from "next/dynamic";

import { TextareaInput } from "@/components/inputs/TextareaInput";

import { Controls } from "./components/Controls";

import { useCompletionForm } from "./useCompletionForm";

const SavedPrompts = dynamic(() => import("./components/SavedPrompts"), {
  ssr: false,
});

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
    <>
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
          prompt={prompt}
          isLoading={isLoading}
          isPrompt={Boolean(prompt)}
          stop={stop}
        />
      </form>

      <div className="my-8 h-[1px] w-full bg-slate-200" />

      <SavedPrompts onPromptChange={onPromptChange} />
    </>
  );
};
