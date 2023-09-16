import Image from "next/image";

import rose from "@/images/rose.png";

export const Heading = () => {
  return (
    <div className="flex items-end gap-1">
      <h1 className="text-2xl font-medium">Vege Art</h1>

      <Image
        src={rose}
        alt="Rose"
        className="h-9 w-9"
      />
    </div>
  );
};
