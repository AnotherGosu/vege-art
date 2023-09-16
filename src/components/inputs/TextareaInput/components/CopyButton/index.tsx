import { CopyIcon } from "@/components/icons/CopyIcon";

import { Toast } from "./components/Toast";

import { useCopyButton } from "./useCopyButton";

interface CopyButtonProps {
  value: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const { isToast, onCopy } = useCopyButton({ value });

  return (
    <button
      className="icon-button relative"
      onClick={onCopy}
    >
      <CopyIcon />
      {isToast && <Toast />}
    </button>
  );
};
