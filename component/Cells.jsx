import React from 'react'

export default class EditableCell extends React.Component {
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
