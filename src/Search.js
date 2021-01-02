import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import {Link} from "react-router-dom";
import {useDebounce} from "./useDebounce"
import ClipLoader from "react-spinners/ClipLoader";
 function Searchh({ keyy }) {
  const debounced = useDebounce(keyy);
  const { isLoading, error, data } = useQuery(['repoData', debounced], () => debounced.length > 3 && fetch(`https://api.jikan.moe/v3/search/anime?q=${debounced}`).then(res => res.json()
  )
  );

  if (isLoading)
    return <div className="text-center h-screen w-screen"><ClipLoader className=""/></div>;

  if (error)
    return 'An error has occurred: ' + error.message;
   console.log(data)
  return (
    <div className=" w-screen flex flex-wrap content-center    ">
      {data?.results?.map(item => <div className="shadow-xl mx-auto text-center  rounded-lg m-2 w-60 border " key={item.mal_id}><Link to={"/anime/" + item.mal_id}><img className="p-3 text-center mx-auto max-w-full" src={item.image_url} /></Link><span class="font-bold text-sm  text-gray-900 movie--title">{item.title}</span></div>)}
    </div>
  );
}
export function Search(){
  const [data, setData] = useState("naruto")
  const [toggled, setToggled] = useState(false)  
  return(
      <>
      
      <div class="container flex flex-col  justify-center items-center mx-auto  py-1">
     
        <div style={{backgroundImage: `url("https://sotoak.com/wallpapers/landscape-tumblr-images-As-Wallpaper-HD.jpg")`}}
            class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
        </div>
      
     
        <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div class="text-center">
                        <h1 class=" text-3xl text-grey-800 font-medium leading-loose my-3 w-full">Search for
                            Anime</h1>
                        <div class="w-full text-center">
                            <form action="#">
                                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                    <input onChange={(e)=>setData(e.target.value)} placeholder="Search for anything"
                                        class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"/>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>

   <Searchh keyy={data}/>


    </>


    )
}