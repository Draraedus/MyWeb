import {ReactNode} from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import { Navigate } from 'react-router-dom'

type authCustomContainerProps = {
    component: ReactNode
  }
  
const AuthAndLayoutPageContainer: React.FC<authCustomContainerProps> = (props) => {
    if (1) {
      return (
        <>
          <NavBar/>
          {props.component}
          <Footer/>
        </>
      )
    } else {
      return <Navigate to={"/"}/>
    }
}

export default AuthAndLayoutPageContainer