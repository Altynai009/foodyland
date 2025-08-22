

import styles from "./Header.module.css"

import Lg from "../../assets/logo.svg"
import Fc from "../../assets/facebook.svg"
import Tw from "../../assets/twitter.svg"
import In from "../../assets/instagram.svg"



const menu = [
    {
        title: "Home",
        path: ""
    },
    {
        title: "Recipes",
        path: ""
    },
    {
        title: "Blog",
        path: ""
    },
    {
        title: "Contact",
        path: ""
    },
    {
        title: "About us",
        path: ""
    }
]

const Header = () => {
    return (
        <div className={styles.wrap}>
            <div className={[styles.header, "container"].join(" ")}>
                <div className={styles.logo}>
                    <img src={Lg} alt="logo" />
                </div>
                <div className={styles.menu}>
                    {menu.map(item => (
                        <a key={item.title} href={item.path}>{item.title}</a>
                    ))}
                </div>
                <div className={styles.icons}>
                    {[Fc, Tw, In].map(icon => <img key={icon} src={icon} alt="" />)}
                </div>
            </div>
        </div>
    )
}

export default Header