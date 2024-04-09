"use client"

import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'




const page = () => {

  // const data = [
  //   {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXhsXgf64slQgcRxsif0WTrvGbcg_yfCSSvmHKAWndg&s", name:"Challenge", artist: "Ninja", added:false, aud: new Audio('./sounds/Challenge.mp3'), isPlaying:false },
  //   {image: "https://images.hungama.com/c/1/898/19a/52547461/52547461_200x200.jpg", name:"Tibbeyan Da Putt", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Tibeyandaputt.mp3'), isPlaying:false},
  //   {image: "https://i1.sndcdn.com/artworks-g6GTzDoZ4klGsqYi-cvxNfw-t500x500.jpg", name:"One Love", artist: "Shubh", added:false, aud: new Audio('./sounds/Onelove.mp3'), isPlaying:false},
  //   {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgs1l08qbGBseYrSvlhZqMC-EG3sa80xQe571Qt20_lA&s", name:"So High", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Sohigh.mp3'), isPlaying:false},
  //   {image: "https://i1.sndcdn.com/artworks-rkay0qsKWDvM542a-r2HZUw-t500x500.jpg", name:"Built-Different", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Built-Different.mp3'), isPlaying:false},
  //   {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy8R0ZkrUjrGyccdtvm_3OT2dZJIrHg47cvcMKhWSYA&s", name:"Mukh", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Mukh.mp3'), isPlaying:false},
  //   {image: "https://media.lyricsmint.com/photos/16086/maxresdefault-2_cover.jpg", name:"Power", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Power.mp3'), isPlaying:false},
  //   {image: "https://i1.sndcdn.com/artworks-zs1LZCGop7fKxviM-OwQ5zg-t500x500.jpg", name:"295", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/295.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/731427/The%20Jatts.jpg", name:"The Jatts", artist: " Varinder Brar", added:false, aud: new Audio('./sounds/The-Jatts.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/730796/Befikre.jpg", name:"Befikre", artist: "Varinder Brar", added:false, aud: new Audio('./sounds/Befikre.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/728761/Jatt%20Life%20Zone.jpg", name:"Jatt-Life-Zone", artist: "Varinder Brar", added:false, aud: new Audio('./sounds/Jatt-Life-Zone.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/725400/Shaan.jpg", name:"Shaan", artist: "Varinder Brar", added:false, aud: new Audio('./sounds/Shaan.mp3'), isPlaying:false},
  //   {image: "https://pagalnew.com/coverimages/No-Regrets-Sunny-Malton-500-500.jpg", name:"No Regrets", artist: "Sunny Malton", added:false, aud: new Audio('./sounds/No-Regrets.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/730137/Saan%20Jatt.jpg", name:"Saan Jatt", artist: "Sunny Malton", added:false, aud: new Audio('./sounds/Saan-Jatt.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/728560/Letter%20to%20Sidhu.jpg", name:"Letter to Sidhu", artist: "Sunny Malton", added:false, aud: new Audio('./sounds/Letter-to-Sidhu .mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/727454/Levels.jpg", name:"Levels", artist: "Sidhu Moosewala", added:false, aud: new Audio('./sounds/Levels.mp3'), isPlaying:false},
  //   {image: "https://cover.djpunjab.is/53716/300x300/we-made-it-parmish-verma.webp", name:"We Made It", artist: "Parmish Verma", added:false, aud: new Audio('./sounds/We Made It.mp3'), isPlaying:false},
  //   {image: "https://lq.djjohal.com/covers/730199/Check%20It%20Out.jpg", name:"Check It Out", artist: "Parmish Verma", added:false, aud: new Audio('./sounds/Check It Out.mp3'), isPlaying:false},
  // ]

  const data = [
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXhsXgf64slQgcRxsif0WTrvGbcg_yfCSSvmHKAWndg&s", name:"Challenge", artist: "Ninja", added:false, isPlaying:false },
    {image: "https://images.hungama.com/c/1/898/19a/52547461/52547461_200x200.jpg", name:"Tibbeyan Da Putt", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://i1.sndcdn.com/artworks-g6GTzDoZ4klGsqYi-cvxNfw-t500x500.jpg", name:"One Love", artist: "Shubh", added:false, isPlaying:false},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgs1l08qbGBseYrSvlhZqMC-EG3sa80xQe571Qt20_lA&s", name:"So High", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://i1.sndcdn.com/artworks-rkay0qsKWDvM542a-r2HZUw-t500x500.jpg", name:"Built Different", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy8R0ZkrUjrGyccdtvm_3OT2dZJIrHg47cvcMKhWSYA&s", name:"Mukh", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://media.lyricsmint.com/photos/16086/maxresdefault-2_cover.jpg", name:"Power", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://i1.sndcdn.com/artworks-zs1LZCGop7fKxviM-OwQ5zg-t500x500.jpg", name:"295", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/731427/The%20Jatts.jpg", name:"The Jatts", artist: " Varinder Brar", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/730796/Befikre.jpg", name:"Befikre", artist: "Varinder Brar", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/728761/Jatt%20Life%20Zone.jpg", name:"Jatt Life Zone", artist: "Varinder Brar", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/725400/Shaan.jpg", name:"Shaan", artist: "Varinder Brar", added:false, isPlaying:false},
    {image: "https://pagalnew.com/coverimages/No-Regrets-Sunny-Malton-500-500.jpg", name:"No Regrets", artist: "Sunny Malton", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/730137/Saan%20Jatt.jpg", name:"Saan Jatt", artist: "Sunny Malton", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/728560/Letter%20to%20Sidhu.jpg", name:"Letter to Sidhu", artist: "Sunny Malton", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/727454/Levels.jpg", name:"Levels", artist: "Sidhu Moosewala", added:false, isPlaying:false},
    {image: "https://cover.djpunjab.is/53716/300x300/we-made-it-parmish-verma.webp", name:"We Made It", artist: "Parmish Verma", added:false, isPlaying:false},
    {image: "https://lq.djjohal.com/covers/730199/Check%20It%20Out.jpg", name:"Check It Out", artist: "Parmish Verma", added:false, isPlaying:false},
  ]

  const [songData,setSongData]=useState(data);
  const [playing,setPlaying] = useState(null);

  function shuffleArray(arr) {
    return arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  useEffect(() => {
    const fetchData = async () => {
      const updatedData = await Promise.all(data.map(async (item) => {
        const aud = new Audio(`./sounds/${item.name}.mp3`);
        await aud.load(); // Ensure the audio is loaded
        return { ...item, aud };
      }));
      setSongData(updatedData);
    };

    fetchData();

    // Shuffle the data array and store the shuffled result
    const shuffledData = shuffleArray(data);
    
    // Update the state or variable holding the shuffled data
    // For example, if you're using state: setData(shuffledData);
    setSongData(shuffledData)
  }, []);

  // let mus = [new Audio('./sounds/Challenge.mp3'), new Audio('./sounds/Tibeyandaputt.mp3'),new Audio('./sounds/Onelove.mp3'),new Audio('./sounds/Sohigh.mp3')]

 


  function updatePlaying(index){
    setPlaying(index);
  }

  function handleClick(index){
    setSongData((curr)=>{
      return curr.map((item,currindex)=>{
        if(index==currindex){
          return {...item,added:!item.added}
        }
        return item;
      })
    })
  }
  function songPlayData(music){
    setSongData((curr)=>{
      return curr.map((item,currindex)=>{
        if(item.aud===music){
          return {...item,isPlaying:true}
        }
        return item;
      })
    })
  }
  function songPauseData(music){
    setSongData((curr)=>{
      return curr.map((item,currindex)=>{
        if(item.aud===music){
          return {...item,isPlaying:false}
        }
        return item;
      })
    })
  }

  return (
    <>
      <div className='w-full bg-zinc-400'>
        <Navbar data={songData}></Navbar>
        <div className={`mt-[6vw] px-20 flex gap-10 flex-wrap bg-[rgba(0,0,0,0.2)]`}>
          {
            songData.map((obj,index)=>{
              return <Card data={obj} playing={playing} updatePlaying={updatePlaying} songPlayData={songPlayData} songPauseData={songPauseData} handleClick={handleClick} index={index} key={index} ></Card>
            })
          }
          
        </div>
      </div>
    </>
    
  )
}

export default page
