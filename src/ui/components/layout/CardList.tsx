import React from "react";
import styles from "./CardList.module.css";

function CardList(props: any) {
  return (
    <li className={`${styles.card_list} ${styles[props.customClass]}`}>
      {props.children}
    </li>
  );
}

export default CardList;
