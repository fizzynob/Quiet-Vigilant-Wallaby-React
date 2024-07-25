import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <fragment>
                <span className="hero9-text4 thq-heading-1">
                  Catchy headline for your hero section
                </span>
              </fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="hero9-text7 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </fragment>
            )}
          </p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="hero9-text6 thq-body-small">
                      Main action
                    </span>
                  </fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span>
                {props.action2 ?? (
                  <fragment>
                    <span className="hero9-text5 thq-body-small">
                      Secondary action
                    </span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  image1Alt: 'image',
  rootClassName: '',
  image1Src:
    'https://images.unsplash.com/photo-1721296375090-f8cb95f5aeac?ixid=M3w5MTMyMXwwfDF8YWxsfDk0fHx8fHx8Mnx8MTcyMTg3MjcxMnw&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero9
