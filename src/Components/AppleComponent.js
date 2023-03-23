
import React,{useState} from 'react'
function AppleComponent() {
    const [numberOfApples, setNumberOfApples] =useState(1+3)
    function AppleDisplay(n){
        if (n===0 || n===1){
          return `Hemanth has ${numberOfApples} apple`;
        }
        else if (n>1){
          return `Hemanth has  ${numberOfApples} apples`;
        }
        else {
          return `Hemanth owes us ${Math.abs(numberOfApples)} apples `
        }
      }

      function IncreaseApple(){
        setNumberOfApples((currentValue) => currentValue + 1)

      }
      function DecreseApple(){
        setNumberOfApples((currentValue) => currentValue - 1)

      }
      function TooManyDisplay(){
        if (numberOfApples > 10){

            return <h1>Hemanth has two many apples</h1>
        }
        else{
            return ''
        }
      }
    return (
        <>
            <div>
                <h1>{AppleDisplay(numberOfApples)}</h1>
            </div>
            <button onClick={IncreaseApple} className='add-btm'>
                Increase
            </button>
            <button style={{display:numberOfApples<= 0 ? "None":''}} onClick={DecreseApple} className='decrease-btm'>
                Decrease
            </button>
            {/* {TooManyDisplay()} */}
            {numberOfApples > 10 ? <h1>Hemanth has two many apples</h1> : ''}

            
            
        
        </>
        
    )
}

export default AppleComponent