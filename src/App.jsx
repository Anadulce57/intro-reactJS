import { ComponenteParafrafo } from "./Components/ComponenteParagrafo"
import { ComponeteBotao } from "./Components/ComponeteBotao"

function App (){
  return(
    <div>
      <h1 className="text-5xl my-2 font-bold">Hello World</h1>
      <ComponenteParafrafo/>
      <ComponeteBotao/>
    </div>
  )
}

export default App