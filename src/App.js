import React from "react";

import './App.css';
import CounterComponents from "./CounterComponents";
import Todo from "./Todo";
import { observer } from 'mobx-react-lite';



const App = observer(() => {
      return (
        <div>
        <Todo/>
        <CounterComponents />
        </div>
      )
})

export default App;
