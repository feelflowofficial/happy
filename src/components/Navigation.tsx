import Link from 'next/link'
import st from '../styles/navigation.module.scss'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Main
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/signup">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
