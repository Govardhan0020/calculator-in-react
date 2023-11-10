import React, { useState } from 'react';
export const Calculator = () => {
  const [input, setinput] = useState('');
  const [result, setresult] = useState(0);
  const changehandler = (e) => {
    setinput(e.target.value);
  };

  return (
    <div>
      <h2>Calculator</h2>
      {/* <h4> Result is : {result} </h4> */}
      <div>
        <input
          type="text"
          placeholder="enter the value"
          name="input"
          value={input}
          onChange={changehandler}
        />
      </div>
      <div>
        <button onClick={() => setinput(input + '7')}>7 </button>
        <button onClick={() => setinput(input + '8')}>8 </button>
        <button onClick={() => setinput(input + '9')}>9 </button>
        <button onClick={() => setinput(input + '+')}>+ </button>
      </div>
      <div>
        <button onClick={() => setinput(input + '4')}>4 </button>
        <button onClick={() => setinput(input + '5')}>5</button>
        <button onClick={() => setinput(input + '6')}>6 </button>
        <button onClick={() => setinput(input + '-')}>- </button>
      </div>
      <div>
        <button onClick={() => setinput(input + '1')}>1 </button>
        <button onClick={() => setinput(input + '2')}>2 </button>
        <button onClick={() => setinput(input + '3')}>3 </button>
        <button onClick={() => setinput(input + '*')}>* </button>
      </div>
      <div>
        <button id="btn" onClick={() => setinput('')}>
          clr{' '}
        </button>
        <button onClick={() => setinput(input + '0')}>0 </button>
        <button onClick={() => setinput(input + '.')}> . </button>
        <button onClick={() => setinput(eval(input))}>=</button>
      </div>
      {/* {input} */}
    </div>
  );
};
