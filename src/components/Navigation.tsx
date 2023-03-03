import Link from 'next/link'
import st from '../styles/navigation.module.scss'

export default function Navigation() {
  return (
    <div className={st.div}>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  )
}
