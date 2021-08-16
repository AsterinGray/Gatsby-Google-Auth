import * as React from 'react'
import { useEffect } from 'react'
import { useGoogleLogout } from 'react-google-login'
import ProtectedPage from '../utils/protectedPage'

const Home = () => {
  const [profile, setProfile] = React.useState(null)

  const getUserData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${window.localStorage.getItem(
        'token'
      )}`
    )

    const data = await response.json()
    setProfile(data)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const { signOut } = useGoogleLogout({
    clientId: process.env.GOOGLE_CLIENT_ID,
    onLogoutSuccess: logout,
  })

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <button onClick={signOut}>Logout</button>
      {profile && (
        <>
          <h1>Wellcome {profile.name}</h1>
          <h2>Your email is {profile.email}</h2>
          <img src={profile.picture} alt="" />
        </>
      )}
    </>
  )
}

export default ProtectedPage(Home)
