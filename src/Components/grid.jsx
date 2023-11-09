import React from "react";
import Image3 from "../images/Fill 219.svg";
import styles from "../style.module.css";
function Japan(props){
    return(<div>
      <img src={props.item.imageUrl} className={styles.picJapan} />
      <img src ={Image3} className={styles.picJapan1} />
      <span className={styles.location}>{props.item.location}</span>
      <span ><a href="">{props.item.googleMapsUrl}</a></span>
      <h2 className ={styles.title}>{props.item.title}</h2>
      <h4 className ={styles.date}>{props.item.startDate}-{props.item.endDate}</h4>
      <p className={styles.desc}>{props.item.description}</p>
    </div>)
}
export default Japan;