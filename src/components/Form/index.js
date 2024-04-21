'use client'

import { useState, useRef } from 'react'
import Button from '../ui/Button'
import Input from '../ui/InputForm'
import classes from './index.module.scss'
import Dropdown from '../ui/Dropdown'

const Form = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    duration: '',
    time: '',
    quantity: '',
  })

  const isValidPhoneNumber = (phoneNumber) => {
    if (phoneNumber === '') return true
    const phonePattern = /^[+\d]\d*$/
    return phonePattern.test(phoneNumber)
  };

  const handleChange = ({name, value}) => {
    if (name === 'phone' && !isValidPhoneNumber(value)) {
      return
    }

    setForm({...form, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true);

    setTimeout(() => {
      console.log(form)
      setLoading(false);
      setForm({
        name: '',
        phone: '',
        duration: '',
        time: '',
        quantity: '',
      })
      setMessage('Сообщение успешно отправлено!')

      setTimeout(() => {
        setMessage('')
      }, 10000)
    }, 2000)
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <Input
        name='name'
        value={form.name}
        type='text'
        placeholder='Михаил'
        label='ФИО клиента'
        onChange={handleChange}
        required={true}
      />
      <Input
        name='phone'
        value={form.phone}
        type='text'
        placeholder='+996 501 06 55 05'
        label='Номер клиента'
        onChange={handleChange}
        required={true}
      />
      <Dropdown
        name='duration'
        value={form.duration}
        type='text'
        label='Время нахождения'
        placeholder='2 часа'
        onChange={handleChange}
        required={true}
      />
      <Input
        name='time'
        value={form.time}
        type='time'
        label='Время брони'
        onChange={handleChange}
        required={true}
      />
      <Input
        name='quantity'
        value={form.quantity}
        type='number' placeholder='2'
        label='Количество гостей'
        min={1}
        onChange={handleChange}
        required={true}
      />
      <p className={classes.message}>{message}</p>
      <Button
        loading={loading}
        type='submit'
        lable='Забронировать стол'
      />
    </form>
  )
}

export default Form