import React from 'react'
import styles from "./style.module.css"
const Navbar = ({data}) => {
  return (
    <>
    <div className='w-full h-[6vw] pt-[2vw] px-20 pt-[1vw] flex justify-between items-center bg-[rgba(0,0,0,0.9)] fixed top-0 z-10 text-white'>
      <div className='w-full flex flex-col items-center pb-[1vw]'>
        <h3 className={`${styles.a} ${styles.b} px-[1vw] mt-[1.5vw] text-[2.5vw] rounded-lg opacity-75`}>My Music App</h3>
        <h3 className='text-[1.2vw] rounded-lg opacity-80  mb-[2vw]'> - Designed by Rahul❤️</h3>
      </div>
      
      <div className={`flex p-[0.7vw] ${data.filter((item)=> item.added).length?" transition-transform duration-1000 bg-teal-500 opacity-100":"bg-blue-300 opacity-[85]" } rounded-md text-[1.3vw] gap-3`}>
        <h3>Favourites</h3>
        <h4>{data.filter((item)=> item.added).length}</h4>
      </div>
    </div>
    </>
  )
}

export default Navbar
