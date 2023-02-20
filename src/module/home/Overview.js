import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:30px 0 10px;
font-family:Montserrat;
width:75%;
`;

const BalanceBox = styled.div`
font-size:18px;
width:100%;
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const AddButton = styled.button`
color:white;
background-color: black;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
font-size: 15px;
font-weight: bold;

`;

const AddTransactionContainer = styled.div`
display: flex;
flex-direction:column;
border: 1px solid #e6e8e9;
width:100%;
gap:10px;
padding:15px 20px;
margin:20px;
& input{
    outline:none;
    padding:10px 20px;
    border:1px solid #e6e8e9;
    border-radius:4px;
}
`;
const RadioBox = styled.div`
display :flex;
flex-direction: row;
align-items: center;
& input{
    width:unset;
    margin: 0 10px;
}

`;

const ExpenseContainer = styled.div`
display: flex;
flex-direction: row;
gap:12px;
margin:20px;
width:75%;
`;

 const ExpenseBox = styled.div`
 display: flex;
 flex-direction: column;
border-radius: 4px;
border:1px solid #e6e8e9;
padding: 15px 20px;
width:135px;
font-size: 14px;
& span{
    font-weight: bold;
    font-size: 20px;
    color:${props=>props.isIncome? "green" : "red"};
}
`;
const AddTransactionView = (props) => { 
const[amount,setAmount] = useState();
    const[desc,setDesc] = useState();
    const[type,settype] = useState("EXPENSE");
    const addTransaction=()=>{
        props.addTransaction({amount:Number(amount),desc,type,id:Date.now()})
        console.log({amount,desc,type});
        props.toggleAdd();
    }
    return(
      <AddTransactionContainer>
        <input placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <RadioBox>
         <input type ="radio" id= "expense" 
               value="EXPENSE" 
               name="type" 
               checked={type==="EXPENSE"}
               onChange = {(e)=>settype(e.target.value)}/>
         <label htmlFor="expense">Expense</label>
         <input type ="radio" id ="income"
                value="INCOME" 
                name = "type" 
                checked={type==="INCOME"}  
                onChange = {(e)=>settype(e.target.value)}/>
         <label htmlFor = "income">Income</label>
        </RadioBox>
        <AddButton onClick={addTransaction}>Add Transcation</AddButton>
      </AddTransactionContainer>
);
}

const Overview = (props) =>{
    const[isAddVisible , toggleAdd] = useState(true);
    return(
        <Container>
            <BalanceBox>Balance: ₹{props.income - props.expense}  
                <AddButton onClick={()=>toggleAdd(!isAddVisible)}>{isAddVisible? "CANCEL" : "ADD"}</AddButton>
            </BalanceBox>
            {isAddVisible && <AddTransactionView toggleAdd={toggleAdd} addTransaction={props.addTransaction}/>}

            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense<span>₹{props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income<span>₹{props.income}</span>
                </ExpenseBox>
            </ExpenseContainer>
        </Container>
    )
}

export default Overview;