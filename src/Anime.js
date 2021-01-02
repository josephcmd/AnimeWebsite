import React from 'react'
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";





function Anime() {
    const {id} = useParams();
    const { isLoading, data } = useQuery(["anime", id], () =>
    fetch(`https://api.jikan.moe/v3/anime/${id}`).then((res) => res.json())
  );
    if(isLoading){
        return(<div className="pt-11 text-center h-screen w-screen"><ClipLoader className=""/></div>)
    }
    console.log(data)
    return (
        <>
        <div class="flex flex-wrap  overflow-hidden w-screen h-screen">

<div class=" text-center bg-blue-50 lg:w-1/4  w-1/3 overflow-hidden">
  <img className="w-screen rounded-sm shadow-lg mx-auto p-0" src={data.image_url}/>
  <h2 className="font-sans font-bold">Title: <span className="font-sans font-normal">{data.title}</span></h2>
  <hr></hr>
  <h2 className="font-sans font-bold">Rating: <span className="font-sans font-normal">{data.score}</span></h2>
  <hr></hr>
  <h2 className="font-sans font-bold">Still Airing: <span className="font-sans font-normal">{data.airing ? "yes":"no"}</span></h2>
  
</div>

<div class="text-center shadow-xl bg-black text-gray-200 px-3 lg:w-3/4 w-2/3 overflow-hidden">
{data.trailer_url&&<div id="responsiveVideoWrapper" className="mt-1 relative h-1/3 pb-fluid-video">
  
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src={data.trailer_url}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>}
  <h1 className=" font-bold font-sans">Synopsis</h1><p className="mt-3">{data.synopsis}</p>
</div>

</div>
            

            </>
    )
}

export default Anime
