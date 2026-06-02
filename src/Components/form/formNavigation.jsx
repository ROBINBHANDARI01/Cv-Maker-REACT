import { NavLink } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import {
  User,
  GraduationCap,
  Award,
  FileText,
  Printer,
  BriefcaseBusiness,
  FolderGit2,
  MoreHorizontal,
} from "lucide-react";

import "./nav.css";

function Navbar() {
  const [showMore, setShowMore] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowMore(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navClass =
  "p-2 flex-1 md:flex-none justify-center sm:justify-start min-w-0 flex flex-row items-center gap-3 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors border-l-2 border-transparent"
  const activeClass =
    "bg-blue-100 text-blue-900 font-medium border-l-2   group border-blue-500 ";

  const mainLinks = [
    {
      to: "/dashboard/general",
      label: "Personal ",
      desc: "Add your details",
      icon: <User strokeWidth={2.3} size={21} />,
    },
    {
      to: "/dashboard/about",
      label: "Summary",
      desc: "Write your summary",
      icon: <FileText strokeWidth={2.3} size={21} />,
    },
    {
      to: "/dashboard/experience",
      label: "Experience",
      desc: "Add your work history",
      icon: <BriefcaseBusiness strokeWidth={2.3} size={21} />,
    },
    {
      to: "/dashboard/skills",
      label: "Skills",
      desc: "Add your skills",
      icon: <Award strokeWidth={2.3} size={21} />,
    },
  ];

  const moreLinks = [
    {
      to: "/dashboard/projects",
      label: "Projects",
      desc: "Add your projects",
      icon: <FolderGit2 strokeWidth={2.3} size={21} />,
    },
    {
      to: "/dashboard/education",
      label: "Education",
      desc: "Add Your education",
      icon: <GraduationCap strokeWidth={2.3} size={21} />,
    },
  ];

  return (
    <div className="flex md:flex-col  py-1 w-full md:p-4 gap-1">
      {mainLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `${navClass} ${isActive ? activeClass : ""}`
          }
        >
          <div className="flex items-center flex-col md:flex-row   md:gap-4 ">
            <span className="text-blue-600 shrink-0 bg-blue-100/50 group-[.group]:border-l-blue-300  group-[.group]:bg-blue-50 p-2 rounded-lg ">
              {link.icon}
            </span>
            <span>
              <span className="text-xs sm:text-sm font-semibold truncate text-gray-800 group-[.group]:text-blue-600 ">
                {link.label}
              </span>
              <span className="text-sm text-gray-500 hidden md:block">
                {link.desc}
              </span>
            </span>
          </div>
        </NavLink>
      ))}

      {/* More button — visible on mobile only */}
      <div className="flex flex-1  min-w-0 relative sm:hidden " ref={dropdownRef}>
        
            <button
    onClick={() => setShowMore(prev => !prev)}
    className={`w-full p-2 flex flex-col items-center gap-1 rounded-lg text-red-600 hover:bg-blue-50 transition-colors border-l-2 border-transparent z-10 ${showMore ? activeClass : ""}`}
  >
    <div className="flex items-center flex-col md:flex-row md:gap-4">
      <span className="text-blue-500 shrink-0 bg-blue-50 p-2 rounded-lg">
        <MoreHorizontal size={21} />
      </span>
      <span>
        <span className="font-semibold text-xs sm:text-sm text-gray-800 group-[.group]:text-blue-600 ">More</span>
      </span>
    </div>
  </button>

          
       

        {showMore && (
          <div className="absolute top-full right-2 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg  z-50 min-w-25  p-1 flex flex-col gap-1">
            {moreLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setShowMore(false)}
                className={({ isActive }) =>
                  `p-2 items-center gap-2 rounded-lg text-sm text-blue-600 hover:bg-blue-100 transition-colors ${isActive ? activeClass : ""}`
                }
              >
                <div className="flex items-center gap-3 md:flex-row  md:gap-4 ">
            <span className="text-blue-600 shrink-0 bg-blue-100/50 group-[.group]:bg-blue-50  p-2 rounded-lg ">
              {link.icon}
            </span>
            <span >
              <span className="text-sm sm:text-sm font-semibold  truncate text-gray-800 group-[.group]:text-blue-600 ">
                {link.label}
              </span>
              <span className="text-sm text-gray-500 hidden md:block">
                {link.desc}
              </span>
            </span>
          </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* On desktop show Projects & Education directly in sidebar */}
      <div className="hidden  sm:flex md:flex-col gap-1">
        {moreLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${navClass} ${isActive ? activeClass : ""}`
            }
          >
            <div className="flex items-center flex-col md:flex-row md:gap-4">
        <span className="text-blue-600 shrink-0 bg-blue-100/50 group-[.group]:bg-blue-50 p-2 rounded-lg">
          {link.icon}
        </span>
        <span>
          <span className="text-sm font-semibold text-gray-800 group-[.group]:text-blue-600">
            {link.label}
          </span>
          <span className="text-sm text-gray-500 hidden md:block">
            {link.desc}
          </span>
        </span>
      </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
