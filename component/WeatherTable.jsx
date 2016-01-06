import React from 'react'
import EditableCell from './Cells.jsx'
import '../assets/table.css'

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
        <table className='table table-bordered weatherTable'>
          <thead>
            <tr>
              {headColumns.map( (name) => <th key={name}>{name}</th>)}
            </tr>
          </thead>
          <tbody>
            {firstColumnNames.map((label, row) =>
              <tr key={label}>
                <td className='labelColumn' key={label}>
                  {label}
                </td>
                {headColumns.slice(1,headColumns.length).map ( (x, col) =>
                  {
                    let key = `${label}_${x}`;
                    return (
                      <td className='dataColumn' key={key} onClick={this.clickHandler.bind(this, row, col)}>
                        <EditableCell editable={this.state.selected_row === row && this.state.select_column === col}/>
                      </td>
                    )
                  })}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      )
  }
}
