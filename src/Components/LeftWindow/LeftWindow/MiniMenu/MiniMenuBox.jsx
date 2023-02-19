import React from "react";
import styles from "./MiniMenu.module.css";
import { Link } from "react-router-dom";

const MiniMenuBox = (props) => {
  return (
    <li className="MiniMenuBox">
      <div className="placeholder">
        <Link className="Link" to={props.To}>
          <props.Sprite className={styles.Icon} alt=""></props.Sprite>
          <a href="/" className="MiniMenuText">
            {props.text}
          </a>
        </Link>
      </div>
    </li>
  );
};

export default MiniMenuBox;
