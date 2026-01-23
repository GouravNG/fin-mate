import axios from "axios"
import { useEffect, useState } from "react"

type TData = {
  id: number
  firstName: string
  lastName: string
}

function App() {
  const [data, setData] = useState<null | TData>(null)
  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get("https://api.example.com/user")
      const data = (await res.data) as TData
      setData(data)
    }
    fetchUser()
  }, [])
  return (
    <>
      <p>{`Hi! ${data?.firstName} ${data?.lastName}, your id is ${data?.id}`}</p>
    </>
  )
}

export default App
