import React from 'react'
import KpLocations from 'kp-locations'
import logo from './logo.svg'
import './App.css'
const content = {
  heading: 'Select transfer location',
  paragraph: 'Choose a pharmacy to transfer prescriptions to. <br />All fields are required unless noted as optional.',
  labels: {
    cityZipInput: 'City or zipcode',
    distanceInput: 'Distance',
    searchSubmitButton: 'Search',
    cancelButton: 'Cancel',
    backButton: 'Back',
    nextButton: 'Next',
    useLocationClick: 'Use my location',
    selectInputRadius: [
      'Within 5 miles',
      'Within 10 miles',
      'Within 25 miles',
      'Within 50 miles',
      'Within 75 miles',
      'Within 100 miles'
    ]
  },
  mapLabels: {
    label1: 'Select a location above for more information',
    labelAnnouncementResultsPart1: 'location(s) within',
    labelAnnouncementResultsPart2: 'of',
    labelAppendToMapContainer: 'Choose a location for more information'
  },
  resultsLabels: {
    label_1: 'Showing',
    label_2: ''
  },
  hiddenContent: {
    skipToContent: 'Skip to map'
  }
}
const baseUrl = 'https://apims-hqa.kaiserpermanente.org:2050'
const queryParams = '?v:sources=kp-mg-facdir-keyword&v:project=kp-mg-facdir-project&render.function=json-feed-display-page&content-type=application%2Fjson&ESB-ENVLBL=HQAB&query=*&rop=SCA'
const testClientID = 'a21d17ab-763f-47f5-8071-7bafa76f7284'
const testApiKey = 'kprwdfdl24368807557038964736'

function App () {
  return (
    <div className='App'>
    <h1>Test App</h1>
    <KpLocations
      content={content}
      url={baseUrl}
      uri={'/kp/esb-envlbl/hqab/care/qa/pnl/watson-pnl-search-apic/v1/search/cgi-bin/query-meta'}
      environment={'qa'}
      envLbl={'hqab'}
      xClientId={testClientID}
      xApiKey={testApiKey}
      xAppName={'doctors-locations'}
      regionId={'NCA'}
      query='pharmacy'
    />
    </div>
  )
}

export default App
