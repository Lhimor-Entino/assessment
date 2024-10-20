

import { gameData } from "@/data";
import { Game } from "@/ulits/data";
import { useEffect, useState } from "react";


const useData = () => {
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("")
    const getAllGames = async () => {
        console.log(filter)
        setLoading(true)
        await new Promise((resolve) => {
            setTimeout(() => {
                let dt = null
                if (filter !== "") {
                    dt = gameData.filter((game) => game.brand === filter);
                    console.log("w2222")
                } else {
                    dt = gameData;
                    console.log("hdhd")
                }

                setGames(dt); // Set the games here
                setLoading(false)
                resolve(dt)

            }, 1000)
        })
    }

    const getNewGames = async (filter: string): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let newGames = null
                if (filter !== "") {
                    newGames = gameData.filter((game) => game.new === true && game.brand === filter);
                } else {
                    newGames = gameData.filter((game) => game.new === true);
                }


                setLoading(false); // Stop loading
                resolve(newGames); // Resolve with newGames
            }, 1000);
        });
    }
    const getSlotsGames = async (filter: string): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {

                let newGames = null
                if (filter !== "") {
                    newGames = gameData.filter((game) => game.slots === true && game.brand === filter);
                } else {
                    newGames = gameData.filter((game) => game.slots === true);
                }
                setLoading(false); // Stop loading
                resolve(newGames); // Resolve with newGames
            }, 1000);
        });
    }
    const getLiveGames = async (filter: string): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let newGames = null
                if (filter !== "") {
                    newGames = gameData.filter((game) => game.live === true && game.brand === filter);
                } else {
                    newGames = gameData.filter((game) => game.live === true);
                }

                setLoading(false); // Stop loading
                resolve(newGames); // Resolve with newGames
            }, 1000);
        });
    }
    const getJackpotsGames = async (): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newGames = gameData.filter((game) => game.jackpots === true);

                setLoading(false); // Stop loading
                resolve(newGames); // Resolve with newGames
            }, 1000);
        });
    }

    const handleSearch = async (name: string): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newGames = gameData.filter((game) => game.name === name);

                setLoading(false); // Stop loading
                resolve(newGames); // Resolve with newGames
            }, 1000);
        });
    }




    useEffect(() => {

        getAllGames()
    }, [filter])


    return {
        games,
        loading,
        getAllGames,
        getNewGames,
        getSlotsGames,
        getLiveGames,
        getJackpotsGames,
        handleSearch,
        setFilter
    };
}

export default useData;