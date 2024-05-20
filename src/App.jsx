import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [value, setValue] = useState(0);

  const addNumber = () => {    
    if(!value.trim()) {
      alert('숫자 입력해주세요');
      return;
    }

    setResult(value + result);
    setValue('');
  }

  const minusNumber = () => {
    if(!value.trim()) {
      alert('숫자 입력해주세요');
      return;
    }

    setResult(value - result);
    setValue('');
    return 
  }

  const resetNumber = () => {
    setResult('');
  }

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
         만큼을 
         <button onClick={() => addNumber}>더할게요</button> 
         <button onClick={() => minusNumber}>뺄게요</button>
        <button onClick={() => resetNumber}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
