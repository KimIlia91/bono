import classes from './index.module.scss'

const Button = ({type, lable, loading }) => {
  return (
    <button disabled={loading} type={type} className={classes.button}>
        {loading ? 'Отправка...' : lable}
    </button>
  )
}

export default Button