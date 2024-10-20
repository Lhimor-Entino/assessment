
import { Game } from "@/ulits/data"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { Star } from "lucide-react"


interface Props{
    game : Game
}
const GameCard = (props: Props)  => {
    const {game} = props



  return (
    <div className="relative">
        <div className=" absolute right-2 top-1">
            {game.favorite === false ?    <Star className="w-5 h-5"  /> :     <StarFilledIcon className="w-5 h-5" />}

        </div>
   
        <img className="w-64 h-52" src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/17105257/game-ratings-featured.jpg" />
        <p className="absolute bottom-0 text-center p-3">{game.name}</p>
    </div>
  )
}

export default GameCard