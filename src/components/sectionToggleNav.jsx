import { useEffect } from "react";

export const SectionToggleNav = () => {

    useEffect(() => {
        document.getElementById('activeTab').click();
      }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0 text-center">
                    <ul
                        style={{
                            border: "none",
                            flexWrap: "nowrap !important"
                        }}
                        className="nav flex-no-wrap nav-tabs text-center"
                    >
                        <li className="active summarytext">
                            <a id="activeTab" data-toggle="tab" href="#activity">
                                ACTIVITY SUMMARY
                            </a>
                        </li>
                        <li className="summarytext">
                            <a data-toggle="tab" href="#menu1">
                                SPENDING SUMMARY
                            </a>
                        </li>
                        <li className="summarytext">
                            <a data-toggle="tab" href="#menu2">
                                INCOME SUMMARY
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
