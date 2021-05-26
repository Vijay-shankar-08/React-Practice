import React from 'react'

const UpdatedComponent = OriginalComponent => {          // also pass the another argument like (originalcomponent,increment count)
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        increment = () => {
            this.setState(PrevState => {
                return { count: PrevState.count + 1 }  // use increment count here instead of +1 
            })                                          // and passing diffrent count to do diffrent work in hsc
        }
        render() {
            return <OriginalComponent count={this.state.count} increment={this.increment} {...this.props} />
        }
    }
    return NewComponent
}

export default UpdatedComponent