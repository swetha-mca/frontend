import  React,{ useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('#fffffff')
  const bgclr=(event)=>
  {
    setColour(event.target.value);
  }

  return (
    <div>
   {/* <div className="size" style={{backgroundColor:colour}}/> */}
<input type="color" className="size1" value={colour} onChange={bgclr}/>
<div className="size" style={{backgroundColor:colour}}/>

   </div>
  )
}
export default App;
