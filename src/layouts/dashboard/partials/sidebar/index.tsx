import { Logout24 } from "@/assets/icons/Logout24";
import { NAV_LINKS } from "@/constants/sideBarItems";
import clsx from "clsx";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

function Sidebar() {
  const { pathname } = useLocation();
  const isCurrentEndpoint = (to: string) =>
    pathname.split("/").includes(to.slice(1));

  const matches = useMediaQuery("(max-width: 768px)");

  if (matches) return;

  return (
    <aside className="sticky top-0 ps-5 h-full z-20">
      <div className="flex flex-col p-5 h-full bg-grey-50 rounded-xl gap-x-2">
        <ul className="flex flex-col gap-y-4">
          {NAV_LINKS.map(({ hasSubmenu, icon, label, submenu, to }) => {
            if (hasSubmenu)
              return (
                <li key={to}>
                  <div className="dropdown dropdown-bottom dropdown-left">
                    <NavLink
                      end
                      to={to}
                      className={clsx(
                        "tooltip tooltip-left",
                        isCurrentEndpoint(to) && "tooltip-primary",
                        !isCurrentEndpoint(to) && "tooltip-accent"
                      )}
                      data-tip={label}
                      onClick={(e) => e.preventDefault()}
                    >
                      <label
                        tabIndex={0}
                        className={clsx(
                          "btn btn-square",
                          isCurrentEndpoint(to) && "btn-primary",
                          !isCurrentEndpoint(to) && " btn-ghost"
                        )}
                      >
                        {icon(isCurrentEndpoint(to))}
                      </label>
                    </NavLink>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-10 shadow-none menu p-2 bg-grey-50 rounded-box w-52 overflow-hidden"
                    >
                      {submenu?.map(({ label, to: subMenuTo }) => (
                        <li
                          key={subMenuTo}
                          className="relative before:absolute before:w-5 before:h-full before:border-r before:border-r-grey-300 last-of-type:before:border-r-0"
                        >
                          <NavLink
                            end
                            to={subMenuTo}
                            className="py-4 bg-transparent rounded-none relative before:absolute before:w-5 before:h-full before:top-0 before:border-r before:border-r-grey-300 before:rounded-br-xl"
                          >
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            return (
              <li key={to}>
                <div
                  className={clsx(
                    "tooltip tooltip-left",
                    isCurrentEndpoint(to) && "tooltip-primary",
                    !isCurrentEndpoint(to) && "tooltip-accent"
                  )}
                  data-tip={label}
                >
                  <NavLink
                    to={to}
                    end
                    className={({ isActive: isSubmenuActive }) =>
                      clsx(
                        "btn btn-square",
                        isSubmenuActive && "btn-primary",
                        !isSubmenuActive && "btn-ghost"
                      )
                    }
                  >
                    {({ isActive }) => icon(isActive)}
                  </NavLink>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          className="tooltip tooltip-left mt-auto tooltip-error"
          data-tip="خروج از حساب کاربری"
        >
          <button className="btn btn-ghost text-danger btn-square">
            <Logout24 />
          </button>
        </div>
        <div className="w-full h-[2px] bg-grey-200 my-2"></div>
        <div
          className="tooltip tooltip-left tooltip-primary"
          data-tip="مشاهده حساب کاربری"
        >
          <Link
            to="/account"
            className="btn btn-ghost btn-circle relative before:absolute before:w-2 before:h-2 before:bg-success before:rounded-full before:bottom-1 before:start-1"
          >
            <img
              src="https://picsum.photos/40/40"
              className="rounded-full"
              alt="user profile"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export { Sidebar };
