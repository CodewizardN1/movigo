import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { useEffect, useState } from "react";
import SingleDatas from "./pages/SingleData";
import Loading from "./components/loading";
import { api } from "../api/api";
import axios from "axios";
import AllMovies from "./pages/allMovies";
import AllCartoons from "./pages/allCartoons";
import All from "./pages/all";
import Dashboard from "./pages/dashboard/dashboard";
import Donate from "./pages/donate";


function App() {
  const [loading, setLoading] = useState(true)
  const [homeMovies, setHomeMovies] = useState([])
  useEffect(() => {
    axios.get(`${api}api/get-movies`).then((res) => {
      setHomeMovies(res.data)
      setLoading(false)
    })
  }, []) 
 

  return (
    <>
    {loading ? <Loading /> : 
    <Box bg={'#151A20'}>
      <Routes>
        <Route path="/" element={<Home homeMovies={homeMovies} />}/>
        <Route path="/movie/:category/:id" element={<SingleDatas />} />
        <Route path="/allMovies" element={<AllMovies />} />
        <Route path="/allCartoons" element={<AllCartoons />} />
        <Route path="/all" element={<All />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<Box w={'100%'} h={'100vh'} fontSize={'20px'}>404 page not found</Box>} />
      </Routes>
   
      
      
    </Box>
    }
    </>
  )
}

export default App
