import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
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



  const [showColor, setShowColor] = useState(false)
  const [showColor1, setShowColor1] = useState(false)
  const [showColor2, setShowColor2] = useState(false)
  const [showColor3, setShowColor3] = useState(false)
  const [showColor4, setShowColor4] = useState(false)
  const [showColor5, setShowColor5] = useState(false)
  const [showColor6, setShowColor6] = useState(false)
  const [showColor7, setShowColor7] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"28px"} p={"Calendar"} routeTo="/" ></ButtonsCont>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#7BE4AB"} txt={"18px"} p={"Create Schedule"}></ButtonsCont>
        <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"18px"} p={"Group Creation"} routeTo="group" ></ButtonsCont>
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
                  <CRbutton ws="120px" tx="8am-12pm" TesterBut={()=>{
                    setShowColor(true)
                  }} show={showColor} />
                  <CRbutton ws="120px" tx="8:15am-12:15pm" TesterBut={()=>{
                    setShowColor1(true)
                  }} show={showColor1} />
                  <CRbutton ws="120px" tx="8am-12pm" TesterBut={()=>{
                    setShowColor2(true)
                  }} show={showColor2} />
                  <CRbutton ws="120px" tx="8am-12pm" TesterBut={()=>{
                    setShowColor3(true)
                  }} show={showColor3} />
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
                  <CRbutton ws="120px" tx="8am-4pm" TesterBut={()=>{
                    setShowColor4(true)
                  }} show={showColor4} />
                  <CRbutton ws="120px" tx="8am-4pm" TesterBut={()=>{
                    setShowColor5(true)
                  }} show={showColor5} />
                  <CRbutton ws="120px" tx="8am-4pm" TesterBut={()=>{
                    setShowColor6(true)
                  }} show={showColor6} />
                  <CRbutton ws="120px" tx="8am-4pm" TesterBut={()=>{
                    setShowColor7(true)
                  }} show={showColor7} />
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
          <ButtonsCont className={styles.buttons} border={'1px solid black'} color={"#FFFFFF"} bg={"#FFF"} txt={"24px"} width={""} p={"Upload to Calender"} routeTo="/" ></ButtonsCont>
        </div>
      </div>
    </div>
  )
}
