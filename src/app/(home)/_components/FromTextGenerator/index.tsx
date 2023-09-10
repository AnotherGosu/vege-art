"use client";

import { TextareaInput } from "@/components/inputs/TextareaInput";

import { useFromTextGenerator } from "./useFromTextGenerator";

export const FromTextGenerator = () => {
  const { originalText, generatedText, onOriginalTextChange } =
    useFromTextGenerator();

  return (
    <div className="flex gap-4">
      <TextareaInput
        label="Original text"
        name="originalText"
        placeholder={["brokkoli", "tomato", "avocado"].join("\n")}
        value={originalText}
        onChange={onOriginalTextChange}
      />

      <TextareaInput
        label="Generated text"
        name="generatedText"
        placeholder={["brokkoli", "tomato", "avocado"].join(", ")}
        value={generatedText}
        isDisabled
        isCopy
      />
    </div>
  );
};
