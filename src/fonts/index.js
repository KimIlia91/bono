import localFont from 'next/font/local'
import { Inter, Comfortaa } from 'next/font/google'

export const comfortaa = Comfortaa({
    weight: '700',
    subsets: ['cyrillic'],
    variable: '--font-comfortaa'
})

export const inter = Inter({
    weight: '400',
    subsets: ['cyrillic'],
    variable: '--font-inter'
})

export const room = localFont({
    src: [
      {
        path: '../fonts/room/Room-Black.woff2',
        weight: '900',
        subsets: ['cyrillic'],
        style: 'bold',
      },
      {
        path: '../fonts/room/Room-Medium.woff2',
        weight: '400',
        subsets: ['cyrillic'],
        style: 'normal',
      },
    ],
    variable: '--font-room'
})

export const gotham = localFont({
    src: [
      {
        path: '../fonts/gotham/gothampro_bold.ttf',
        weight: '700',
        subsets: ['cyrillic'],
        style: 'bold',
      },
      {
        path: '../fonts/gotham/gothampro_medium.ttf',
        weight: '400',
        subsets: ['cyrillic'],
        style: 'normal',
      },
    ],
    variable: '--font-gotham'
})

export const bauhaus = localFont({
    src: [
      {
        path: '../fonts/bauhaus/BauhausStd-Medium.woff2',
        weight: '400',
        subsets: ['cyrillic'],
        style: 'normal',
      },
    ],
    variable: '--font-bauhaus'
})

export const blackCrow = localFont({
  src: [
    {
      path: '../fonts/black-crow/Blackcrow-Thin.woff2',
      weight: '200',
      subsets: ['cyrillic'],
      style: 'thin',
    },
  ],
  variable: '--font-black-crow'
})