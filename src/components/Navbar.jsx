import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { clearVideos, changeSearchTerm } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (!searchTerm.trim()) return; // avoid empty search

    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos({ isNext: false, searchTerm }));
    }
  };

  return (
    <div className="flex px-8 h-14 justify-between items-center bg-[#212121] opacity-95 sticky">
      {/* Left Section */}
      <div className="flex gap-8 items-center text-2xl">
        <GiHamburgerMenu />
        <Link
          to="/"
          className="flex gap-1 items-center cursor-pointer"
        >
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-2xl">YouTube</span>
        </Link>
      </div>

      {/* Search Section */}
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                className="bg-zinc-900 w-96 text-white focus:outline-none border-none"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button
              type="submit"
              className="flex items-center h-10 w-16 justify-center bg-zinc-800 rounded-r-3xl"
            >
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://media.designrush.com/inspiration_images/797816/conversions/1_2702976873ac-desktop.jpg"
          alt="profile logo"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
