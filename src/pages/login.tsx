import {useRouter} from 'next/router'
import {useCallback} from 'react'
import st from '../styles/login.module.scss'

export default function Login() {
  const router = useRouter()
  const onCancel = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    // <div>
    //   <h1>Login</h1>
    //   <button onClick={onCancel}>Cancel</button>
    //   <button onClick={() => router.push('/')}>Cancel</button>
    // </div>
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
