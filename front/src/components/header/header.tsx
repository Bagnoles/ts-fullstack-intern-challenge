import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";

type HeaderProps = {
  active: 'favorite' | 'main';
}

function Header({active}: HeaderProps) {
  
  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="nav_list">
          <li className="nav_item"><Link to={AppRoutes.Main} className={active === 'main' ? 'nav_link nav_link-active' : 'nav_link'}>Все котики</Link></li>
          <li className="nav_item"><Link to={AppRoutes.Favorite} className={active === 'favorite' ? 'nav_link nav_link-active' : 'nav_link'}>Любимые котики</Link></li>
        </ul>
      </nav>
    </header>
  )
}
  
export default Header;