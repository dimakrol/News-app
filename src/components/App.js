import React, {Component} from 'react';
import ArticleList from './ArticleList'
import UserForm from './UserForm';

// import Counter from './Counter';
import DateRange from './Filters/DateRange';
import ArticleSelect from './Filters/ArticleSelect';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: null
        };
    }



    render() {
        // const {articles} = this.props;

        return (
            <div>
                {/*<Counter />*/}
                <ArticleSelect />
                <DateRange />
                <UserForm />
                <ArticleList />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App