import React from "react";
import Image1 from "../images/Fill 213.svg";
import styles from "../style.module.css";
function Navbar(){
    return(<nav className={styles.nav}>
        <img src={Image1} className={styles.picNav} />
        <h3 className={styles.navTitle}>my travel journal.</h3>
    </nav>)
}
export default Navbar