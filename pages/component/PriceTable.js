import React from 'react'
import NavBar from './NavBar/NavBar'
import styles from './PriceTable.module.scss'

 const PriceTable = () => {
    return (
        <>
   <div className={styles.quiz_window}>
        <div className={styles.quiz_window_header}>
            <div className={styles.quiz_window_title}>Price </div>
        </div>
        <div className={styles.quiz_window_body}>
            <div className={styles.guiz_window_awards}>
            <ul className={styles.guiz_awards_row}>
                <li className={styles.guiz_awards_header_star}>&nbsp;</li>
                <li className={styles.guiz_awards_header_title}>Company Name</li>
                <li className={styles.guiz_awards_header_track}>Price (Taka)</li>
                <li className={styles.guiz_awards_header_time}>Availability</li>
            </ul>
            <ul className={styles.priceRow}>
                <li className={styles.guiz_awards_star}><span className={styles.star_goldstar}></span></li>
                <li className={styles.guiz_awards_title}>Rayns</li>
                <li className={styles.guiz_awards_track}>8 $</li>
                <li className={styles.guiz_awards_time}>Available</li>
            </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default PriceTable
