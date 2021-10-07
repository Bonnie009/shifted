import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonsCont from '../comps/HeaderButtons'
import GCinput from '../comps/CRinputMat'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"28px"} p={"Calendar"} routeTo="/" ></ButtonsCont>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"18px"} p={"Create Schedule"} routeTo="schedule"></ButtonsCont>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"18px"} p={"Group Creation"} routeTo="group" ></ButtonsCont>
      </div>
      <div className={styles.main}>
        <div className={styles.list}>
          <div className={styles.listtitle}>Lead Group Member</div>
          <GCinput defaultValue="Name" ws="400px"></GCinput>
          <GCinput defaultValue="Email Address" ws="400px"></GCinput>
          <div className={styles.listtitle}>Group Member #1</div>
          <GCinput defaultValue="Name" ws="400px"></GCinput>
          <GCinput defaultValue="Email Address" ws="400px"></GCinput>
          <div className={styles.listtitle}>Group Member #2</div>
          <GCinput defaultValue="Name" ws="400px"></GCinput>
          <GCinput defaultValue="Email Address" ws="400px"></GCinput>

          <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"28px"} p={"Create"} routeTo="/" ></ButtonsCont>
        </div>
      </div>
    </div>
  )
}
