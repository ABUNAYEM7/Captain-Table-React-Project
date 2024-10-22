import { useState } from 'react'
import './App.css'
import Hero from './components/navbar/Hero'
import Navbar from './components/navbar/Navbar'
import StatickText from './components/navbar/StatickText'
import CardContainer from './components/parent/CardContainer'

function App() {
  const [cooking,setCooking] = useState([])
  const [prepared,setPrepared] =useState([])
  const [totalTime,setTotalTime] = useState(0)
  const [totalCalories,setTotalCalories] = useState(0)

  // calculate-time-calories
  function calculation (time,calories){
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories )
  }
  // cooking-button-clickHandler
  function cookingClickHandler (card){
    const isExist = cooking.find(item=>item.id === card.id)
    if(!isExist){
      setCooking([...cooking, card])
    }else{
      alert('Recipe Already Exist')
    }
  }

  // current-cooking-function
  function preparedClickHandler(id){
    const matchedId = cooking.find(element=> element.id === id)
    const updateRecipe = cooking.filter(element=> element.id !==id)
    setCooking(updateRecipe)
    setPrepared([...prepared,matchedId])
  }

  return (
    <div>
      {/* navbar */}
      <Navbar/>
      {/* hero-section */}
      <Hero/>
      {/* staticText-section */}
      <StatickText/>
        {/* main-container */}
      <CardContainer
       cookingClickHandler ={cookingClickHandler}
       preparedClickHandler = {preparedClickHandler}
       cookingCount ={cooking}
       prepared ={prepared}
       calculation ={calculation}
       totalCalories ={totalCalories}
       totalTime ={totalTime}
       />
    </div>
  )
}

export default App
