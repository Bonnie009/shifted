import styled, {css} from 'styled-components';
import * as React from 'react';
import { useState, useEffect } from 'react';
import CalendarBlock from '../CalendarBlock';

const CalendarCont = styled.div`
    background-color:#D4E1DA;
    width:1000px;
    height:600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
//header Cont
const MonthCont = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    min-width:400px;
    min-height:80px;
    width: auto;
`

const MonthHeader = styled.div`
    font-size: 46px;
`

//Prev/Next Month Cont
const LeftArrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`
const RightArrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
//Weekday Cont
const WeekdaysCont = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width: 1000px;

`

const Weekdays = styled.div`
    font-size: 24px;
    width: 46px;
    text-align: center;
`
//Body Cont
const CalendarBody = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
`
//Days Cont
const DaysCont = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-left: 50px;
    justify-content: flex-start;

`

//DaysDiv
const DaysDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:80px;
    width: 14.2%;

        hover{
            border:1px solid grey;
        }

`

//Create Array of Weekdays

    const ArrayWeekdays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const ArrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const ArrayDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];




//month

//Get first day of month

const MyCalendar = ({
    
}) =>{
    return <CalendarCont>
        <MonthCont>
            <LeftArrow></LeftArrow>
            <MonthHeader>October</MonthHeader>
            <RightArrow></RightArrow>
        </MonthCont>
        <WeekdaysCont>
            <Weekdays>Mon</Weekdays>
            <Weekdays>Tue</Weekdays>
            <Weekdays>Wed</Weekdays>
            <Weekdays>Thu</Weekdays>
            <Weekdays>Fri</Weekdays>
            <Weekdays>Sat</Weekdays>
            <Weekdays>Sun</Weekdays>
        </WeekdaysCont>

        <DaysCont>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>
            <CalendarBlock/>

        </DaysCont>

    </CalendarCont>

}

export default MyCalendar;
