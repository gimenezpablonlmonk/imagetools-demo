import './App.css'
import Image from '/src/assets/image.jpg?w=200;400&format=avif;webp;jpg&as=picture&imagetools'
import { Picture } from './components/Picture'

function App() { 

  return (
    <Picture meta={Image} />
  )
}

export default App
