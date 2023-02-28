import {useRouter} from 'next/router'
import {useCallback} from 'react'

export default function Login() {
  const router = useRouter()
  const onCancel = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={() => router.push('/')}>Cancel</button>
    </div>
  )
}
