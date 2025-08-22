import mail from "../../assets/mail.svg"
import time from "../../assets/time.svg"
import user from "../../assets/user.svg"
import chicken from "../../assets/chicken.svg"
import view from "../../assets/view.svg"
import homeImg from "../../assets/home-img.png"
import styles from "./HomeBanner.module.css"

const HomeBanner = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                <div className={styles.hot}>
                    <img src={mail} alt="" />
                    <span>Hot Recipes</span>
                </div>
                <h2>Spicy delicious chicken wings</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className="btn">
                    <img src={time} alt="" />
                    <span>30 Minutes</span>
                </button>
                <button className="btn">
                    <img src={chicken} alt="" />
                    <span>Chicken</span>
                </button>
                <div className={styles.textFooter}>
                    <div className={styles.user}>
                        <div>
                            <img src={user} alt="" />
                        </div>
                        <div>
                            <h3>John Smith</h3>
                            <p>15 March 2022</p>
                        </div>
                    </div>
                    <div>
                        <button>
                            <span>View Recipes</span>
                            <img src={view} alt="view" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.img}>
                <img src={homeImg} alt="" />
            </div>
        </div>
    )
}

export default HomeBanner