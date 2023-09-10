"use client";

import { FileInput } from "@/components/inputs/FileInput";

import { SheetDataDisclosure } from "./components/SheetDataDisclosure";

import { useFromFileGenerator } from "./useFromFileGenerator";

export const FromFileGenerator = () => {
  const { data, onFileChange } = useFromFileGenerator();

  return (
    <div className="flex flex-col gap-4">
      <FileInput
        label="Generate from file"
        name="file"
        onChange={onFileChange}
      />

      <SheetDataDisclosure data={data} />
    </div>
  );
};
