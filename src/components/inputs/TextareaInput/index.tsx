import { CopyButton } from "./components/CopyButton";

interface TextareaInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  isCopy?: boolean;
}

export const TextareaInput = ({
  name,
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  isDisabled = false,
  isCopy = false,
}: TextareaInputProps) => {
  return (
    <div className="relative w-full">
      <label
        className="label"
        htmlFor={name}
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
        className="input min-h-[350px] resize-none p-2"
      />

      {isCopy && <CopyButton value={value} />}
    </div>
  );
};
