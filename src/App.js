import React, {Fragment} from "react";
import Provider from "./provider";
import Context from "./context";
import context from "./context";

const Agents = () => {
  return(
    <AgentOne />
  )
}


const AgentOne = () => {
  return(
    <AgentTwo />
  )
}


const AgentTwo = () => {
  return(
    <AgentBond />
  )
}

//const check = useContext(context)

const AgentBond = () => {
  return(
     <Context.Consumer>
       {
         (context) => (
           <Fragment>
             <h2>Agent INfo</h2>
             <p>Mission Name: {context.data.mname}</p>
             <h2>Mission Accepted: {context.data.accept}</h2>
             <button onClick={context.isMissionAccepted}>Chhose To accept</button>
           </Fragment>
         )
       }
     </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;

