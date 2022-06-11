import Router from 'next/router'
import { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    localStorage.clear()
    Router.push('/')
  }, [])
}

export default Logout
