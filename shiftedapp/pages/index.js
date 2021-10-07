import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonsCont from '../comps/HeaderButtons'
import MyCalendar from '../comps/CalendarBon'
import MyLegend from '../comps/CalendarLegendBon'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"28px"} p={"Calendar"} ></ButtonsCont>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#C4C4C4"} txt={"18px"} p={"Create Schedule"}></ButtonsCont>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#C4C4C4"} txt={"18px"} p={"Group Creation"}></ButtonsCont>
      </div>
      <div className={styles.main}>
        <MyCalendar></MyCalendar>
        <MyLegend></MyLegend>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"32px"} p={"Submit"}></ButtonsCont>
      </div>
    </div>
  )
}
