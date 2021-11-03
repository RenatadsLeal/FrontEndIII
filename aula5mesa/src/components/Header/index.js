import "./style.css"

const Header = () => {
    return (
        <header id="header">
                <div id="title"><h1>Croissant.</h1></div>
                <div id="nav">
                    <nav>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">Croissant? </a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">More croissant </a></li>
                        </ul>
                    </nav>
                </div>
        </header>
    )
}

export default Header