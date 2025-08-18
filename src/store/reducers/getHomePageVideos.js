import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext, {getState}) => {
        const {youtubeApp: {nextPageToken: nextPageTokenFromState, videos},
    } = getState();
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="react + course"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`);

    const items = response.data.items;
    console.log(items)

    const parsedData = await parseData(items); //To clean the data
    
    return { parsedData: [...videos, ...parsedData], nextPageToken: nextPageTokenFromState }

    }
)