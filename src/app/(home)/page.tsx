import { FromFileGenerator } from "./_components/FromFileGenerator";
import { FromTextGenerator } from "./_components/FromTextGenerator";

export default function Page() {
  return (
    <>
      <FromTextGenerator />

      <div className="my-8 h-[1px] w-full bg-slate-200" />

      <FromFileGenerator />
    </>
  );
}
