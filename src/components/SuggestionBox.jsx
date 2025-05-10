import {useState} from 'react'
import foodList from "../data/foodList"


const SuggestionBox = () => {
  const [suggestion, setSuggestion] = useState(foodList[Math.floor(Math.random() * foodList.length)].name)

  const handleNext = () => {
    const randomItem = foodList[Math.floor(Math.random() * foodList.length)].name
    setSuggestion(randomItem)
  }


  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <h1 className="text-4xl text-center font-bold my-4">要吃{suggestion}嗎？</h1>
      <div className="flex gap-2 w-full justify-between">
        <button  onClick={handleNext} className=" text-2xl px-4 py-2 bg-gray-300 rounded-xl grow">換一個</button>
        <button className=" text-2xl px-4 py-2 bg-yellow-400 rounded-xl grow">找附近店家</button>
      </div>
    </div>
  )
}

export default SuggestionBox