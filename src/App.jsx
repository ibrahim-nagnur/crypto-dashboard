import { useEffect } from 'react';
import './App.css'
import { ActivityGraph } from './components/activityGraph';
import { InfoBoxSection } from './components/infoBoxSection';
import { MyPortfolio } from './components/myPortfolio';
import { SalarySection } from './components/salarySection';
import { SectionToggleNav } from './components/sectionToggleNav';
import { ShoppingSection } from './components/shoppingSection';
import { SideNav } from './components/sideNav';
import { TabContent } from './components/tabContent';
import { TopNav } from './components/topNav';

function App() {

  useEffect(() => {
    const toggleNav = () => {
      document.body.classList.toggle('nav-is-toggled');
      document.body.classList.toggle('nav-is-default');
    };

    const navSideBtn = document.getElementById('navSideToggle');
    const navSideBtn2 = document.getElementById('navSide2');

    navSideBtn.addEventListener('click', toggleNav);
    navSideBtn2.addEventListener('click', toggleNav);

    return () => {
      navSideBtn.removeEventListener('click', toggleNav);
      navSideBtn2.removeEventListener('click', toggleNav);
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="nav-is-default">
              <SideNav />
              <div className="main-content">
                <div className="container-fluid px-4">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 p-0">
                      <TopNav />
                      <InfoBoxSection />
                      <hr />
                      <SectionToggleNav />
                      <hr />
                      <div className="tab-content">
                        <div id="activity" className="tab-pane fade in active">
                          <div className="col-12">
                            <div className="row">
                              <ActivityGraph />
                              <TabContent />
                            </div>
                          </div>
                        </div>
                        <ShoppingSection />
                        <SalarySection />
                      </div>
                    </div>
                    <MyPortfolio />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
