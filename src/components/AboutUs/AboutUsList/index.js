import classes from './index.module.scss'

export const AboutUsList = ({ children }) => {
  return (
    <ul className={classes.list}>
      {children}
    </ul>
  )
}

export default AboutUsList
