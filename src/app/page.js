import {
  AboutUs,
  Contacts,
  Footer,
  Gallery,
  Hero,
  MenuList,
  MenuCard,
  AboutUsItem,
  Video,
  Form
} from '@/components'
import { aboutData, menuData, heroImages } from '@/data/dummy'

import classes from './page.module.scss'

export default function Home() {
  return (
    <main className={classes.mainPage}>
      <Hero images={heroImages} />
      <section id='about'>
        <div className={classes.mainPage_paddingY100}>
          <AboutUs mainImageUrl='/assets/cook.png' alt='повар'>
            {aboutData.items.map((item, index) => (
              <AboutUsItem
                key={`cook-${index}`}
                iconUrl={item.iconUrl}
                title={item.title}
                description={item.description}
              />
            ))}
          </AboutUs>
        </div>
        <div className={classes.mainPage_paddingY100}>
          <AboutUs mainImageUrl='/assets/bar.jpeg' alt='бар' reverse={true}>
            {aboutData.items.map((item, index) => (
              <AboutUsItem
                key={`bar-${index}`}
                iconUrl={item.iconUrl}
                title={item.title}
                description={item.description}
              />
            ))}
          </AboutUs>
        </div>
      </section>
      <section id='menu' className={classes.mainPage_paddingY100}>
        <h2 className={classes.mainPage__subTitle}>Меню</h2>
        <MenuList>
          {menuData.items.map((item, index) => (
            <MenuCard
              key={`menu-${index}`}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </MenuList>
      </section>
      <div className={classes.mainPage__secodary}>
        <section id='gallery' className={classes.mainPage_paddingY100}>
          <h2 className={classes.mainPage__subTitle}>Фотогалерея</h2>
          <Gallery />
        </section>
        <section className={`${classes.mainPage__video} ${classes.mainPage_paddingY150}`}>
          <Video />
        </section>
        <section id='contacts' className={classes.mainPage_paddingY100}>
          <Contacts />
        </section>
        <section id='reserve' className={`${classes.mainPage__form} ${classes.mainPage_paddingY100}`}>
          <h2 className={`${classes.mainPage__subTitle}`}>Бронирование столика</h2>
          <Form />
        </section>
      </div>
      <Footer />
    </main>
  );
}
