import { TrashIcon } from "@/components/icons/TrashIcon";

interface RemoveButtonProps {
  onRemove: () => void;
}

export const RemoveButton = ({ onRemove }: RemoveButtonProps) => {
  return (
    <button
      className="btn-icon text-red-700"
      onClick={onRemove}
    >
      <TrashIcon />
    </button>
  );
};
