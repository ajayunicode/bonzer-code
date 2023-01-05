import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [counter, setcounter] = useState(0);

    function handleIncrement(){
        setcounter(counter + 1)
    }
    function handleDecrement(){
        setcounter(counter - 1)
    }

    function handleReset(){
        setcounter(0)
    }

    function Button(props){
        return(
            <button className={props.className} onClick={props.onClick}>{props.children}</button>
        )
    }

  return (
    <div className=''>
        <h3>{counter}</h3>
        <Button className={'btn btn-primary'} onClick={handleIncrement} >+</Button>
        <Button className={'btn btn-info'} onClick={handleDecrement} >-</Button>
        <Button className={'btn btn-danger'} onClick={handleReset} >Reset</Button>
    </div>
  )
}

export default Counter