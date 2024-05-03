import Image from 'next/image'

import classes from './index.module.scss'

const MenuCard = ({
  imageUrl,
  title
}) => {
  return (
    <li className={classes.menu__card}>
      <Image
        src={imageUrl}
        alt={`menu image`}
        width={165}
        height={165}
      />
      <h4>{title}</h4>
    </li>
  )
}

export default MenuCard