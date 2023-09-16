import { CopyButton } from "./components/CopyButton";
import { EraseButton } from "./components/EraseButton";

interface TextareaInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  isCopy?: boolean;
  isErase?: boolean;
}

export const TextareaInput = ({
  name,
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  isDisabled = false,
  isCopy = false,
  isErase = false,
}: TextareaInputProps) => {
  return (
    <div className="relative w-full">
      <div className="mb-1 flex justify-between">
        <label
          className="label"
          htmlFor={name}
        >
          {label}
        </label>

        <div className="flex gap-2">
          {isErase && <EraseButton onErase={() => onChange("")} />}
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
        className="input h-[200px] resize-none p-2 sm:h-[350px]"
      />
    </div>
  );
};
