import classes from './index.module.scss'

const MenuList = ({ children }) => {
  return (
    <ul className={classes.menu__list}>
      {children}
    </ul>
  )
}

export default MenuList