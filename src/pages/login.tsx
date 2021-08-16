import React from 'react'
import GoogleLogin from 'react-google-login'

const Login = () => {
  const responseGoogle = async (res) => {
    window.localStorage.setItem('token', res.tokenId)
    window.location.href = '/'
  }

  console.log(process.env.GOOGLE_CLIENT_ID)

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login
