import { EraseIcon } from "@/components/icons/EraseIcon";

interface EraseButtonProps {
  onErase: () => void;
}

export const EraseButton = ({ onErase }: EraseButtonProps) => {
  return (
    <button
      className="icon-button"
      onClick={onErase}
    >
      <EraseIcon />
    </button>
  );
};
