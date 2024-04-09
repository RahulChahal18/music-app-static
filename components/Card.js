import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


const Card = ({data,handleClick,index,playing,updatePlaying,songPlayData,songPauseData}) => {
    let {image,name,artist,added,aud,isPlaying} = data;
    // let mus1 = new Audio('./sounds/Challenge.mp3');

//w-60
  return (
    <>
    <div className='w-85 bg-zinc-100 p-4 rounded-md flex gap-4 pb-6 relative mt-6 mb-6 shadow-2xl hover:shadow-lg'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div>
            <h3 className='text-xl font-semibold leading-none'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
            <div className={` ${isPlaying? "block" : "invisible"}`} >
                {/* <div className="tenor-gif-embed" data-postid="16883646" data-aspect-ratio="6.4" data-width="100%"></div> <script async src="https://tenor.com/embed.js"></script> */}
                <img className='h-[4.8vw] w-[full]' src="https://cdn.pixabay.com/animation/2023/03/24/17/28/17-28-45-177_512.gif"></img>
            </div>
            

            <button className={`px-4 py-1  rounded transition ease-in-out delay-150 duration-1000 ${isPlaying?"bg-green-500 text-black":"bg-gray-500"} m-2 font-semibold text-white`} 
                    onClick={ 
                        ()=>{
                            if(playing===null){
                                aud.play();
                                songPlayData(aud);
                                updatePlaying(aud);
                            }
                            else{
                                playing.pause();
                                songPauseData(playing);
                                aud.play();
                                songPlayData(aud);
                                updatePlaying(aud);
                            }
                        }
                    }>Play
                    <div className='m-2 inline'>
                        <FontAwesomeIcon icon="fa-solid fa-play" /> 
                    </div>
                    
            </button>
            <button className='px-2 py-1 rounded bg-gray-500 m-2 font-semibold text-white' 
                    onClick={ 
                        ()=>{
                            if(aud===playing){
                                aud.pause();
                                songPauseData(playing);
                                updatePlaying(null);
                            }
                        }
                    }
                    >Pause
                    <div className='m-2 inline'>
                        <FontAwesomeIcon icon="fa-solid fa-pause" />    
                    </div>
            </button>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added?"bg-teal-500":"bg-pink-600"}  whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full transition-all duration-[600ms] ease-in-out delay-10 ${added?"w-32 text-black font-semibold":"w-32"} `}>{added?"Added" :"Add to Favourites"}</button>
    </div>
    </>
  )
}

export default Card
library.add(fab, fas, far)
