
import {  useDispatch , useSelector } from "react-redux"
import { adToCard } from "../slices/cardSlice"



function CardScreen() {

  const {cardItem} = useSelector((state) =>state.card);

  console.log(cardItem)

  return (
    <div className="container mx-auto px-4 mt-10">

      <h1 className="text-4xl">
         My Card
      </h1>

     <div className="grid grid:md-cols-2 gap-10">

      <div>

      </div>
         
     </div>

    </div>
  )
}

export default CardScreen