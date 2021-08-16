import * as React from 'react'

const ProtectedPage = (Component) => {
  console.log('protected route')
  return (props) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('token')

      if (!accessToken) {
        window.location.href = '/login'
        return null
      }
      return <Component {...props} />
    }
    return null
  }
}

export default ProtectedPage
