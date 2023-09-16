import { useState } from "react";

export const useTextFormatter = () => {
  const [originalText, setOriginalText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const onOriginalTextChange = (value: string) => {
    const generatedWords = value.split("\n");
    const trimedWords = generatedWords.map((word) =>
      word.replace(/\s\s+/g, " "),
    );
    const joinedWords = trimedWords.join(", ");

    setOriginalText(value);
    setFormattedText(joinedWords);
  };

  return {
    originalText,
    formattedText,
    onOriginalTextChange,
  };
};
