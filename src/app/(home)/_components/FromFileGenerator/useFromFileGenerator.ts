import { useState } from "react";
import readXlsxFile, { readSheetNames } from "read-excel-file";

import { SheetData } from "@/types/common";

export const useFromFileGenerator = () => {
  const [data, setData] = useState<SheetData[]>([]);

  const onFileChange = async (value: File | null) => {
    try {
      if (value) {
        const sheetNames = await readSheetNames(value);

        const generatedData = await Promise.all(
          sheetNames.map(async (sheetName) => {
            const rows = await readXlsxFile(value, { sheet: sheetName });

            const columns = rows.map((row, idx) => rows.map((row) => row[idx]));

            const sectionNames = rows[0].filter((word) => word);

            const sections = sectionNames.map((name, idx) => {
              const sectionName = name.toString() || "";
              const sectionColumns = columns.slice(idx * 6, idx * 6 + 6);

              const formatedSectionColumns = sectionColumns.map((column) => {
                const filteredColumn = column.filter((word) => word);
                const name = filteredColumn.shift()?.toString() || "";
                const value = filteredColumn.join(", ");

                return { name, value };
              });

              const combinedColumn = {
                name: `${formatedSectionColumns[1].name} + ${formatedSectionColumns[2].name}`,
                value: `${formatedSectionColumns[1].value}, ${formatedSectionColumns[2].value}`,
              };

              const restColumns = formatedSectionColumns.slice(3, 6);

              const structuredSectionColumns = [combinedColumn, ...restColumns];

              return { sectionName, columns: structuredSectionColumns };
            });

            return { sheetName, sections };
          }),
        );

        setData(generatedData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { data, onFileChange };
};
