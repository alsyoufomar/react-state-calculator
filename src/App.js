import "./App.css"
import React from 'react'
import { useState } from 'react'

function App () {
  let operations = {
    '+': function (a, b) {
      return a + b
    },
    '-': function (a, b) {
      return a - b
    },
    '*': function (a, b) {
      return a * b
    },
    '÷': function (a, b) {
      return a / b
    }
  }

  let [firstNum, setFirst] = useState('0')
  let [secNum, setSec] = useState('0')
  let [operator, setOp] = useState('+')
  let [storedAns, setStore] = useState(0)

  const left = (e) => {
    setFirst((x) => {
      if (e.target.innerText === '.') {
        if (x.includes('.') === false) {
          return x + e.target.innerText
        }
      }
      if (x[0] === '0' && x[1] !== '.') {
        return e.target.innerText
      }
      if (e.target.innerText !== '.') {
        return x + e.target.innerText
      }
      return x
    })
  }

  const right = (e) => {
    setSec((x) => {
      if (e.target.innerText === '.') {
        if (x.includes('.') === false) {
          return x + e.target.innerText
        }
      }
      if (x[0] === '0' && x[1] !== '.') {
        return e.target.innerText
      }
      if (e.target.innerText !== '.') {
        return x + e.target.innerText
      }
      return x
    })
  }

  const sign = (e) => {
    setOp(e.target.innerText)
  }

  let ans = (operations[operator](Number(firstNum), Number(secNum)))

  function storeFun () {
    setStore(ans)
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{ firstNum }</p>
        <div className="numbers">
          <button onClick={ left }>1</button>
          <button onClick={ left }>2</button>
          <button onClick={ left }>3</button>
          <button onClick={ left }>4</button>
          <button onClick={ left }>5</button>
          <button onClick={ left }>6</button>
          <button onClick={ left }>7</button>
          <button onClick={ left }>8</button>
          <button onClick={ left }>9</button>
          <button onClick={ left }>0</button>
          <button onClick={ () => setFirst(firstNum = '0') }>Clear</button>
          <button onClick={ () => setFirst(storedAns) }>recall</button>
          <button onClick={ left }>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{ operator }</p>
        <div className="numbers">
          <button onClick={ sign }>+</button>
          <button onClick={ sign }>-</button>
          <button onClick={ sign }>*</button>
          <button onClick={ sign }>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{ secNum }</p>
        <div className="numbers">
          <button onClick={ right }>1</button>
          <button onClick={ right }>2</button>
          <button onClick={ right }>3</button>
          <button onClick={ right }>4</button>
          <button onClick={ right }>5</button>
          <button onClick={ right }>6</button>
          <button onClick={ right }>7</button>
          <button onClick={ right }>8</button>
          <button onClick={ right }>9</button>
          <button onClick={ right }>0</button>
          <button onClick={ () => setSec(secNum = '0') }>Clear</button>
          <button onClick={ () => setSec(storedAns) }>recall</button>
          <button onClick={ right }>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{ ans }</p>
        <button onClick={ storeFun }>store</button>
      </div>
    </div>
  )
}

export default App
