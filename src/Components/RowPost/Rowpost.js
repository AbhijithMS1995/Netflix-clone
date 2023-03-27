import React ,{useEffect,useState,} from 'react'
import { imgUrl ,API_KEY} from '../../constants/constant'
import "./Rowpost.css"
import axios from '../../axios'
import YouTube from 'react-youtube'

function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const [urlId, seturlId] = useState()
    useEffect(() => {
      axios.get(props.url).then((response)=>{
         setmovies(response.data.results)
      }).catch((err) =>{console.log(err);})
    
    }, [props.url])

    const opts = {
      height: '360',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
   
    
    const handleMovieTrailer = (id) =>{ 

      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) =>{
        if (response.data.results.length!==0) {
          seturlId(response.data.results[0])
        }
      })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((movie) => 
                <img   onClick={()=>handleMovieTrailer(movie.id)}
                     className={props.isSmall ? 'smallPoster':'poster'} 
                     alt="POSTER" 
                     src={`${imgUrl+movie.backdrop_path}`}/>)}
        </div>
     { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default Rowpost