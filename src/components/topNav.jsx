
export const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img src="/img/propic1.png" alt="" width={40} />
                <span className="greetingtext">Good Morning Shakir!</span>
            </a>
            <button
                id="navSide2"
                className="navbar-toggler p-0 m-0 border-0"
                type="button"
                data-toggle="collapse"
                data-target="#naarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <a>
                    <i className="fas fa-bars" />
                </a>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarNavDropdown"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle chooseac"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Choose Accounts
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                    <li>
                        <a
                            style={{
                                backgroundColor: "#2c00d3",
                                color: "white",
                                marginTop: "5px !important",
                                padding: "10px 5px 0 5px",
                                borderRadius: 8
                            }}
                            href=""
                        >
                            <span className="material-icons-outlined mt-1">
                                question_answer
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
