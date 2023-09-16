"use client";

import { FileInput } from "@/components/inputs/FileInput";

import { SheetDataDisclosure } from "./components/SheetDataDisclosure";

import { useExcelParser } from "./useExcelParser";

export const ExcelParser = () => {
  const { data, onFileChange } = useExcelParser();

  return (
    <div className="flex flex-col gap-4">
      <FileInput
        label="Parse file"
        name="file"
        onChange={onFileChange}
      />

      <SheetDataDisclosure data={data} />
    </div>
  );
};
