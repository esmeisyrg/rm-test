import { Routes, Route } from 'react-router-dom'
import Details from '../pages/details'
import Error from '../pages/error'
import Listing from '../pages/listing'

export default function AppRouter() {
  return (
      <Routes> 
        <Route path="/" element={<Listing/>} />
        <Route path="/error" element={<Error />} />
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>

  )
}
