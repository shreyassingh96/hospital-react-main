// Import required modules
import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Define Home function component
function Home(props) {
  // Get history object from useHistory hook
  const history = useHistory();

  // Handle back button click
  const onBack = e => {
    e.preventDefault();
    history.push('/patient');
  }

  // Render Home component
  return (
    <div>
      <br />
      <section id="gallery">
        <div className="container-fluid">
          <div className="row">
            {/* First row of videos */}
            <div className="col-sm-3">
              <h4><b><center>Deal with Depression</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/eAK14VoY7C0" allowFullScreen />
              </div>
            </div>
            <div className="col-sm-3">
              <h4><b><center>Heart Health</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/5TTssryrrLg" allowFullScreen />
              </div>
            </div>
            <div className="col-sm-3">
              <h4><b><center>Power of Positivity</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/HwLK9dBQn0g" allowFullScreen />
              </div>
            </div>
            <div className="col-sm-3">
              <h4><b><center>Food Affecting Brain Health</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/xyQY8a-ng6g" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <section id="gallery">
        <div className="container-fluid">
          <div className="row">
            {/* Second row of videos */}
            <div className="col-sm-3">
              <h4><b><center>Relaxing Song</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/m2attzCq4CY" allowFullScreen />
              </div>
            </div>
            <div className="col-sm-3">
              <h4><b><center>Funny Cartoon</center></b></h4>
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Or-XHvRZFq0" allowFullScreen />
              </div>
            </div>
            <div class="col-sm-3"><h4><b><center>How digestive system works</center></b></h4>
              <div class="ratio ratio-16x9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VwrsL-lCZYo" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm-3"><h4><b><center>Heart 101</center></b></h4>
              <div class="ratio ratio-16x9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GMBSU-2GK3E" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='buttonBack'>
        <Button onClick={onBack} variant="primary" type="submit">
          Back
        </Button>

      </div>
    </div>
  );

}

export default withRouter(Home);