"use client";

import { TextareaInput } from "@/components/inputs/TextareaInput";

import { useTextFormatter } from "./useTextFormatter";

export const TextFormatter = () => {
  const { originalText, formattedText, onOriginalTextChange } =
    useTextFormatter();

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <TextareaInput
        label="Original text"
        name="originalText"
        placeholder={["brokkoli", "tomato", "avocado"].join("\n")}
        value={originalText}
        onChange={onOriginalTextChange}
        isErase
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
