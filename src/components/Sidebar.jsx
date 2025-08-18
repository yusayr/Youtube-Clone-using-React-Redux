import React from 'react'
import { MdHomeFilled, MdOutlineSlowMotionVideo, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdWatchLater } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";

function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled />,
            name: 'Home'
        },
        {
            icon: <MdOutlineSlowMotionVideo />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions />,
            name: 'Subscriptions'
        }
    ]

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary />,
            name: 'Library'
        },
        {
            icon: <MdHistory />,
            name: 'History'
        },
        {
            icon: <MdWatchLater />,
            name: 'Watch Later'
        },
        {
            icon: <LuThumbsUp />,
            name: "Liked Video"
        }
    ]

  return (
    <div className='w-2/12 bg-[#212121] pr-5 p-2 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-1 border-gray-800'>
            {mainLinks.map(
                (item, index) => 
                <li key={index} className={`pl-6 py-3 hover:bg-zinc-600 ${item.name === "Home" ? "bg-zinc-600": " "} rounded-xl`}>
                    <a href="#" className='flex items-center gap-5 text-xl'>
                    {item.icon}
                    <span className='text-sm tracking-wider'>{item.name}</span>
                    </a>
                </li>
            ) }
        </ul>

        <ul className='flex flex-col border-b-1 border-gray-800'>
            {otherLinks.map(
                (item, index) => 
                <li key={index} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
                    <a href="#" className='flex items-center gap-5 text-xl'>
                    {item.icon}
                    <span className='text-sm tracking-wider'>{item.name}</span>
                    </a>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Sidebar
