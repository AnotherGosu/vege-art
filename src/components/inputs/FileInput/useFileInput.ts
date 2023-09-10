import { useRef, useState, ChangeEvent, DragEvent } from "react";

interface UseFileInputArgs {
  onChange: (value: File | null) => void;
}

export const useFileInput = ({ onChange }: UseFileInputArgs) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDrag, setIsDrag] = useState(false);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0] || null;

    onChange(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onDropAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onDropAreaDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { type } = e;

    if (type === "dragenter" || type === "dragover") {
      setIsDrag(true);
    } else if (type === "dragleave") {
      setIsDrag(false);
    }
  };

  const onDropAreaDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0] || null;

    onChange(file);
  };

  return {
    fileInputRef,
    onFileChange,
    isDrag,
    onDropAreaClick,
    onDropAreaDrag,
    onDropAreaDrop,
  };
};
