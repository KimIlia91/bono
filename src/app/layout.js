import { Navbar } from '@/components'
import '../styles/globals.scss'

import {
  blackCrow,
  comfortaa,
  room,
  inter,
  bauhaus,
  gotham
} from '@/fonts';

export const metadata = {
  title: "Bono | Коктейльный бар и ресторан",
  description: "Коктейльный бар и ресторан  приглашает к себе!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`
        ${blackCrow.variable}
        ${comfortaa.variable}
        ${room.variable}
        ${inter.variable}
        ${bauhaus.variable}
        ${gotham.variable}
      `}>
        {children}
      </body>
    </html>
  );
}
