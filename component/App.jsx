import React from 'react'
import ReactDOM from 'react-dom'
import WeatherTable from './WeatherTable.jsx'

require('bootstrap/dist/css/bootstrap.css')

class App extends React.Component {
  render(){
    return <WeatherTable/>
  }
}

ReactDOM.render(<App/>, document.getElementById("rootContainer"))
