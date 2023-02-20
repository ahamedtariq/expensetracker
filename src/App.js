import styled from "styled-components";
import HomeComponent from "./module/home";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:30px 0 10px;
font-family:Montserrat;
`;
const Heading = styled.span`
color:black;
font-size: 25px;
font-weight: bold;
`;


function App() {
 return(
 <Container>
    <Heading>Expense Tracker</Heading>
    <HomeComponent/>
 </Container>
 )
}

export default App;
