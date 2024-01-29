"use client";

import { Button } from "../button";
import { ShowMoreProps } from "./types";
import { updateSearch } from "@/utils";
import { useRouter } from "next/router";

export const ShowMore = (props: ShowMoreProps) => {
  const { isNext, pageNumber } = props;
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearch({
      type: "limit",
      value: `${newLimit}`,
    });

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          type="button"
          title="Show More"
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};
