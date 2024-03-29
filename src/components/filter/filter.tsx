"use client";

import { FilterProps, OptionProps, UpdateParams } from "./types";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Filter = (props: FilterProps) => {
  const { options, title } = props;

  const [selected, setSelected] = useState(options[0]);

  const handleListbox = (e: OptionProps) => {
    setSelected(e);
  };

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={handleListbox}>
        <div className="relative w-fit z-10">
          <Listbox.Button
            className={twMerge(
              "relative w-full min-w-[127px] flex justify-between items-center",
              "cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border"
            )}
          >
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={twMerge(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white",
                "py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              )}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    twMerge(
                      "relative cursor-default select-none py-2 px-4",
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    )
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={twMerge(
                          "block truncate",
                          selected ? "font-medium" : "font-normal"
                        )}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
