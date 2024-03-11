
export const SideNav = () => {
    return (
        <aside className="nav-side border">
            <ul
                style={{ listStyleType: "none", paddingLeft: 0 }}
                className="nav-side-links"
            >
                <li id="navSideToggle" className="nav-propic nav-side-item">
                    <img src="img/nav-propic.png" alt="" width="40px" />
                    <a
                        style={{ marginTop: "-32px", marginLeft: 170 }}
                        className="nav-link p-0 cross"
                    >
                        <span className="link-text">
                            <i className="fas fa-times" />
                        </span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link active" href="#">
                        <i className="fas fa-home" />
                        <span className="link-text">Dashboard</span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-user-check" />
                        <span className="link-text">Accounts</span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-cube" />{" "}
                        <span className="link-text">Goals</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed submenu"
                        id="submenu"
                        href="#submenu1"
                        data-toggle="collapse"
                        data-target="#submenu1"
                    >
                        <i className="fas fa-arrow-circle-down" />
                        <span className="link-text">
                            Reports &nbsp; <i className="fas fa-angle-down" />
                        </span>
                    </a>
                    <div
                        className="collapse submenu5"
                        id="submenu1"
                        aria-expanded="false"
                    >
                        <ul className="flex-column pl-4 nav">
                            <li className="nav-item">
                                <a className="nav-link py-0" href="#">
                                    <span className="link-text">Sub Menu 1</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link collapsed py-1"
                                    href="#submenu1sub1"
                                    data-toggle="collapse"
                                    data-target="#submenu1sub1"
                                >
                                    <span className="link-text">Sub Menu 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-cog" />{" "}
                        <span className="link-text">Funds</span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-star" />{" "}
                        <span className="link-text">Inbox</span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-window-restore" />
                        <span className="link-text">Restore</span>
                    </a>
                </li>
                <li className="nav-side-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-envelope-open-text" />{" "}
                        <span className="link-text">Inbox</span>
                    </a>
                </li>
                <li className="nav-side-button">
                    <a className="button" href="#">
                        <span className="icon material-icons">add</span>
                        <span
                            style={{ paddingLeft: "0 !important" }}
                            className="link-text"
                        >
                            Add new goal
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};
