import React from 'react'
import Panel from './Panel'

export default class Authenticator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      secret: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    console.log('ApiKey: ' + this.state.value + 'ApiSecret: ' + this.state.secret + 'state' + JSON.stringify(this.state))
    event.preventDefault()
  }
  secretChange (event) {
    this.setState({ secret: event.target.secret })
  }

  render () {
    return (
      <Panel>
        <form onSubmit={this.handleSubmit}>
          <label>
          API KEY:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
          API SECRET:
          <input type='text' value={this.state.secret} onChange={this.secretChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </Panel>
    )
  }
}
