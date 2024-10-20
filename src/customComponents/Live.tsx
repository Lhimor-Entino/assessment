import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,

  } from "@/components/ui/card"
  

  import useData from '@/hooks/useData'
  
  import Loader from "./Loader"
  import GameCard from "./GameCard"
  import { useEffect, useState } from "react"
  import { Game } from "@/ulits/data"
import { gameData } from "@/data"
import { FilterIcon } from "lucide-react"
  
  const Live = () => {
  
    const [live, setLiveGames] = useState<Game[]>([])
    const { loading, getLiveGames } = useData()
  
  
    const [open, setOpen] = useState<boolean>(false)
    const uniqueBrands = Array.from(new Set(gameData.map(game => game.brand)));
    const handleBrandClick = (brand: string) => {

        handleGetGames(brand)
        setOpen(false)
        // You can add more logic here, like navigating or updating state
    };
    const handleGetGames = async (filter:string) => {
      const result = await getLiveGames(filter); // This will hold the resolved value\
      console.log(result); // Logs the newGames
      setLiveGames(result)
    }
    useEffect(() => {
      handleGetGames("")
    }, [])
  
    if (loading) {
      return <Loader />
    }
    return (
      <Card>
        <CardHeader>
        <CardDescription>
                    <div className="flex bg-slate-600 text-white p-2" onClick={() => setOpen(!open)}>
                        <FilterIcon /> <p className="ml-4">Filter Games</p>
                    </div>

                    {open && <div className="grid gap-4 py-4">
                        {uniqueBrands.map((brand: string) => (
                            <button
                                key={brand}
                                onClick={() => handleBrandClick(brand)}
                                className="flex items-center p-4 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in-out"
                            >
                                <img
                                    src={"https://placeholderlogo.com/img/placeholder-logo-6.png"}
                                    alt={brand}
                                    className="w-50 h-10 mr-3" // Adjust size as needed
                                />
                                <span className="text-lg font-semibold">{brand}</span>
                            </button>
                        ))}
                    </div>}
                </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 ">
          <div className=" grid grid-cols-5 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-5  ">
            {live.map((game, index) => <GameCard game={game} key={index} />)}
          </div>
  
        </CardContent>
        <CardFooter>
  
        </CardFooter>
      </Card>
    )
  }
  
  export default Live