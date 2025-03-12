import { BaseSyntheticEvent, cloneElement, SyntheticEvent, useState } from "react"
import { Footer } from "@pmndrs/branding"

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  const handleExit = (e: { key: any })=>{
    const keyType = e.key
    
    if(keyType !== 'Escape') return 
    setClicked(false)    
  }
  return (
    <div className="container" style={{ cursor: clicked ? "none" : "auto" }}>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`}>
        <div className="stack">
          <a href="#" onClick={() => setClicked(true)} onKeyDown={handleExit}>
            {"click to continue"}
          </a>
        </div>
      </div>
    </div>
  )
}
