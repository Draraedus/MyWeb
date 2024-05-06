import { ReactNode } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./LayoutWrapper.module.css";

type LayoutWrapperProps = {
  component: ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = (props) => {
  return (
    <div className={styles.ContentPage}>
      <NavBar />
      {props.component}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
