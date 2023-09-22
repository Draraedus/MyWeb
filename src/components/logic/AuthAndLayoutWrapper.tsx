import {ReactNode} from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './AuthAndLayoutWrapper.module.css'

type AuthAndLayoutWrapperProps = {
    component: ReactNode
}
  
const AuthAndLayoutWrapper: React.FC<AuthAndLayoutWrapperProps> = (props) => {
  
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  if (isAuthenticated === true) {
      return (
        <div className={styles.ContentPage}>
          <NavBar/>
          {props.component}
          <Footer/>
        </div>
      )
    } else {
      return <Navigate to={"/"}/>
    }
}

export default AuthAndLayoutWrapper