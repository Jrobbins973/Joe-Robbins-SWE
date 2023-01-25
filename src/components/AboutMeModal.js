import React from 'react'

import { useHistory } from 'react-router-dom'



function AboutMeModal(props) {
  const {setShowModal} = props
  const history = useHistory()


  return (
      <div className='modal' onClick={() => setShowModal(false)}>
          <div className='modal-content' onClick={e => e.stopPropagation()}>
              <div className='modal-header'>
              <img className='modal-image' src = 'https://i.imgur.com/8P3krwf.jpg'/>
                  <h2 className='modal-title'>About Me</h2>
              </div>
              <div className='modal-body'>
                  {/* <p>Bio</p> */}
              <strong>My Background: </strong>I spent the last 5 years working in the fields of exercise physiology/health & wellness, spinal cord injury recovery, and clinical research. After doing a Masters thesis in a biomechanics lab utilizing advanced motion capture technology, and working in a clinical research laboratory, I developed a deep appreciation for the software that goes into human performance and accessibility alike. I plan on taking my background in exercise and research and merging it with software engineering; to create applications and software that at their core, help people.

              <p><strong>My Tech Stack:</strong> JavaScript, React, Ruby on Rails, CSS</p>
              <p><strong>My Dog:</strong> Franklin is a 1.5 year old long haired Corgi; short legs, BIG personality.</p>
              </div>
              <div className='modal-footer'>
                  <button onClick={() => setShowModal(false)}>Close</button>
              </div>
          </div>
      </div>
  )
}

export default AboutMeModal