import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

// Dumb (functional component) - get data - return data
/*const Index = () => {
    return(
        <div> Welcome Page!</div>
    )
}*/

// Class component - more functionnality - lifecycle functions or methods
class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
             userData = response.data;
        } catch(err) {
            console.error(err)
        }
        return {initialData: [1, 2, 3, 4], userData};
    }

    constructor(props) {
        super(props)

        this.state = {
            title: 'I am index page'
        }

        //this.updateTitle = this.updateTitle.bind(this);
        // pass reference instead of arrow function onclick
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle = () => {
        this.setState({title: 'I am Updated Index Page'})
    }

    render() {
        const { title } = this.state;
        const { userData, initialData} = this.props;
        return (
            <BaseLayout>
                <h1> Welcome Index from Class Component!</h1>
                <h2>{title}</h2>
                <h2>{userData.title}</h2>
                <button onClick={this.updateTitle}>Change title</button>
            </BaseLayout>
        )
    }
}

export default Index

/*
<Header title={'I am a header component'}>
    <h2>I am header subtitle</h2>
</Header>*/
