import Menus from './Menus.jsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
function Header() {
    //Language

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    const { t } = useTranslation();

      //Language
      const [isLangToggled, setIsLangToggled] = useState(false);
      const handleLangClick = () => {
        setIsLangToggled(!isLangToggled);
      }; 

    return (
      
      <header className="fixed w-full max-w-[1920px] h-12 bg-stone-200 flex flex-row justify-between items-center">

            <img className="h-[30px] px-[10px]" src="logo.png" alt="Pizza Point" />
            <div className="hidden md:block">
                <ul className="flex flex-row">
                    <Menus />
                </ul>
            </div>
            <span onClick={handleLangClick} className="cursor-pointer h-[30px] my-[10px] w-[100px] mr-[50px] border-[0.5px] border-stone-400 rounded-[5px] bg-stone-200 flex flex-row items-center justify-between md:mr-[10px]">
              <span  className="flex flex-row items-center">
                <svg className="mx-[5px]" width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg>
                {t('lang')}
              </span>
              <span className="mx-[5px]">
                <svg className={isLangToggled ? '-rotate-180 duration-300' : 'duration-300'} width="25px" height="25px" viewBox="0 0 32 32">
                <line className="fill-black border-black stroke-black stroke-[2px]" x1="16" x2="7" y1="20.5" y2="11.5"/>
                <line className="fill-black border-black stroke-black stroke-[2px]" x1="25" x2="16" y1="11.5" y2="20.5"/>
                </svg>
              </span>
            </span>
            <span className={isLangToggled ? 'absolute top-0 right-0 mt-11 transition-all block bg-stone-200 w-[110px] mr-[40px] rounded-[5px] border-[0.5px] border-stone-400 p-[5px] md:mr-[10px]' : 'fixed top-0 right-0 mt-7 bg-stone-200 w-[110px] mr-[40px] rounded-[5px] border-[0.5px] border-stone-400 p-[5px] transition-all hidden md:mr-[10px]'}>
          <ul>
            <li onClick={() => changeLanguage('en')} className="cursor-pointer py-[5px] px-[10px] hover:bg-stone-100 rounded-[5px] transition-all">
              {t('eng_language')}
            </li>
            <li onClick={() => changeLanguage('hu')} className="cursor-pointer py-[5px] px-[10px] hover:bg-stone-100 rounded-[5px] transition-all">
              {t('hun_language')}
            </li>
          </ul>
        </span>
      </header>
    )
  }
  
  export default Header
  