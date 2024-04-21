import Image from 'next/image'
import classes from './index.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__contact}>
        <a href='tel:+996501065505'>
          <Image src='/assets/icons/phone.svg' alt='phone' width={20} height={20} />
          <p>+996 501 06 55 05</p>
        </a>
        <a href='email:bono51@gmail.com'>
          <Image src='/assets/icons/email.svg' alt='email' width={20} height={20} />
          <p>bono51@gmail.com</p>
        </a>
      </div>
      <div className={classes.header__contact}>
        <a href="">
          <Image src='/assets/icons/instagram.svg' alt='instagram' width={20} height={20} />
          <p>instagram</p>
        </a>
        <a href="">
          <Image src='/assets/icons/twogis.png' alt='2Gis' width={20} height={20} />
          <p>2Gis</p>
        </a>
        <Link href='/#reserve' className={classes.header__btn}>Заказать</Link>
      </div>
    </header>
  )
}

export default Header