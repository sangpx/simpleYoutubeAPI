import "./YoutubeSearch.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YoutubeSearch = () => {
  //state video
  const [video, setVideo] = useState([]);
  //set query
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  //call API - onClick Button Search
  const handleSearchYt = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCUXDfE40L7OY9OqYsKOfQP6ivLWGjc4sg",
        type: video,

        q: query,
      },
    });

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.createdAt = item.snippet.publishAt;
          obj.author = item.snippet.channelTitle;
          obj.description = item.snippet.description;

          result.push(obj);
        });
      }

      console.log("check: ", result);
      setVideo(result);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="input-search"
          placeholder="Search"
          type="text"
        />
        <button type="button" onClick={handleSearchYt}>
          Search
        </button>
      </div>

      {video &&
        video.length > 0 &&
        video.map((item) => {
          return (
            <div className="ytb-result" key={item.id}>
              <div className="left">
                <iframe
                  allowFullScreen
                  frameBorder="0"
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="Giới thiệu dự án Tiktok Clone | Thực hành khóa ReactJS tại F8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <div className="right">
                <div className="title">{item.title}</div>
                <div className="create-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;
