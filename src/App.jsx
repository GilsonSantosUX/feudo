import { useTheme } from '@nextui-org/react'


// Import Components
import Home from './pages/Home'
import Navigation from './components/Navigation'


function App() {
  const { theme } = useTheme();

  return (
    <>
    <Navigation/>
    <Home/>
    </>
  )
}

export default App