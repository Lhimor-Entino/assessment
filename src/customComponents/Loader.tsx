import { Loader2 } from "lucide-react"


const Loader = () => {
  return (
    <div className="flex w-fit p-10 m-auto items-center">
    <Loader2 className=" animate-spin w-5 h-5 mr-3"/>
    <p>Loading Please wait ...</p>
    </div>
  )
}

export default Loader