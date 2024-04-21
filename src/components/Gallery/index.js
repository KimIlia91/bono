'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { galleryImages } from '@/data/dummy'
import classes from './index.module.scss'

const GalleryCard = ({ imageUrl }) => {
  return (
    <div className={classes.gallery__card}>
      <Image src={imageUrl} alt={imageUrl} height={400} width={400} />
    </div>
  )
}
const Gallery = () => {
  const boxRef = useRef(null);

  const onPrevImage = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft -= width;
  };

  const onNextImage = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft += width;
  };

  return (
    <div className={classes.gallery}>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
        <button className={classes.gallery__prevBtn} onClick={onPrevImage}>
          <Image src='/assets/row-left.svg' alt='row-left' width={20} height={33} />
        </button>
        <h2>Фотогалерея</h2>
        <button className={classes.gallery__nextBtn} onClick={onNextImage}>
          <Image src='/assets/row-right.svg' alt='row-right' width={20} height={33} />
        </button>
      </div>

      <div ref={boxRef} className={classes.gallery__container}>
        {galleryImages.map((imageUrl, index) => (
          <GalleryCard key={`galleryImage-${index}`} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default Gallery