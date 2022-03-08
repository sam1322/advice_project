import './App.css';
import React , {useState ,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState("")

  const fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((resp)=>{
        const {advice} = resp.data.slip;
        console.log(advice)
        setAdvice(advice)
      })
      .catch(console.log)
  }

  useEffect(fetchAdvice,[])

 return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={fetchAdvice}>
           {/* Give me advice */}
           <span>Give me advice</span>
          </button>
        </div>
      </div>
  )
}

export default App;
