import { Nevbar } from "./components/my-components/Nevbar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCatagory } from "./redux/slices/catagorySlice"
import { AppRoutes } from "./routes/AppRoutes"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatagory())
  }, [])

  return (<>
    <Nevbar />
    <AppRoutes/>
  </>
  )
}

export default App
