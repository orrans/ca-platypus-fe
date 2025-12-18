import { Link, NavLink } from 'react-router-dom'


export function AppHeader() {


    return (
        <header className="app-header full">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <h1 className="logo-text">PlatypusBNB</h1>
                    </Link>
                </div>

                <div className="header-center">
                    <nav className="main-nav">
                        <NavLink to="/">Stays</NavLink>
                        <NavLink to="/experiences">Experiences</NavLink>
                        <NavLink to="/online">Online Experiences</NavLink>
                    </nav>
                    <div className="stay-search">
                        <div className="search-btn">Where</div>
                        <span className="separator">|</span>
                        <div className="search-btn">When</div>
                        <span className="separator">|</span>
                        <div className="search-btn">Who</div>

                        <button className="search-icon-btn">
                            🔍
                        </button>
                    </div>
                </div>

                <div className="user-actions">
                    <button className="host-btn">Become a Host</button>
                    <div className="user-avatar">👤</div>

                    <div className="user-menu-btn">
                        <span>☰</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
