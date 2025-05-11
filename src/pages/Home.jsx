import {useState} from "react"
import Navbar from "../components/Navbar"
import SuggestionBox from "../components/SuggestionBox"
import TagSection from "../components/TagSection"

const Home = () => {

  const [wantTags, setWantTags] = useState([])
  const [avoidTags, setAvoidTags] = useState([])

  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <main className="px-5 mt-4">
        <SuggestionBox 
        wantTags={wantTags}
        avoidTags={avoidTags}
        />
        <TagSection 
        wantTags={wantTags}
        setWantTags={setWantTags}
        avoidTags={avoidTags}
        setAvoidTags={setAvoidTags}/>
      </main>
    </div>
  )
}

export default Home