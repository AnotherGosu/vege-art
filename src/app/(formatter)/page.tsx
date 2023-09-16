import { ExcelParser } from "./_components/ExcelParser";
import { TextFormatter } from "./_components/TextFormatter";

export default function Page() {
  return (
    <>
      <TextFormatter />

      <div className="my-8 h-[1px] w-full bg-slate-200" />

      <ExcelParser />
    </>
  );
}
