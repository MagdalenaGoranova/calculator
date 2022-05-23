export default function KeyPad({childToParent, operandData}) {

    return (

        <div className="button">
            <button id="dark" name="C" onClick={(e) => operandData(e.target.name)}>C</button>
            <button id="dark" name="AC" onClick={(e) => operandData(e.target.name)}>AC</button>
            <button id="dark" name="%" onClick={(e) => operandData(e.target.name)}>%</button>
            <button id="green" name="/" onClick={(e) => operandData(e.target.name)}>/</button>

            <button name="7" onClick={(e) => childToParent(e.target.name)}>7</button>
            <button name="8" onClick={(e) => childToParent(e.target.name)}>8</button>
            <button name="9" onClick={(e) => childToParent(e.target.name)}>9</button>
            <button id="green" name="X" onClick={(e) => operandData(e.target.name)}>X</button>

            <button name="4" onClick={(e) => childToParent(e.target.name)}>4</button>
            <button name="5" onClick={(e) => childToParent(e.target.name)}>5</button>
            <button name="6" onClick={(e) => childToParent(e.target.name)}>6</button>
            <button id="green" name="-" onClick={(e) => operandData(e.target.name)}>-</button>

           
            <button name="1" onClick={(e) => childToParent(e.target.name)}>1</button>
            <button name="2" onClick={(e) => childToParent(e.target.name)}>2</button>
            <button name="3" onClick={(e) => childToParent(e.target.name)}>3</button>
            <button id="green" name="+" onClick={(e) => operandData(e.target.name)}>+</button>

            <button id="zero" name="0" onClick={(e) => childToParent(e.target.name)}>0</button>
            <button name="." onClick={(e) => childToParent(e.target.name)}>.</button>
            <button id="green" name="=" onClick={(e) => operandData(e.target.name)}>=</button>   
        </div>
    )
      
    
}