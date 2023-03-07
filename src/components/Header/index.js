import {Link, withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {MdWork} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="header-website-logo"
      />
      <ul className="nav-icons-container">
        <li>
          <Link to="/" className="nav-link">
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            <MdWork />
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            <FiLogOut />
          </Link>
        </li>
      </ul>
      <ul className="nav-options-container">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            <button type="button" className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
