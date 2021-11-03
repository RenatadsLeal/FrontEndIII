import "./style.css"

const Header = () => {
    return (
        <header className="header">
                <div id="title"><h1>Croissant.</h1></div>
                <div id="nav">
                    <nav>
                        <ul>
                            <li><a href="#">Croissant?</a></li>
                            <li><a href="#">More croissant</a></li>
                        </ul>
                    </nav>
                </div>
        </header>

    )
}

export default Header