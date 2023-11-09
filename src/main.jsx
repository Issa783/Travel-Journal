import React from "react";
import Grid from './Components/grid';
import Navbar from './Components/navbar';
import Data from "./data"
import styles from "./style.module.css"
function Main(){
    const myData = Data.map(item =>{
        return (<Grid key={item.id}
             item = {item} />)
    })
    return(
        <div className={styles.main}>
             <Navbar />
             {myData}
        </div>
    )
}
export default Main;