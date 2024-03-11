
export const ActivityGraph = () => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12 p-0 px-sm-2 px-3">
            <div className="d-flex">
                <p className="text-muted smalltext">
                    Activity Graph
                </p>
                <p className="bigtext ml-auto">$186k</p>
            </div>
            <div className="mb-4">
                <img
                    className=""
                    src="/img/Y8gb9BnT_4x.jpg"
                    alt=""
                    width="100%"
                />
            </div>
            <div>
                <div className="d-flex mb-4">
                    <i className="far fa-calendar graphicon" />
                    <p
                        style={{ fontSize: 13, margin: "7px 12px" }}
                        className="smalltext text-muted"
                    >
                        Monthly Plan
                    </p>
                    <i
                        style={{ backgroundColor: "#fff" }}
                        className="fas fa-angle-right shadow-sm ml-auto graphicon"
                    />
                </div>
                <div className="d-flex mb-4">
                    <i className="fas fa-cog graphicon" />
                    <p
                        style={{ fontSize: 13, margin: "7px 12px" }}
                        className="smalltext text-muted"
                    >
                        Settings
                    </p>
                    <i
                        style={{ backgroundColor: "#fff" }}
                        className="fas fa-angle-right shadow-sm ml-auto graphicon"
                    />
                </div>
                <div className="d-flex mb-4">
                    <i className="fas fa-coins graphicon" />
                    <p
                        style={{ fontSize: 13, margin: "7px 12px" }}
                        className="smalltext text-muted"
                    >
                        Goal
                    </p>
                    <i
                        style={{ backgroundColor: "#fff" }}
                        className="fas fa-angle-right shadow-sm ml-auto graphicon"
                    />
                </div>
                <div className="d-flex mb-4">
                    <i className="fas fa-shopping-bag graphicon" />
                    <p
                        style={{ fontSize: 13, margin: "7px 12px" }}
                        className="smalltext text-muted"
                    >
                        Shopping
                    </p>
                    <i
                        style={{ backgroundColor: "#fff" }}
                        className="fas fa-angle-right shadow-sm ml-auto graphicon"
                    />
                </div>
            </div>
        </div>
    );
};
