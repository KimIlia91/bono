import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <div className={classes.footer__logo}>
          <Image src='/assets/logo.svg' alt='logo' width={90} height={24} />
          <Link href={`#about`} className={classes.rowUp}>
            <Image src='/assets/row-up.png' alt='row-up' width={24} height={49} />
            <p>Вверх</p>
          </Link>
        </div>
        <div className={classes.footer__list}>
          <h4>/ Адрес:</h4>
          <ul>
            <li>
              <a href="#">карта 2гис</a>
            </li>
            <li><a href="#">Карта Google</a></li>
            <li><a href="#">Доставка</a></li>
          </ul>
        </div>
        <div className={classes.footer__list}>
          <h4>/ Позвоните нам:</h4>
          <ul>
            <li><a href='tel:+996501065505' type='tel'>+996 501 06 55 05</a></li>
            <li><a href='tel:+996501065505' type='tel'>+996 501 06 55 05</a></li>
            <li><a href='tel:+996501065505' type='tel'>+996 501 06 55 05</a></li>
          </ul>
        </div>
        <div className={classes.footer__list}>
          <h4>/ Пишите нам:</h4>
          <ul>
            <li><a href='mail:боно2@gmail.com'>боно2@gmail.com</a></li>
            <li><a href='mail:боно2@gmail.com'>боно2@gmail.com</a></li>
            <li><a href='mail:боно2@gmail.com'>боно2@gmail.com</a></li>
          </ul>
        </div>
        <nav className={classes.footer__list}>
          <h4>/ Навигации по страницам:</h4>
          <ul>
            <li><Link href="#">Главный экран</Link></li>
            <li><Link href="#about">О нас</Link></li>
            <li><Link href="#menu">Меню</Link></li>
            <li><Link href="#contacts">Контакты</Link></li>
            <li><Link href="#reserve">Бронь столика</Link></li>
          </ul>
        </nav>
      </div>
      <div className={classes.footer__social}>
        <div className={classes.footer__social__wrapper}>
          <span>© 2024 год, Bono bar . Все права защищены. </span>
          <ul>
            <li>
                <a href="#">
                  <Image src='/assets/icons/instagram.svg' alt='instagram' width={18} height={18} />
                </a>
            </li>
            <li>
                <a href="#">
                  <Image src='/assets/icons/facebook.svg' alt='telegram' width={18} height={18} />
                </a>
            </li>
            <li>
                <a href="#">
                  <Image src='/assets/icons/facebook.svg' alt='facebook' width={18} height={18} />
                </a>
            </li>
            <li>
                <a href="#">
                  <Image src='/assets/icons/tiktok.svg' alt='tiktok' width={18} height={18} />
                </a>
            </li>
            <li>
                <a href="#">
                  <Image src='/assets/icons/youtube.svg' alt='youtube' width={18} height={18} />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer