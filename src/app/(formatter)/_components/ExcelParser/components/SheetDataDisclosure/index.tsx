import { Disclosure, Tab } from "@headlessui/react";

import { SheetData } from "@/types/common";

interface SheetDataDisclosureProps {
  data: SheetData[];
}

export const SheetDataDisclosure = ({ data }: SheetDataDisclosureProps) => {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-4 gap-4">
        {data.map((sheet, idx) => (
          <Tab
            key={idx}
            className="w-full rounded-md bg-slate-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            {sheet.sheetName}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels>
        {data.map((sheet, idx) => (
          <Tab.Panel key={idx}>
            {sheet.sections.map((section, idx) => (
              <Disclosure key={idx}>
                <Disclosure.Button className="my-4 block w-full rounded-md border border-slate-200 p-2 text-left focus:outline-none focus:ring-2 focus:ring-sky-200">
                  {section.sectionName}
                </Disclosure.Button>

                <Disclosure.Panel>
                  <div className="ml-4 flex flex-col gap-4">
                    {section.columns.map((column, idx) => (
                      <div
                        key={idx}
                        className="rounded-md bg-slate-100 p-4 text-sm"
                      >
                        <h4 className="mb-4 font-semibold">{column.name}</h4>

                        <p>{column.value}</p>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
