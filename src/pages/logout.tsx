import {useRouter} from 'next/router'

export default function Logout() {
  const router = useRouter()
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={() => router.back()}>Cancel</button>
    </div>
  )
}
