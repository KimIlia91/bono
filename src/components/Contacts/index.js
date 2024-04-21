import Image from 'next/image'

import classes from './index.module.scss'

const Contacts = () => {
  return (
    <div className={classes.contact__wrapper}>
      <Image 
        src='/assets/contacts.png'
        alt='контакты'
        width={707}
        height={500}
        className={classes.contact__image}
      />
      <div className={classes.contact__text}>
        <div className={classes.contact__item}>
          <h3>Мы открыты с 10:00 до 02:00</h3>
          <p>Работаем в будни и выходные дни с 10:00 до 02:00. Бронируйте столики по телефону: <br />
            <a href="tel:+1234567890" className={classes.contact__phone}>+1 (234) 567-890</a> <br />
            <a href="tel:+1234567890" className={classes.contact__phone}>+1 (234) 567-890</a>
          </p>
        </div>
        <div className={classes.contact__item}>
          <h3>С нетерпением ждем вас</h3>
          <p>на улице Сухэ-Батора, 17 6-й мк-р, Октябрьский район, столица Бишкек,</p>
        </div>
        <div className={classes.contact__item}>
          <div className={classes.contact__links}>
            <a href="#">
              <Image 
                src='/assets/icons/instagram.svg'
                alt='instagram'
                width={18}
                height={18}
              />
              @bono.bar.bishkek
            </a>
            <a href="#">
              <Image 
                src='/assets/icons/twogis.png'
                alt='instagram'
                width={18}
                height={18}
              />
              ссылка на 2Gis
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts