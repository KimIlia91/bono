import Image from 'next/image'
import classes from './index.module.scss'

const Video = () => {
  return (
    <div className={classes.video}>
        <div className={classes.video__item}>
            <Image
                src='/assets/video-cover.png'
                alt='video'
                width={1100}
                height={500}
                className={classes.video__image}
            />
            <div className={classes.video__text}>
                <h3>Оцените лучший ресторан - Бар</h3>
                <p>и проведите время с чутким персоналом которые обслужат вас и ваших гостей в самом лучшем формате!</p>
            </div>
        </div>
    </div>
  )
}

export default Video