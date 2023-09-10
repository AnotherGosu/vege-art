import { useState } from "react";

export const useFromTextGenerator = () => {
  const [originalText, setOriginalText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const onOriginalTextChange = (value: string) => {
    const generatedWords = value.split("\n");
    const trimedWords = generatedWords.map((word) =>
      word.replace(/\s\s+/g, " "),
    );
    const joinedWords = trimedWords.join(", ");

    setOriginalText(value);
    setGeneratedText(joinedWords);
  };

  return { originalText, generatedText, onOriginalTextChange };
};
