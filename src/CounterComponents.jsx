import React from 'react';
import { observer } from 'mobx-react-lite';
import store from "./Store/Counter"

const CounterComponents = observer(() => {
  return (
    <div>
      <button onClick={()=>store.increment()}>+</button>
      {store.totalCount}
      <button onClick={()=>store.decrement()}>-</button>
    </div>
  );
})

export default CounterComponents;

