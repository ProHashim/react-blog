/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id="header">
        <div id="menu">
          <ul>
            <li className="active"><a href="#">Homepage</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div id="logo">
          <h1>
            <a href="#">Basic Old Style Blog Layout</a>
          </h1>
          <h2>Converted to ReactJS by Hashim, designed by <a href="">Templated</a></h2>
        </div>
        <hr />
      </div>
      <div id="page">
        <div id="page-bgtop">
          <div id="page-bgbtm">
            <div id="content">
              <div className="post">
                <p className="meta">
                  <span className="date">
                    Sunday, August 26, 2011</span> 7:27 AM Posted by <a href="#">Someone</a></p>
                <h2 className="title">
                  <a href="#">
                    Welcome back to Coffee
                  </a>
                </h2>
                <div className="entry">
                  <p>This is <strong>Black Coffee</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>, released for free under the <a href="http://templated.co/license">Creative Commons Attribution</a> license.  Photo used in this template is from <a href="http://www.pdphoto.org">PDPhoto.org</a>. You're free to use this template for anything as long as you credit us. Enjoy </p>
                  <p>Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum. In nulla tortor, elementum ipsum. Proin imperdiet est. Phasellus dapibus semper urna. Pellentesque ornare, orci in felis. </p>
                </div>
                <div><a href="" className="links">View Full Story</a></div>
              </div>
              <div className="post">
                <p className="meta">
                  <span className="date">
                    Sunday, August 26, 2011</span> 7:27 AM Posted by <a href="#">Someone</a></p>
                <h2 className="title">
                  <a href="#">
                    Lorem ipsum sed aliquam
                  </a>
                </h2>
                <div className="entry">
                  <p>Mauris vitae nisl nec metus placerat consectetuer. Donec ipsum. Proin imperdiet est. Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum. In nulla tortor, elementum vel, tempor at, varius non, purus. Mauris vitae nisl nec metus placerat consectetuer. Donec ipsum. Proin imperdiet est. Phasellus <a href="#">dapibus semper urna</a>. Pellentesque ornare, orci in consectetuer hendrerit, urna elit eleifend nunc, ut consectetuer nisl felis ac diam.</p>
                </div>
                <div><a href="" className="links">View Full Story</a></div>
              </div>
              <div class="post">
                <p class="meta"><span class="date">Sunday, August 26, 2011</span> 7:27 AM Posted by <a href="#">Someone</a></p>
                <h2 class="title"><a href="#">Lorem ipsum sed aliquam</a></h2>
                <div class="entry">
                  <p>Mauris vitae nisl nec metus placerat consectetuer. Donec ipsum. Proin imperdiet est. Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum. In nulla tortor, elementum vel, tempor at, varius non, purus. Mauris vitae nisl nec metus placerat consectetuer. Donec ipsum. Proin imperdiet est. Phasellus <a href="#">dapibus semper urna</a>. Pellentesque ornare, orci in consectetuer hendrerit, urna elit eleifend nunc, ut consectetuer nisl felis ac diam. </p>
                </div>
                <div><a href="#" class="links">View Full Story</a></div>
              </div>
            </div>
            <div id="sidebar">
              <ul><li>
                <h2>Lorem, ipsum.</h2>
                <div id="bg1">
                  <div id="bg2">
                    <p>Mauris vitae nisl nec metus placerat perdiet est. Phasellus dapibus semper urna. Pellentesque ornare, orci in consectetuer hendrerit, volutpat.</p>
                  </div>
                </div>
              </li>
                <li>
                  <h2>Lorem, cool.</h2>
                  <div id="bg1">
                    <div id="bg2">
                      <ul>
                        <li><a href="#">Nec metus sed donec</a></li>
                        <li><a href="#">Magna lacus bibendum mauris</a></li>
                        <li><a href="#">Velit semper nisi molestie</a></li>
                        <li><a href="#">Eget tempor eget nonummy</a></li>
                        <li><a href="#">Nec metus sed donec</a></li>
                        <li><a href="#">Velit semper nisi molestie</a></li>
                        <li><a href="#">Eget tempor eget nonummy</a></li>
                        <li><a href="#">Nec metus sed donec</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>Turpis nulla</h2>
                  <div id="bg1">
                    <div id="bg2">
                      <ul>
                        <li><a href="#">Nec metus sed donec</a></li>
                        <li><a href="#">Magna lacus bibendum mauris</a></li>
                        <li><a href="#">Velit semper nisi molestie</a></li>
                        <li><a href="#">Eget tempor eget nonummy</a></li>
                        <li><a href="#">Nec metus sed donec</a></li>
                        <li><a href="#">Nec metus sed donec</a></li>
                        <li><a href="#">Magna lacus bibendum mauris</a></li>
                        <li><a href="#">Velit semper nisi molestie</a></li>
                        <li><a href="#">Eget tempor eget nonummy</a></li>
                        <li><a href="#">Nec metus sed donec</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ clear: "both" }}>
              &nbsp;
            </div>
          </div>

        </div>
      </div>
      <div id="footer-bgcontent">
        <div id="footer">
          <p>&copy; Untitled. All rights reserved. Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
        </div>
        {/* <!-- end #footer --> */}
      </div>
    </>

  );
}

export default App;
