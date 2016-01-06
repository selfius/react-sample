const React = require('react')
const ReactDOM = require('react-dom')
require('bootstrap/dist/css/bootstrap.css')

class App extends React.Component {
  render(){
    return <WeatherTable/>
  }
}

class WeatherTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {selected_row: NaN, select_column: NaN}
  }

  clickHandler(row, column){
    this.setState({selected_row: row, select_column: column})
  }

  render(){
    const headColumns = ['','Год','Зима','Весна','Лето']
    const firstColumnNames = ['Направление ветра','Скорость ветра',
                              'Среднесуточная температура','Отсносительная влажность',
                              'Количество атмосферных осадков', 'Максимальное значение силы ветра',
                              'Максимальная температура','Минимальная темпертаура']
    return (
      <div>
        <table className='table table-striped table-bordered'>
        <tbody>
          <tr>
            {headColumns.map( (name) => <th key={name}>{name}</th>)}
          </tr>
            {firstColumnNames.map((label, row) =>
              <tr key={label}>
                <td key={label}>
                  {label}
                </td>
                {headColumns.slice(1,headColumns.length).map ( (x, col) =>
                  {
                    let key = `${label}_${x}`;
                    return (<EditableCell key={key}
                      editable={this.state.selected_row === row && this.state.select_column === col}
                      clickHandler={this.clickHandler.bind(this, row, col)}/>)
                  })}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      )
  }
}

class EditableCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  onChange(event){
    this.setState({value : event.target.value})
  }

  componentDidMount() {
    this.updateFocus(this.refs.inputInternalRef)
  }

  componentDidUpdate(){
    this.updateFocus(this.refs.inputInternalRef)
  }

  updateFocus(input) {
    if (input && this.props.editable && (document.activeElement !== this.refs.inputInternalRef)){
      input.setSelectionRange(9999,9999) //should be enough :)
      input.focus()
    }
  }

  render() {
    var value = this.state.value;
    return <td key={this.props.key} onClick={this.props.clickHandler}>

    {this.props.editable ?
      <input ref='inputInternalRef' type='text' onChange={this.onChange.bind(this)} value={value}/> :
      <span>{this.state.value}</span>}
    </td>

  }
}


ReactDOM.render(<App/>, document.getElementById("rootContainer"))
