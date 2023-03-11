import React from 'react'
import s from './ErrorPage.module.scss'
function ErrorPage() {
  return (
    <div className={s.error}>
      <p className={s.error_title}>This page is not a found!</p>
      </div>
  )
}

export default ErrorPage