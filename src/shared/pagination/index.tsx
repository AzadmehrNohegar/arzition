import { AltArrowLeft20 } from "@/assets/icons/AltArrowLeft20";
import { AltArrowRight20 } from "@/assets/icons/AltArrowRight20";
import { DoubleAltArrowLeft20 } from "@/assets/icons/DoubleAltArrowLeft20";
import { DoubleAltArrowRight20 } from "@/assets/icons/DoubleAltArrowRight20";
import { Select } from "@/components/select";
import clsx from "clsx";

interface IPaginationProps {
  page: number;
  perPage: number;
  count: number;
  setPage: (val: number) => void;
  setPerPage: (val: number) => void;
  next: string | null;
  prev: string | null;
  isFixed?: boolean;
  containerClassName?: string;
}

function Pagination({
  count,
  next,
  page,
  perPage,
  prev,
  setPage,
  setPerPage,
  isFixed = true,
}: IPaginationProps) {
  return (
    <div
      className={clsx(
        "flex items-center py-4 bg-white",
        isFixed && "w-container fixed bottom-0",
        !isFixed && "absolute bottom-0 w-full"
      )}
    >
      <div className="flex text-sm items-center gap-x-2 bg-grey-50 p-2 rounded-xl">
        <button className="btn btn-sm btn-square btn-ghost">
          <DoubleAltArrowRight20 />
        </button>
        <button
          className="btn btn-sm btn-square btn-ghost"
          disabled={!prev}
          onClick={() => setPage(page - 1)}
        >
          <AltArrowRight20 />
        </button>
        {count &&
          new Array(Math.ceil(count / perPage)).fill(null).map((_, index) => (
            <button
              key={index}
              className={clsx(
                "btn btn-sm btn-square rounded-xl",
                !(page === index + 1) && "btn-ghost",
                page === index + 1 && "btn-primary"
              )}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        <button
          className="btn btn-sm btn-square btn-ghost"
          disabled={!next}
          onClick={() => setPage(page + 1)}
        >
          <AltArrowLeft20 />
        </button>
        <button className="btn btn-sm btn-square btn-ghost">
          <DoubleAltArrowLeft20 />
        </button>
      </div>
      <div className="ms-auto flex items-center gap-x-4">
        <span className="text-grey-500 text-sm">
          نمایش {(page + 1) * perPage} تا {perPage} مورد از {count} نتیجه
        </span>
        <Select
          options={[10, 20, 100]}
          selected={perPage}
          setSelected={setPerPage}
          isBottom
        />
      </div>
    </div>
  );
}

export { Pagination };
