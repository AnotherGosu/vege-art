import { EraseIcon } from "@/components/icons/EraseIcon";

interface EraseButtonProps {
  onErase: () => void;
}

export const EraseButton = ({ onErase }: EraseButtonProps) => {
  return (
    <button
      className="btn-icon"
      onClick={onErase}
    >
      <EraseIcon />
    </button>
  );
};
