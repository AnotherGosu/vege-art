import { CopyIcon } from "@/components/icons/CopyIcon";

interface CopyButtonProps {
  value: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <button
      className="absolute right-0 top-0 rounded-md p-1 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 active:border-slate-200"
      onClick={onCopy}
    >
      <CopyIcon />
    </button>
  );
};
