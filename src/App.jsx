import "./App.css";
import Lottery from "./Lottery";
// import TicketNum from "./TicketNum";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

// function App() {
//   let winCondition = (ticket) => {
//     return ticket.every((num) => num === ticket[0]);
//   };

// function App() {
//   let winCondition = (ticket) => {
//     return ticket[0] === 0;
//   };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
