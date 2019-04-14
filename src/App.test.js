import React from 'react'
import App from './App'

describe('App component', function() {
  it('should renders Hello World', function() {
    const wrapper = shallow(<App />)
    const welcome = <h1>Hello World!</h1>
    expect(wrapper.contains(welcome)).to.equal(true)
    expect(wrapper.find('h1')).to.have.length(1)
  })
})
