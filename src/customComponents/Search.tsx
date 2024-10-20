import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import useData from '@/hooks/useData'
  
  import Loader from "./Loader"
  import GameCard from "./GameCard"
  import { useEffect, useState } from "react"
  import { Game } from "@/ulits/data"
import { Input } from "@/components/ui/input"
  
  const Search = () => {
  
    const [games, setGames] = useState<Game[]>([])
    const [query,setQuery] = useState<string>("")
    const { loading, handleSearch } = useData()
  
  
  
    const handleGetGames = async (query:string) => {
      const result = await handleSearch(query); // This will hold the resolved value\
      console.log(result); // Logs the newGames
      setGames(result)
    }

    useEffect(() => {
        handleGetGames(query)
    },[query])
    if (loading) {
      return <Loader />
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Live</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 ">
            <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className=" grid grid-cols-5 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-5  ">
            {games.map((game, index) => <GameCard game={game} key={index} />)}
          </div>
  
        </CardContent>
        <CardFooter>
  
        </CardFooter>
      </Card>
    )
  }
  
  export default Search