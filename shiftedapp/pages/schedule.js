import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonsCont from '../comps/HeaderButtons'
import MyCalendar from '../comps/CalendarBon'
import MyLegend from '../comps/CalendarLegendBon'
import PageHeading from '../comps/HeadingCat'
import ListContainer from '../comps/ListContainerCat'
import Dropdown from '../comps/DropdownCat'
import CRinput from '../comps/CRinputMat'
import CRbutton from '../comps/CRbuttonMat'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"28px"} p={"Calendar"} routeTo="/" ></ButtonsCont>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#C4C4C4"} txt={"18px"} p={"Create Schedule"}></ButtonsCont>
        <ButtonsCont className={styles.buttons} color={"#FFFFFF"} bg={"#C4C4C4"} txt={"18px"} p={"Group Creation"} routeTo="group" ></ButtonsCont>
      </div>
      <div className={styles.main}>
        <div className={styles.schedulemain}>
          <PageHeading />
          <Dropdown />
          <br />
          <PageHeading fontsize="24px" title="Select Hours and Numbers of Employees" />
          <div className={styles.selecthourscon}>
            <div className={styles.nameprecon}>
              <Dropdown textlabel="Load preset"/>
              <div className={styles.namebuttoncon}>
                <CRinput ws="120px" fontsize="16px" defaultValue= "Name Preset" />
                <CRbutton ws="120px" tx="Save Preset"  />
              </div>
            </div>
            <div className={styles.hourrow}>
              <div className={styles.hourcon}>
                <div className={styles.hourbuttons}>
                  <CRbutton ws="120px" tx="8am-12pm" />
                  <CRbutton ws="120px" tx="8:15am-12:15pm" />
                  <CRbutton ws="120px" tx="8am-12pm" />
                  <CRbutton ws="120px" tx="8am-12pm" />
                </div>
                <div className={styles.hourinput}>
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                </div>
              </div>
              <div className={styles.hourcon}>
                <div className={styles.hourbuttons}>
                  <CRbutton ws="120px" tx="8am-4pm" />
                  <CRbutton ws="120px" tx="8am-4pm" />
                  <CRbutton ws="120px" tx="8am-4pm" />
                  <CRbutton ws="120px" tx="8am-4pm" />
                </div>
                <div className={styles.hourinput}>
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                  <CRinput ws="50px" fontsize="12px" defaultValue="#of ppl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.CSbutton}>
          <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"24px"} width={""} p={"Upload to Calender"}></ButtonsCont>
        </div>
      </div>
    </div>
  )
}
