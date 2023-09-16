import { CopyButton } from "./components/CopyButton";
import { EraseButton } from "./components/EraseButton";

interface TextareaInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onErase?: () => void;
  isDisabled?: boolean;
  isCopy?: boolean;
}

export const TextareaInput = ({
  name,
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  onErase,
  isDisabled = false,
  isCopy = false,
}: TextareaInputProps) => {
  return (
    <div className="relative w-full">
      <div className="flex justify-between">
        <label
          className="label"
          htmlFor={name}
        >
          {label}
        </label>

        <div className="flex gap-2">
          {onErase && <EraseButton onErase={onErase} />}
          {isCopy && <CopyButton value={value} />}
        </div>
      </div>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
        className="input min-h-[350px] resize-none p-2"
      />
    </div>
  );
};
