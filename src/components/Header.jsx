import Menus from './menus.jsx'

function Header() {

    return (
      <header className="fixed w-full h-12 bg-stone-200 flex flex-row justify-between items-center">
            <img className="h-[30px] px-[10px]" src="logo.png" alt="Pizza Point" />
            <div className="hidden md:block px-[10px]">
                <ul className="flex flex-row">
                    <Menus />
                </ul>
            </div>
      </header>
    )
  }
  
  export default Header
  