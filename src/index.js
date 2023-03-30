import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App  />
);
//


// import * as React from "react";
// import { render } from "react-dom";
// import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react-lite";
// import "mobx-react-lite/batchingForReactDom";
// import {Counter} from "./Store/Counter";
//
// class Hello {
//   name = "";
//
//   constructor(name) {
//     makeAutoObservable(this);
//     this.name = name;
//   }
//
//   decrement(){
//     this.name = 'sadsad'
//   }
// }
//
// const HelloView = observer(({ hello }) => {
//   const dsad = () => hello.decrement()
//   return (<div>
//     <button onClick={dsad}>sdad</button>
//     Hello {hello.name}
//   </div>)
// });
//
// const hello = new Hello("world");
// const Counter = new Counter();
//
// render(<HelloView hello={hello} />, document.getElementById("root"));
