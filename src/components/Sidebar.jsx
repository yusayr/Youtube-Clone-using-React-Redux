import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdWatchLater,
} from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { useSidebar } from "../context/SidebarContext";

function Sidebar() {
  const { isOpen } = useSidebar(); // <<< read state from context

  const mainLinks = [
    { icon: <MdHomeFilled />, name: "Home" },
    { icon: <MdOutlineSlowMotionVideo />, name: "Shorts" },
    { icon: <MdSubscriptions />, name: "Subscriptions" },
  ];

  const otherLinks = [
    { icon: <MdOutlineVideoLibrary />, name: "Library" },
    { icon: <MdHistory />, name: "History" },
    { icon: <MdWatchLater />, name: "Watch Later" },
    { icon: <LuThumbsUp />, name: "Liked Videos" },
  ];

  return (
    <div
      className={`bg-[#212121] text-white h-screen transition-all duration-300 overflow-y-auto
      ${isOpen ? "w-56 p-2 pr-5" : "w-0 p-0"}`}
    >
      {isOpen && (
        <>
          <ul className="flex flex-col border-b border-gray-800">
            {mainLinks.map((item, index) => (
              <li
                key={index}
                className={`pl-6 py-3 hover:bg-zinc-600 ${
                  item.name === "Home" ? "bg-zinc-600" : ""
                } rounded-xl`}
              >
                <a href="#" className="flex items-center gap-5 text-xl">
                  {item.icon}
                  <span className="text-sm tracking-wider">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col mt-4 border-b border-gray-800">
            {otherLinks.map((item, index) => (
              <li key={index} className="pl-6 py-3 hover:bg-zinc-600 rounded-xl">
                <a href="#" className="flex items-center gap-5 text-xl">
                  {item.icon}
                  <span className="text-sm tracking-wider">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sidebar;
