import { apiCategories } from '../../service/categoriesApi'
import styles from './Categories.module.css'
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    apiCategories.getCategories().then(data => {
      setCategories(data)
    })
  }, [])

  if (categories.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <div className={styles.category}>
        <h2>Categories</h2>
        <button>View All Categories</button>
      </div>
      <Swiper className="mySwiper"
        spaceBetween={40}
        slidesPerView={6}
      >
        {categories.map(item => {
          return (

            <SwiperSlide>
              <div className={styles.card}>
                <img src={item.strCategoryThumb} alt="" />
                <h5>{item.strCategory}</h5>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Categories