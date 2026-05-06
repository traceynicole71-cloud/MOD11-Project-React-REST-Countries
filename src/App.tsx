//ROOT of the compnonet tree


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext'

// TODO: CountriesProvider context wrapper — needs to be created when hook is converted to context
//Keoki files just just routing to them
import Home from './pages/Home'
import Detail from './pages/Detail'

//layout shell and the Navbar lives here renders child pages
import LayoutWrapper from './components/layout/LayoutWrapper'

function App() {


  return (

    /* BrowseRouter must be outermost enables React router hooks UseNavigate useParms Link anywhere in the tree  */
    <BrowserRouter>


      {/*Theme Provedier wraps everything dark and light mode work globally */}
      <ThemeProvider>

        {/* TODO: Replace this fragment with <CountriesProvider> once the hook is converted to a context provider */}

        <>

          { /*Routes React router switch statemnt for urls v6 auto picks the best match  */}

          <Routes>
            <Route path="/" element={<LayoutWrapper />}>
              <Route index element={<Home />} />
              <Route path="country/:countryCode" element={<Detail />} />
            </Route>
          </Routes>

        </>


      </ThemeProvider>




    </BrowserRouter>
  )
}

export default App
