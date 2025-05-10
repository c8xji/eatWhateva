import Navbar from "../components/Navbar"
import SuggestionBox from "../components/SuggestionBox"
import TagSection from "../components/TagSection"

const Home = () => {


  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <main className="px-5 mt-4">
        <SuggestionBox />
        <TagSection />
      </main>
    </div>
  )
}

export default Home