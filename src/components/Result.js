
import {useState } from "react";
import KeyPad from "./KeyPad";

export default function Result() {
    const [data, setData] = useState('');
    const [history, setHistory] = useState('');
    const [operand, setOperand] = useState('');

    const childToParent = (value) => {
        setData(data + value);     
    }
    const operandData = (operandValue) => {
        if(operandValue === 'C') {
            setData('');
            setHistory('');
            setOperand('');
        } else if (operandValue === 'AC') {
            if(data) {
                setData('');
            } else if (operand) {
                setOperand('');
            } else {
                setHistory('');
            }
        } else if (operandValue === '=') {
            if(operand === '+') {
                setData(Number(history) + Number(data));
                setOperand('');
                setHistory('');
            } else if(operand === '-') {
                setData(Number(history) - Number(data));
                setOperand('');
                setHistory('');
            } else if( operand === '/') {
                setData(Number(history) / Number(data));
                setOperand('');
                setHistory('');
            } else if( operand === '%') {
                setData(Number(history) % Number(data));
                setOperand('');
                setHistory('');
            } else if( operand === 'X') {
                setData(Number(history) * Number(data));
                setOperand('');
                setHistory('');
            }
        } else {
        setOperand(operand + operandValue);
        setHistory(data);
        setData('');
        }
        
    
    }
    return (
        <div className="result">
            <p>{history}{operand}{data}</p>

            <KeyPad childToParent = {childToParent}
            operandData = {operandData}/>
        </div>
    )   
}