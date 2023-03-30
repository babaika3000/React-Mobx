import {makeAutoObservable, observable} from "mobx";

class Counter {
  count = 0
  bigCount = 100
  constructor() {
    makeAutoObservable(this)
  }
  increment(){
    this.count++
    console.log('+++', this.count);
  }
  decrement(){
    this.count--
    console.log('---', this.count);
  }
  get totalCount(){
    return this.count * this.bigCount
  }
}

export default new Counter();
