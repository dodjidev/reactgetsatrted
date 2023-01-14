import React from 'react'



class Timer extends React.Component {
    constructor(props) {
        console.log('(1) constructing...')
        super(props)
        this.state = {
            name: 'John',
            count: 0
        }
    }

    // componentDidCatch

    componentDidMount(params) {
        console.log('(3) component is ready!!!')

        setTimeout(() => {
            this.setState(oldValue => ({ name: 'Carl' }))
        }, 3000)

        let timer = setInterval(() => {
            this.setState(oldValue => {
                return { ...oldValue, count: oldValue.count + 1 }
            })
            console.log('count:', this.state.count)
        }, 2000)

        this.setState((oldValue) => ({ timer: timer }))
    }

    componentDidUpdate() {
        // console.log('(4) component is updated !!!')
    }

    componentWillUnmount() {
        console.log('(5) component is about to be removed !!!')

        console.log('Timmer:', this.count)

        clearInterval(this.state.timer)


    }

    render() {
        // console.log('(2) Rendering....')
        return (
            <div style={{ fontSize: '50px', marginTop: "40px", textAlign: 'center' }}>
                <strong>{this.state.count}</strong>
            </div>
        )
    }
}



export default Timer