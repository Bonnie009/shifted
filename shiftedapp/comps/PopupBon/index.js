import styled from 'styled-components';

const PopupCont = styled.div`
    background-color:white;
    border:black solid 1px;
    min-width:362px;
    min-height:197px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    flex-direction:column;
`


const TopCont = styled.div`
    display: flex;
    flex-direction: row;
`
const TopLeftCont = styled.div`
    padding:10px;
`

const TopRightCont = styled.div`
    padding:10px;
`

const TopLeftText = styled.div`

`

const TopRightText = styled.div`

`

const Dropdown1 = styled.select`
    width:118px;
    height:21px;
    border:1px solid black;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
       }
`;

const Dropdown2 = styled.select`
width:118px;
height:21px;
border:1px solid black;

   option {
     color: black;
     background: white;
     font-weight: small;
     display: flex;
   }

`


const BottomCont = styled.div`

`
const ButtonPress = styled.button`
    background:#69C292;
    width:135px;
    height:45px;
    border-radius:12px;
    border:none;
`

const MyPopup = ({
    onClick
}) =>{
    return <PopupCont>
        <TopCont>
            <TopLeftCont>
                <TopLeftText>Available Times:</TopLeftText>
                <Dropdown1>
                    <option value="" hidden>
                    Select Time
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                </Dropdown1>
            </TopLeftCont>

            <TopRightCont>
                <TopRightText>Available Groups</TopRightText>
                <Dropdown2>
                    <option value="" hidden>
                        Select Group
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                </Dropdown2>
            </TopRightCont>
        </TopCont>

        <BottomCont>
            <ButtonPress onClick={() => alert("saved")}>Save</ButtonPress> 
        </BottomCont>

    </PopupCont>

}

export default MyPopup;
