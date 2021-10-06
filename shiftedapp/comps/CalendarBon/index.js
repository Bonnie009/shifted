import styled, {css} from 'styled-components';
import * as React from 'react';
import { useState, useEffect } from 'react';

const CalendarCont = styled.div`
    background-color:#D4E1DA;
    width:972px;
    height:486px;
    
`
//header Cont
const MonthCont = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    min-width:200px;
    min-height:80px;
    flex-wrap:wrap;
`

const MonthHeader = styled.div`

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
    justify-content:space-between;
    align-items:center;
    padding-left:50px;
    padding-right:50px;
`

const Weekdays = styled.div`

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
            <Weekdays>Thur</Weekdays>
            <Weekdays>Fri</Weekdays>
            <Weekdays>Sat</Weekdays>
            <Weekdays>Sun</Weekdays>
        </WeekdaysCont>

        <DaysCont>
            <DaysDiv>1</DaysDiv>
            <DaysDiv>2</DaysDiv>
            <DaysDiv>3</DaysDiv>
            <DaysDiv>4</DaysDiv>
            <DaysDiv>5</DaysDiv>
            <DaysDiv>6</DaysDiv>
            <DaysDiv>7</DaysDiv>
            <DaysDiv>8</DaysDiv>
            <DaysDiv>9</DaysDiv>
            <DaysDiv>10</DaysDiv>
            <DaysDiv>11</DaysDiv>
            <DaysDiv>12</DaysDiv>
            <DaysDiv>13</DaysDiv>
            <DaysDiv>14</DaysDiv>
            <DaysDiv>15</DaysDiv>
            <DaysDiv>16</DaysDiv>
            <DaysDiv>17</DaysDiv>
            <DaysDiv>18</DaysDiv>
            <DaysDiv>19</DaysDiv>
            <DaysDiv>20</DaysDiv>
            <DaysDiv>21</DaysDiv>
            <DaysDiv>22</DaysDiv>
            <DaysDiv>23</DaysDiv>
            <DaysDiv>24</DaysDiv>
            <DaysDiv>25</DaysDiv>
            <DaysDiv>26</DaysDiv>
            <DaysDiv>27</DaysDiv>
            <DaysDiv>28</DaysDiv>
            <DaysDiv>29</DaysDiv>
            <DaysDiv>30</DaysDiv>
            <DaysDiv>31</DaysDiv>
        </DaysCont>

    </CalendarCont>

}

export default MyCalendar;
