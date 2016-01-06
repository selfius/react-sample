import React from 'react'
import EditableCell from './Cells.jsx'

export default class WeatherTable extends React.Component {

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
