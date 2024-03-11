
export const InfoBoxSection = () => {
    return (
        <div className="container-fluid px-3 mb-4">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-6">
                            <div style={{ marginBottom: 20 }} className="media">
                                <div className="media-left">
                                    <i
                                        style={{ backgroundColor: "#aaff95" }}
                                        className="fas fa-chart-line earningicon"
                                    />{" "}
                                </div>
                                <div className="text-secondary media-body">
                                    <p className="smalltext m-0">Total Earnings</p>
                                    <p className="bigtext m-0">$4,596.80</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-6 mt-lg-4">
                            <div className="media">
                                <div className="media-left">
                                    <i
                                        style={{ backgroundColor: "#f0f3de" }}
                                        className="fas fa-cubes earningicon"
                                    />{" "}
                                </div>
                                <div className="text-secondary media-body">
                                    <p className="smalltext m-0">Goal For month</p>
                                    <p className="bigtext m-0">$16,196.80</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                    <div className="card1 p-3">
                        <p className="cardtxtsmall">Name Card</p>
                        <div className="d-flex justify-content-between">
                            <p className="cardtxtbig">AR Shakir</p>
                            <p
                                style={{ fontSize: 17, fontWeight: 800 }}
                                className="cardtxtbig"
                            >
                                VISA
                            </p>
                        </div>
                        <p className="cardtxtbig mb-3 mt-2">
                            **** **** **** 1234
                        </p>
                        <div className="d-flex">
                            <div className="mr-1">
                                <p
                                    style={{
                                        fontWeight: 700,
                                        marginBottom: 3,
                                        fontSize: 7
                                    }}
                                    className="cardtxtsmall"
                                >
                                    EXP DATE
                                </p>
                                <p style={{ fontWeight: 700, marginBottom: 0 }}>
                                    12/25
                                </p>
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontWeight: 700,
                                        marginBottom: 3,
                                        fontSize: 7
                                    }}
                                    className="cardtxtsmall"
                                >
                                    CVV NUMBER
                                </p>
                                <p style={{ fontWeight: 700, marginBottom: 0 }}>
                                    123
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-6">
                            <div style={{ marginBottom: 20 }} className="media">
                                <div className="media-left">
                                    <i
                                        style={{ backgroundColor: "#ffc895" }}
                                        className="fas fa-chart-line earningicon"
                                    />{" "}
                                </div>
                                <div className="text-secondary media-body">
                                    <p className="smalltext m-0">Total Spendings</p>
                                    <p className="bigtext m-0">$4,596.80</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-6 mt-lg-4">
                            <div className="d-flex media">
                                <div className="media-left">
                                    <i
                                        style={{ backgroundColor: "#b9ecff" }}
                                        className="fas fa-store earningicon"
                                    />{" "}
                                </div>
                                <div className="text-secondary media-body">
                                    <p className="smalltext m-0">Spending Goal</p>
                                    <p className="bigtext m-0">$6,126.30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
