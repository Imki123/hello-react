import React, {useState, useEffect} from 'react'
import './App.css';
import MyLayout from './component/MyLayout'
import Counter from './component/Counter'
import Loading from './component/Loading'

function App() {
  const [loading, setLoading] = useState('loading')
  useEffect(()=>{
    setTimeout(function(){
      setLoading('loading-hide')
    },500)
  })
  return (
    <>
      <Loading style={loading}/>
      <MyLayout name="기영">
        <Counter/>
      </MyLayout>
    </>
  );
}

export default App;
