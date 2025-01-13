import './App.css'
import Child from './Child'
 
function Test() {
  return <h1>Hello world22</h1>
}

const element1 = <h2>Hello,world!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

const language = "JavaScript"

function App() {

  return (
    <>
      <Test/>
      <Child/>
      {/* JSX Practice  */}
      {language}
       
    </>
    
  )
}

export default App
