import { useEffect, useState } from "react";
import { API_KEY, imgUrl } from "../../constants/constant";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const fetchData= async () =>{
          const request = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`); 
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
          return request;
        }
        fetchData();
    }, []);

    return (
        <div style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }} className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description"> {movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
