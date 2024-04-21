import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Link href="/">
        <Image src='/assets/logo.svg' alt='logo' width={125} height={33} />
      </Link>
      <nav>
        <ul>
          <li><Link href="#">Главный экран</Link></li>
          <li><Link href="#about">О нас</Link></li>
          <li><Link href="#menu">Меню</Link></li>
          <li><Link href="#contacts">Контакты</Link></li>
          <li><Link href="#reserve">Бронь столика</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar