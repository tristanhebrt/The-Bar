import Header from './components/Header'
import Classics from './components/cocktails/Classics'
import Modern from './components/cocktails/Modern'
import Alora from './components/cocktails/Alora'
import MasterList from './components/cocktails/MasterList'

function App() {
  return (
    <>
      <Header />
      <Alora />
      <Classics />
      <Modern />
      <MasterList />
    </>
  )
}

export default App
