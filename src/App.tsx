import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import ListingGrid from "./components/Listings/ListingGrid/ListingGrid"
import { listings } from "./components/Listings/listings.data"

const App = () => {
  return <>
  
    <Header />
    <Hero />
    <div className="mx-auto max-w-300 px-4 py-8">
    <ListingGrid listings={listings} />
   </div>
  
  </>
}
export default App