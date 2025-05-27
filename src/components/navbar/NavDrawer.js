import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";

function NavDrawer({ isNavOpen }) {
  const activeLink =
    "flex justify-center items-center px-6 py-2 m-1 mr-2 bg-[#FEA803] text-white rounded-full transition-all  ";
  const normalLink =
    "flex justify-center items-center px-6 py-2 m-1 mr-2 text-black bg-transparent hover:transition-all ease-in-out delay-100 duration-500 hover:bg-[#E8e6e6] hover:text-black rounded-full dark:text-white dark:md:hover:bg-[#0d1f31]";

  return (
    <div className="fixed right-0">
      {isNavOpen && (
        <div className="bg-white h-[100vh] w-[100vw]" data-aos="fade-left">
          <ul className="flex flex-col p-3 ">
            {MenuItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavDrawer;
