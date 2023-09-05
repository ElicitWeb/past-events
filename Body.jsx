import "@fontsource/readex-pro";
import React from "react";
import './body.css';
import img from './pfp.jpg';
// import './another.css';

const Body = () => {
  return(
    <div className="body-div">
        <div className="mob1">
          <div className="three-ti-one-ev">
            <div className="ti1"></div>
            <div className="two-ti-one-ev">
              <div className="two-ti">
                <div className="ti2"></div>
                <div className="ti3"> </div>
              </div>
              <div className="ev5" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve5">event 5</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
            </div>
          </div>
          <div className="four-ti-two-ev">
            <div className="two-ti-ev1">
              <div className="two-ti1">
                <div className="ti4"> </div>
                <div className="ti5"> </div>
              </div>
              <div className="ev6" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve6">event 6</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
            </div>
            <div className="two-ti-ev2">
              <div className="ev7" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve7">event 7</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
              <div className="two-ti2">
                <div className="ti6"> </div>
                <div className="ti7"> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mob2">
          <div className="ev-ti">
            <div className="ev1" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve1">event 1</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
            <div className="ti8"> </div>
          </div>
          <div className="three-ev-two-ti">
            <div className="ev-ev">
              <div className="ev2" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve2">event 2</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
              <div className="ev3" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve3">event 3</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
            </div>
            <div className="two-ti-ev">  
              <div className="ti9"> </div>
              <div className="ev4" style={{backgroundImage: `url(${img})`}}><div className="text" id="eve4">event 4</div><div className="mat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis.</div></div>
              <div className="ti10"> </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Body
