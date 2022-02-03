import styles from '../styles/Home.module.css'
import { useLocale } from 'next-zero-intl'
import { useState } from 'react'
import { LangSelectOptions } from './langs'

export default function ChangeLocale() {
  const [locale, setLocale] = useLocale()
  const [selected, setSelected] = useState(locale)

  const onSelectHandler = e => {
    setSelected(e.target.value)
    setLocale(e.target.value)
  }

  return (
    <select
      onChange={onSelectHandler}
      value={selected}
      className={styles.select}
    >
      <LangSelectOptions />
    </select>
  )
}
