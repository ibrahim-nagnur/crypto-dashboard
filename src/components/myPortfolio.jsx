
export const MyPortfolio = () => {
    return (
        <div
            style={{ backgroundColor: "#f4f5f9" }}
            className=" col-lg-4 col-md-12 col-sm-12"
        >
            <div className="col-12 d-flex mt-3 mx-lg-3 mr-lg-3 p-0">
                <div className="flex-grow-1">
                    <h2 style={{ marginLeft: 0 }} className="greetingtext">
                        Orizon Crypto
                    </h2>
                    <p style={{ fontSize: 10 }} className="activitytext">
                        Increase Your Profit
                    </p>
                </div>
                <div className="">
                    <span>
                        <i
                            style={{
                                backgroundColor: "white",
                                padding: 10,
                                borderRadius: "50%"
                            }}
                            className="fas fa-search"
                        />
                    </span>
                    <span>
                        <i
                            style={{
                                backgroundColor: "white",
                                padding: 10,
                                borderRadius: "50%"
                            }}
                            className="far fa-bell"
                        />
                    </span>
                </div>
            </div>
            <div className="col-12 p-0">
                <div className="card2 p-3 mx-3">
                    <div className="d-flex justify-content-between pt-1">
                        <p className="smalltext">My Portfolio</p>
                        <span href="">
                            <i
                                style={{
                                    padding: 2,
                                    border: "1px solid #fff",
                                    borderRadius: 3
                                }}
                                className="fas fa-chart-bar"
                            />
                        </span>
                    </div>
                    <div className="d-flex justify-content-between pb-4">
                        <p style={{ color: "white" }} className="bigtext">
                            $34,020.00
                        </p>
                        <p className="smalltext">+ 2.5%</p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="d-flex justify-content-center">
                        <button className="btn1">
                            <span>
                                <i className="fas fa-download" />
                            </span>
                            Deposit
                        </button>
                        <button className="btn1">
                            <span>
                                <i className="fas fa-upload" />
                            </span>
                            Withdraw
                        </button>
                    </div>
                </div>
                <div className="col-12 p-0 d-flex justify-content-between mt-3">
                    <p className="activitytext">Favourites</p>
                    <p style={{ color: "#2c00d3" }} className="activitytext">
                        See All
                    </p>
                </div>
                <div className="col-12 p-0 d-flex">
                    <div className="col-6 btc p-3 mr-2">
                        <div className="media">
                            <span style={{ fontSize: 35 }}>
                                <i className="fab fa-bitcoin media-left" />
                            </span>
                            <div className="p-1 ml-2 media-body">
                                <p className="bigtext m-0">BTC</p>
                                <p className="smalltext m-0">Bitcoin</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/bitcoingraph.jpg" alt="" width="90%" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="bigtext">$20,788</p>
                            <p className="smalltext text-success">+ 0.25%</p>
                        </div>
                    </div>
                    <div className="col-6 btc p-3 mr-2">
                        <div className="media">
                            <span
                                style={{
                                    fontSize: 25,
                                    backgroundColor: "#ffc895",
                                    padding: "0 10px",
                                    borderRadius: "50%",
                                    marginTop: 5
                                }}
                            >
                                <i className="fab fa-ethereum media-left" />
                            </span>
                            <div className="p-1 ml-2 media-body">
                                <p className="bigtext m-0">ETH</p>
                                <p className="smalltext m-0">Ethereum</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/bitcoingraph2.jpg" alt="" width="90%" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="bigtext">$21,788</p>
                            <p className="smalltext text-success">+ 1.25%</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-0">
                    <p className="activitytext mt-4 d-block">Live Prices</p>
                </div>
                <div className="col-12 p-0">
                    <div className="d-flex mb-3">
                        <a href="">
                            <span
                                style={{
                                    color: "white",
                                    backgroundColor: "#9ed0a7",
                                    padding: "8px 14px",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fas fa-file-invoice-dollar" />
                            </span>
                        </a>
                        <span
                            style={{ marginLeft: 20 }}
                            className="activitytext mr-auto"
                        >
                            Binance
                        </span>
                        <img src="/img/bit.jpg" alt="" width="50px" />
                        <p className="bigtext">$18,788.00</p>
                    </div>
                    <div className="d-flex mb-3">
                        <a href="">
                            <span
                                style={{
                                    color: "white",
                                    backgroundColor: "#4551fa",
                                    padding: "8px 14px",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fas fa-file-invoice-dollar" />
                            </span>
                        </a>
                        <span
                            style={{ marginLeft: 20 }}
                            className="activitytext mr-auto"
                        >
                            LiteCoin
                        </span>
                        <img src="/img/bit 2.jpg" alt="" width="50px" />
                        <p className="bigtext">$11,788.00</p>
                    </div>
                    <div className="d-flex mb-3">
                        <a href="">
                            <span
                                style={{
                                    color: "white",
                                    backgroundColor: "#fcbe39",
                                    padding: "8px 14px",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fas fa-file-invoice-dollar" />
                            </span>
                        </a>
                        <span
                            style={{ marginLeft: 20 }}
                            className="activitytext mr-auto"
                        >
                            Ethereum
                        </span>
                        <img src="/img/bit 2 copy.jpg" alt="" width="50px" />
                        <p className="bigtext">$21,788.00</p>
                    </div>
                    <div className="d-flex mb-3">
                        <a href="">
                            <span
                                style={{
                                    color: "white",
                                    backgroundColor: "#000000",
                                    padding: "8px 12px",
                                    borderRadius: "50%"
                                }}
                            >
                                <i className="fab fa-bitcoin" />
                            </span>
                        </a>
                        <span
                            style={{ marginLeft: 20 }}
                            className="activitytext mr-auto"
                        >
                            Bitcoin
                        </span>
                        <img src="/img/bit 4copy.jpg" alt="" width="50px" />
                        <p className="bigtext">$20,788.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
