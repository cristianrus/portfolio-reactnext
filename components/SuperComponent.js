import React from 'react'
import BaseLayout from '../components/layouts/BaseLayouts'

class SuperComponent extends React.Component {
    constructor(props) {
        super(props)
        this.someVariable = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am blogs page</h1>
            </BaseLayout>)
    }
}

export default SuperComponent