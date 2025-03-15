import Header from './components/Header'
import Footer from './components/Footer'

import Classics from './components/cocktails/Classics'
import Modern from './components/cocktails/Modern'
import Alora from './components/cocktails/Alora'
import MasterList from './components/cocktails/MasterList'

function App() {
  return (
    <>
      <Header />
      <MasterList />
      <Classics />
      <Modern />
      <Alora />
      <Footer />
    </>
  )
}

export default App
