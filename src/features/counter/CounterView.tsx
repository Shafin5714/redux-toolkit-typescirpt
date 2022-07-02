import React from 'react'
// import {useSelector,useDispatch} from 'react-redux'
import {useAppSelector,useAppDispatch} from '../../app/hooks'
import {increment,decrement,reset,increaseByAmount} from './counterSlice'

export default function CounterView() {
    const dispatch = useAppDispatch()
    const {count} = useAppSelector((state)=>state.counter)
  return (
    <div>
        <h2>Count {count}</h2>
        <div style={{display:'flex',gap:10,justifyContent:'center'}}>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
   
        <div style={{marginTop:'10px'}}>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
        <div style={{marginTop:'10px'}}>
        <button onClick={()=>{dispatch(increaseByAmount(5))}}>Increase By 5</button>
        </div>
      
    </div>
  )
}
