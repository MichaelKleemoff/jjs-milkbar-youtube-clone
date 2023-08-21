function NavBar() {
    return (
        <>
            <header>
                <div className="container">
                    <p className="milkbar">MilkBar</p>
                    <img src="src/assets/play-button-icon-png-18908.png" alt="redplaybutton" className="logo" />
                    <nav>
                        <ul>
                            {/* Home and about href links will be added later. */}
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    )
}
export default NavBar; 