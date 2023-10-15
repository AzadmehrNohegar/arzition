import { AltArrowDown20 } from "@/assets/icons/AltArrowDown20";
import { NAV_LINKS } from "@/constants/sideBarItems";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useCallback, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

interface IMobileSlideoverProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

function MobileSlideover({ isOpen, setIsOpen }: IMobileSlideoverProps) {
  const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width: 768px)");

  const changeOpenState = useCallback(
    (openState: boolean) => setIsOpen(openState),
    [setIsOpen]
  );

  useEffect(() => {
    if (pathname) changeOpenState(false);
  }, [pathname, changeOpenState]);

  const isCurrentEndpoint = (to: string) =>
    pathname.split("/").includes(to.slice(1));

  if (!matches) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <div className="fixed z-30 inset-0 overflow-hidden">
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="flex h-full flex-col overflow-y-auto bg-grey-50 pt-6 shadow-xl">
            <ul className="my-10 flex flex-col gap-y-4 w-full px-4 pt-16">
              {NAV_LINKS.map((item, index) => {
                const { hasSubmenu, icon, label, submenu, to } = item;
                if (hasSubmenu)
                  return (
                    <li key={index}>
                      <button
                        key={index}
                        className="group flex flex-wrap outline-none overflow-y-hidden max-h-[44px] focus-within:max-h-[350px] bg-grey-50 text-grey-600 w-full rounded-xl"
                        onClick={(e) => e.currentTarget.focus()}
                      >
                        <div
                          className={clsx(
                            "flex items-center gap-x-2 px-4 py-2.5 rounded-xl w-full transition-colors group-focus-within:text-white group-focus-within:bg-primary",
                            !isCurrentEndpoint(to) &&
                              "text-grey-600 hover:bg-primary-50",
                            isCurrentEndpoint(to) && "bg-primary text-white"
                          )}
                        >
                          {icon(isCurrentEndpoint(to))}
                          <span className="text-sm">{label}</span>
                          <div className="ms-auto group-focus-within:rotate-180">
                            <AltArrowDown20 />
                          </div>
                        </div>

                        <div className="basis-full flex flex-col items-start justify-start py-4">
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-10 shadow-none menu p-2 bg-grey-50 rounded-box w-52 overflow-hidden"
                          >
                            {submenu?.map(({ label, to: subMenuTo }) => (
                              <li
                                key={subMenuTo}
                                className="relative before:absolute before:w-5 before:h-full before:border-r before:border-r-primary-300 last-of-type:before:border-r-0"
                              >
                                <NavLink
                                  end
                                  to={subMenuTo}
                                  className="py-2.5 bg-transparent rounded-none relative before:absolute before:w-5 before:h-full before:top-0 before:border-r before:border-r-primary-300 before:rounded-br-xl"
                                >
                                  {label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </button>
                    </li>
                  );
                return (
                  <li key={index}>
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          "flex items-center gap-x-2 px-4 py-2.5 rounded-xl transition-colors",
                          !isActive && "text-grey-600 hover:bg-primary-50",
                          isActive && "bg-primary text-white"
                        )
                      }
                    >
                      {({ isActive }) => (
                        <Fragment>
                          {icon(isActive)}
                          <span className="text-sm">{label}</span>
                        </Fragment>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Transition.Child>
      </div>
    </Transition.Root>
  );
}

export { MobileSlideover };
