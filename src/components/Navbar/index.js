'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import classes from './index.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenMenu = () => {
    document.documentElement.style.overflow = 'hidden';
    setIsOpen(true)
  }

  const onCloseMenu = () => {
    document.documentElement.style.overflow = 'auto'
    setIsOpen(false)
  }

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
      <div className={classes.navbar__burger}>
        <button onClick={onOpenMenu}>
          <Image src='/assets/burger.svg' alt='burger-menu' height={40} width={40} />
        </button>
        {isOpen && 
          <>
            <div className={classes.navbar__menu}>
              <nav>
                <ul>
                  <li><Link onClick={onCloseMenu} href="#">Главный экран</Link></li>
                  <li><Link onClick={onCloseMenu} href="#about">О нас</Link></li>
                  <li><Link onClick={onCloseMenu} href="#menu">Меню</Link></li>
                  <li><Link onClick={onCloseMenu} href="#contacts">Контакты</Link></li>
                  <li><Link onClick={onCloseMenu} href="#reserve">Бронь столика</Link></li>
                </ul>
              </nav>
              <button onClick={onCloseMenu}>
                <Image src='/assets/close.svg' alt='close' width={30} height={30} />
              </button>
            </div>
            <div className={classes.navbar__backgroundOverlay}></div>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar