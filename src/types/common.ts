export interface SheetData {
  sheetName: string;
  sections: Array<{
    sectionName: string;
    columns: Array<{ name: string; value: string }>;
  }>;
}
