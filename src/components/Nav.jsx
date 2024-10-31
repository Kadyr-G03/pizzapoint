import Links from "./Links.jsx"
import { useState } from 'react'
import Menus from './Menus.jsx'


function Nav() {

  //Navigation

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  }; 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setIsToggled(!isToggled);
    if (element) {
        const offsetTop = element.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    }
  };

    return (
      <>
        <span onClick={handleClick} className="cursor-pointer md:hidden border-[0.5px] rounded-[5px] border-stone-400 bg-stone-200 z-30 fixed w-[30px] h-[30px] rounded-[10px] my-[10px] mr-[10px] top-0 right-0 flex items-center justify-center transition-all">
          <svg className="mt-[1px] w-[22px] h-[22px] stroke-w transition-all hover:fill-zinc-50" viewBox="0 0 25 25">
          <path d="M5 6H20" className={isToggled ? 'stroke-stone-800 transition-transform ease-in-out duration-300 rotate-45 -translate-y-[2px] -translate-x-[-8px]' : 'stroke-stone-800 transition-transform ease-in-out duration-300'} strokeWidth="2"  strokeLinecap="round" />
          <path d="M5 12H20" className={isToggled ? 'stroke-stone-800 transition-opacity ease-in-out duration-300 opacity-0' : 'stroke-stone-800 transition-opacity ease-in-out duration-300 opacity-100'} strokeWidth="2" strokeLinecap="round" />
          <path d="M5 18H20" className={isToggled ? 'stroke-stone-800 transition-transform ease-in-out duration-300 -rotate-45 -translate-y-[-7px] -translate-x-[9px]' : 'stroke-stone-800 transition-transform ease-in-out duration-300'} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        
        
        <nav className={isToggled ? 'z-20 transition-all w-full max-w-[350px] md:hidden top-0 right-0 h-screen fixed bg-stone-200 flex flex-col items-center justify-between' : 'z-20 w-full max-w-[350px] md:hidden right-0 h-screen fixed bg-stone-200 flex flex-col top-0 items-center justify-between right-[-350px] transition-all '} id="nav">
          <span className="block w-full flex flex-row justify-between items-center h-[55px]">
              <a onClick={() => scrollToSection('intro')} className="cursor-pointer mx-[20px]">
                <img className="h-[30px] px-[10px]" src="logo.png" alt="Pizza Point" />
              </a>
          </span>
          <ul>
            <Menus />
          </ul>
          <span className="pb-[50px]">
          
            <Links />
          </span>
        </nav>
        
        <span onClick={handleClick} className={isToggled ? 'transition-all block min-[800px]:hidden w-full h-screen bg-zinc-950/60 backdrop-blur-md z-10 top-0 fixed' : 'transition-all hidden'}></span>
      </>
      
    )
  }
  
  export default Nav