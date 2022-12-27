// import components
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Blogs from './components/blogs/Blogs'
import Futures from './components/futures/Futures'
import Logos from './components/logos/Logos'
import Navbar from './components/navbar/Navbar'
import Possibilities from './components/possibilities/Possibilities'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Logos />
      <About />
      <Futures />
      <Possibilities />
      <Blogs />
    </div>
  )
}
export default App
