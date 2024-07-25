import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features22 from '../components/features22'
import Gallery7 from '../components/gallery7'
import Footer2 from '../components/footer2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quiet Vigilant Wallaby</title>
        <meta property="og:title" content="Quiet Vigilant Wallaby" />
      </Helmet>
      <Navbar4
        link1={
          <fragment>
            <span className="thq-body-small thq-link">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small thq-link">Categories</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small thq-link">Profile</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small thq-link">Login</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-body-small thq-link">
              <span>Sign Up</span>
              <br></br>
            </span>
          </fragment>
        }
      ></Navbar4>
      <Hero9
        action1={
          <fragment>
            <span className="home-text07 thq-body-small">Sign up</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text08 thq-body-small">
              Already have an Account? Log in
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text09 thq-body-large">
              blah blah blah too much yap Fizzy is the goat ong
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text10 thq-heading-1">Welcome to Abyss</span>
          </fragment>
        }
        rootClassName="hero9-root-class-name"
      ></Hero9>
      <Features22
        content1={
          <fragment>
            <span className="home-text11 thq-body-small">
              Blah blah blah too much yap fizzy is the goat ong
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">What we have to offer:</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Reliable Website</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Skibidi</span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Free Robux</span>
          </fragment>
        }
        feature4Title={
          <fragment>
            <span className="thq-heading-2">Feature #4</span>
          </fragment>
        }
        feature5Title={
          <fragment>
            <span className="thq-heading-2">Feature #5</span>
          </fragment>
        }
        feature6Title={
          <fragment>
            <span className="thq-heading-2">Feature #6</span>
          </fragment>
        }
        feature7Title={
          <fragment>
            <span className="thq-heading-2">Feature #7</span>
          </fragment>
        }
        feature8Title={
          <fragment>
            <span className="thq-heading-2">Feature #8</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text21 thq-body-small">
              Blah blah blah too much yap fizzy is the goat ong
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text22 thq-body-small">
              Blah blah blah too much yap fizzy is the goat ong
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text23 thq-body-small">
              Blah blah blah too much yap fizzy is the goat ong
            </span>
          </fragment>
        }
        feature4Description={
          <fragment>
            <span className="home-text24 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </fragment>
        }
        feature5Description={
          <fragment>
            <span className="home-text25 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </fragment>
        }
        feature6Description={
          <fragment>
            <span className="home-text26 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </fragment>
        }
        feature7Description={
          <fragment>
            <span className="home-text27 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </fragment>
        }
        feature8Description={
          <fragment>
            <span className="home-text28 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </fragment>
        }
      ></Features22>
      <Gallery7
        content1={
          <fragment>
            <span className="home-text29 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text30 thq-heading-2">Photo Gallery</span>
          </fragment>
        }
      ></Gallery7>
      <Footer2
        link1={
          <fragment>
            <span className="thq-body-small">Link 1</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">Link 2</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Link 3</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small">Link 4</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-body-small">Link 5</span>
          </fragment>
        }
        link6={
          <fragment>
            <span className="thq-body-small">Link 6</span>
          </fragment>
        }
        link7={
          <fragment>
            <span className="thq-body-small">Link 7</span>
          </fragment>
        }
        link8={
          <fragment>
            <span className="thq-body-small">Link 8</span>
          </fragment>
        }
        link9={
          <fragment>
            <span className="thq-body-small">Link 9</span>
          </fragment>
        }
        link10={
          <fragment>
            <span className="thq-body-small">Link 10</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Subscribe</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-small">
              Subscribe to our newsletter for the latest updates on new features
              and product releases.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="thq-body-small">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Service</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Settings</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="thq-body-small">Privacy Policy</span>
          </fragment>
        }
        column1Title={
          <fragment>
            <span className="thq-body-large">Column One</span>
          </fragment>
        }
        column2Title={
          <fragment>
            <span className="thq-body-large">Column Two</span>
          </fragment>
        }
      ></Footer2>
    </div>
  )
}

export default Home
