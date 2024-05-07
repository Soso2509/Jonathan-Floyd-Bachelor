import React, {useState} from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from '../components/images/Ikon_Thick_W.png'


const HamburgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked]=  useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked") 
            setMenuClass("menu visable") 
        }else{
            setBurgerClass("burger-bar unclicked") 
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="navContainer disable-hamburger">
            <nav className="burger">
                <div className="logo">
                    <Link href="/">
                    <Image
                    src={Logo}
                    className="LogoIcon"
                    alt="Jonathan floyd's F icon"
                    />
                    </Link>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="hamburgerLinks">
                    <Link href="/bio">Bio</Link>
                
                    <Link href="/media">Media</Link>
                
                    <a
                    href={"https://unitedstage.no/artister/jonathan-floyd/"}
                    target="_blank"
                    >
                    Booking
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu