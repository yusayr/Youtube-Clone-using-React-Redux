import { Link } from "react-router-dom";

function SearchCard({ data }) {
  return (
    <div className="flex w-full border-b border-gray-700">
      {/* Thumbnail */}
      <div className="relative w-80 flex-shrink-0">
        <span className="absolute bottom-2 right-2 text-xs bg-gray-900 text-white px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
         <Link to= {`/watch/${data.videoId}`}>
        <img
          src={data.videoThumbnail}
          alt="Thumbnail"
          className="w-full"
        />
        </Link>
      </div>

      {/* Video Info */}
      <div className="flex flex-col gap-2 flex-1 p-3">
        <h3 className="text-lg font-semibold line-clamp-2">
          <Link
            to={`/watch/${data.videoId}`}
            className="hover:underline"
          >
            {data.videoTitle}
          </Link>
        </h3>

        <div className="text-xs text-gray-400">
          <span className="after:content-['·'] after:mx-1">
            {data.videoViews} views
          </span>
          <span>{data.videoAge}</span>
        </div>

        <div className="flex items-center gap-2 my-1">
          <img
            src={data.channelInfo?.image}
            alt={data.channelInfo?.name}
            className="h-9 w-9 rounded-full"
          />
          <span className="text-sm text-gray-300">{data.channelInfo?.name}</span>
        </div>

        <div className="text-sm text-gray-400 line-clamp-2">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
