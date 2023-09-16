"use client";

import { TextareaInput } from "@/components/inputs/TextareaInput";

import { useTextFormatter } from "./useTextFormatter";

export const TextFormatter = () => {
  const {
    originalText,
    formattedText,
    onOriginalTextChange,
    onOriginalTextErase,
  } = useTextFormatter();

  return (
    <div className="flex gap-4">
      <TextareaInput
        label="Original text"
        name="originalText"
        placeholder={["brokkoli", "tomato", "avocado"].join("\n")}
        value={originalText}
        onChange={onOriginalTextChange}
        onErase={onOriginalTextErase}
      />

      <TextareaInput
        label="Formatted text"
        name="formattedText"
        placeholder={["brokkoli", "tomato", "avocado"].join(", ")}
        value={formattedText}
        isDisabled
        isCopy
      />
    </div>
  );
};
