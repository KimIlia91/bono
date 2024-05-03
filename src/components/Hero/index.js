'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'
import Navbar from '../Navbar'

import classes from './index.module.scss'

const Hero = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <div className={classes.hero}>
      <div className={`${classes.hero__slideWrapper}`}>
        {images.map((image, index) => (
          <Image
            key={`slide-${index}`}
            src={image}
            alt='hero image'
            sizes='100vw'
            fill
            priority
            className={classes.hero__slide}
            style={{ translate: `${-100 * imageIndex}%`}}
          />
        ))}
      </div>
      <div style={{width: '100%', border: '1px solid rgba(255, 255, 255, 0.21)', position: 'absolute', top: '79.5px' }}></div>
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0%', left: '0%' }}>
        <div className={classes.hero__container}>
          <Header />
          <Navbar />
          <div className={classes.hero__textWrapper}>
            <button
              onClick={showPrevImage}
              className={classes.hero__btn}
              aria-label="navigation button"
            >
              <Image src='/assets/row-left.svg' alt='row-left' width={40} height={66} />
            </button>
            <div className={classes.hero__text}>
              <p>Выделяесь среди других</p>
              <h1><span>bono -</span> Коктейльный бар и ресторан  приглашает к себе </h1>
              <Link href='/#reserve' className={classes.hero__text__btn}>Забронировать стол</Link>
              <div className={classes.hero__navBtnWrapper}>
                {images.map((_, index) => (
                  <button
                    key={`navBtn-${index}`}
                    className={`${classes.hero__navBtn} ${index === imageIndex ? classes.hero__navBtn_active : ''}`}
                    onClick={() => setImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={showNextImage} 
              className={classes.hero__btn}
            >
              <Image src='/assets/row-right.svg' alt='right-left' width={40} height={66} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero