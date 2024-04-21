import Image from 'next/image'
import classes from './index.module.scss'
import AboutUsList from './AboutUsList'

const AboutUs = ({
  children,
  mainImageUrl,
  alt,
  reverse = false,
}) => {
  return (
    <div className={`${classes.about} ${reverse ? `${classes.about_reverse}`: ``}`}>
      <Image 
        src={mainImageUrl}
        alt={alt}
        width={493}
        height={600}
        priority={true}
        className={classes.about__image}
      />
      <AboutUsList>
        {children}
      </AboutUsList>
    </div>
  )
}

export default AboutUs