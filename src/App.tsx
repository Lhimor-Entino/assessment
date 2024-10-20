

import './App.css'

import Banner from './customComponents/Banner'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Start from './customComponents/Start'
import New from './customComponents/New'
import Slots from './customComponents/Slots'
import Live from './customComponents/Live'
import Jackpots from './customComponents/Jackpots'
import Search from './customComponents/Search'

function App() {


  return (
    <>

      <div className=' w-full'>

        <div >
          <Banner />
        </div>
        <div className=' w-full'>
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="start">Start</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="slots">Slots</TabsTrigger>
              <TabsTrigger value="live">Live</TabsTrigger>
              <TabsTrigger value="jackpots">Jackpots</TabsTrigger>
            </TabsList>
            <TabsContent value="search">
            <Search />
            </TabsContent>
            <TabsContent value="start">
              <Start />
            </TabsContent>
            <TabsContent value="new">
            <New />
            </TabsContent>
            <TabsContent value="slots">
             <Slots />
            </TabsContent>
            <TabsContent value="live">
              <Live />
            </TabsContent>
            <TabsContent value="jackpots">
              <Jackpots />
            </TabsContent>
          </Tabs>
        </div>
        <div className=' w-full mt-7'>
          <div className='grid grid-flow-col grid-cols-5'>
            <div>
              <p>Sports</p>
            </div>
            <div >
              <p>Favorites</p>
            </div>
            <div>
              <p>Invite</p>
            </div>
            <div>
              <p>Casino Live</p>
            </div>
            <div>
              <p>Cashier</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
