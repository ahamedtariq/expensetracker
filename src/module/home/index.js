import { useEffect, useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./Transaction"



const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:30px 0 10px;
font-family:Montserrat;
`;

const HomeComponent = (props) =>{
    const[transactions,updatetransactions] = useState([]);
    const[expense,updateExpense] = useState(0);
    const[income,updateIncome] = useState(0);

    const addTransaction = (payload) =>{
        const transarray = [...transactions];
        transarray.push(payload);
        updatetransactions(transarray);
    }

    const calculateBalance =()=>{
        let exp = 0;
        let inc = 0;
        transactions.map((payload)=>{payload.type ==="EXPENSE"?(exp = exp + payload.amount):(inc = inc + payload.amount)})
      updateExpense(exp);
      updateIncome(inc);

    };

    useEffect(() => calculateBalance(),[transactions]);

    return(
        <Container>
          <Overview addTransaction={addTransaction} 
          expense={expense} 
          income={income}/>
            <Transaction transactions={transactions}/>
        </Container>
    )
}

export default HomeComponent;