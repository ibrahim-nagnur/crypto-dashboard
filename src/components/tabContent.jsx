import { useEffect } from "react";

export const TabContent = () => {
    useEffect(() => {
        document.getElementById('historyTab').click();
    }, []);
    return (
        <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
                <div className="col-12">
                    <ul
                        style={{ border: "none" }}
                        className="nav nav-tabs"
                    >
                        <li className="active">
                            <a
                                className="mr-3 activitytext"
                                data-toggle="tab"
                                href="#history"
                                id="historyTab"
                            >
                                History
                            </a>
                        </li>
                        <li>
                            <a
                                className="activitytext "
                                data-toggle="tab"
                                href="#upcoming"
                            >
                                Upcoming
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div
                            id="history"
                            className="tab-pane fade in active"
                        >
                            <div className="row">
                                <div className="col-12 pt-3">
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        13, SEP 2020
                                    </p>
                                </div>
                                <div className="col-4 media">
                                    <a
                                        style={{ fontSize: 12, padding: 5 }}
                                        href=""
                                    >
                                        <i className="fas fa-exchange-alt  hide text-secondary media-left" />
                                    </a>
                                    <div className="media-body">
                                        <span
                                            className="activitytext"
                                            style={{
                                                fontWeight: 700,
                                                paddingRight: 0,
                                                color: "#111"
                                            }}
                                        >
                                            Ofice Suplies
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 9,
                                                color: "rgb(192, 177, 177)"
                                            }}
                                            className="activitytext timetxt"
                                        >
                                            13, SEP 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{ color: "red", fontSize: 5 }}
                                            className="fas fa-circle"
                                        />
                                        &nbsp; Supplies
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                padding: 5,
                                                backgroundColor: "#e5e5f8"
                                            }}
                                            className="fas fa-paperclip"
                                        />
                                        &nbsp; -$10,100.00
                                    </span>
                                </div>
                                <div className="col-12">
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        10, SEP 2020
                                    </p>
                                </div>
                                <div className="col-4 media">
                                    <a
                                        style={{ fontSize: 12, padding: 5 }}
                                        href=""
                                    >
                                        <i className="fas fa-exchange-alt hide text-secondary media-left" />
                                    </a>
                                    <div className="media-body">
                                        <span
                                            className="activitytext"
                                            style={{
                                                fontWeight: 700,
                                                paddingRight: 0,
                                                color: "#111"
                                            }}
                                        >
                                            Pak Transfer
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 9,
                                                color: "rgb(192, 177, 177)"
                                            }}
                                            className="activitytext timetxt"
                                        >
                                            13, SEP 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{ color: "blue", fontSize: 5 }}
                                            className="fas fa-circle"
                                        />
                                        &nbsp; Market
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                padding: 5,
                                                backgroundColor: "#e5e5f8"
                                            }}
                                            className="fas fa-paperclip"
                                        />
                                        &nbsp; -$50,300.00
                                    </span>
                                </div>
                                <div className="col-4 media">
                                    <a
                                        style={{ fontSize: 12, padding: 5 }}
                                        href=""
                                    >
                                        <i className="fas fa-exchange-alt hide text-secondary media-left" />
                                    </a>
                                    <div className="media-body">
                                        <span
                                            className="activitytext"
                                            style={{
                                                fontWeight: 700,
                                                paddingRight: 0,
                                                color: "#111"
                                            }}
                                        >
                                            Salry Transfer
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 9,
                                                color: "rgb(192, 177, 177)"
                                            }}
                                            className="activitytext timetxt"
                                        >
                                            13, SEP 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                color: "purple",
                                                fontSize: 5
                                            }}
                                            className="fas fa-circle"
                                        />
                                        &nbsp; Supplies
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                padding: 5,
                                                backgroundColor: "#e5e5f8"
                                            }}
                                            className="fas fa-paperclip"
                                        />
                                        &nbsp; -$10,100.00
                                    </span>
                                </div>
                                <div className="col-4 media">
                                    <a
                                        style={{ fontSize: 12, padding: 5 }}
                                        href=""
                                    >
                                        <i className="fas fa-exchange-alt hide text-secondary media-left" />
                                    </a>
                                    <div className="media-body">
                                        <span
                                            className="activitytext"
                                            style={{
                                                fontWeight: 700,
                                                paddingRight: 0,
                                                color: "#111"
                                            }}
                                        >
                                            Cash WTH
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 9,
                                                color: "rgb(192, 177, 177)"
                                            }}
                                            className="activitytext timetxt"
                                        >
                                            13, SEP 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                color: "green",
                                                fontSize: 5
                                            }}
                                            className="fas fa-circle"
                                        />
                                        &nbsp; Banking
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                padding: 5,
                                                backgroundColor: "#e5e5f8"
                                            }}
                                            className="fas fa-paperclip"
                                        />
                                        &nbsp; -$20,100.00
                                    </span>
                                </div>
                                <div className="col-12">
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        11, SEP 2020
                                    </p>
                                </div>
                                <div className="col-4 media">
                                    <a
                                        style={{ fontSize: 12, padding: 5 }}
                                        href=""
                                    >
                                        <i className="fas fa-exchange-alt hide text-secondary media-left" />
                                    </a>
                                    <div className="media-body">
                                        <span
                                            className="activitytext"
                                            style={{
                                                fontWeight: 700,
                                                paddingRight: 0,
                                                color: "#111"
                                            }}
                                        >
                                            Target
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 9,
                                                color: "rgb(192, 177, 177)"
                                            }}
                                            className="activitytext timetxt"
                                        >
                                            13, SEP 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                color: "orange",
                                                fontSize: 5
                                            }}
                                            className="fas fa-circle"
                                        />
                                        &nbsp; Salary
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span
                                        style={{ fontSize: 11 }}
                                        className="activitytext"
                                    >
                                        <i
                                            style={{
                                                padding: 5,
                                                backgroundColor: "#e5e5f8"
                                            }}
                                            className="fas fa-paperclip"
                                        />
                                        &nbsp; -$2,400.00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="upcoming" className="tab-pane fade">
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <p className="activitytext">
                                        Up coming spending will be shown here
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        11, SEP 2020
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="activitytext">
                                        Some Spending
                                    </p>
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        11, SEP 2020
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="activitytext">
                                        Some Spending
                                    </p>
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        11, SEP 2020
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="activitytext">
                                        Some Spending
                                    </p>
                                    <p
                                        style={{ fontSize: 10 }}
                                        className="activitytext text-secondary"
                                    >
                                        11, SEP 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
