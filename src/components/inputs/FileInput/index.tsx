import { useFileInput } from "./useFileInput";

interface FileInputProps {
  label?: string;
  name: string;
  onChange: (value: File | null) => void;
}

export const FileInput = ({ label = "", name, onChange }: FileInputProps) => {
  const {
    fileInputRef,
    onFileChange,
    isDrag,
    onDropAreaClick,
    onDropAreaDrag,
    onDropAreaDrop,
  } = useFileInput({ onChange });

  return (
    <div className="w-full">
      <label
        className="label"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        type="file"
        id={name}
        name={name}
        onChange={onFileChange}
        ref={fileInputRef}
        accept=".xlsx, .xls, .csv"
        className="hidden"
      />

      <div
        onClick={onDropAreaClick}
        onDragEnter={onDropAreaDrag}
        onDragLeave={onDropAreaDrag}
        onDragOver={onDropAreaDrag}
        onDrop={onDropAreaDrop}
        className={isDrag ? classNames.drag : classNames.base}
      >
        <p>
          Click or drag-and-drop <i>.xlsx</i> file
        </p>
      </div>
    </div>
  );
};

const classNames = {
  base: "input flex cursor-pointer items-center justify-center border-dashed px-4 py-8",
  drag: "input flex cursor-pointer items-center justify-center border-dashed px-4 py-8 border-slate-400 bg-slate-100",
};
