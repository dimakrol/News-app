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

        return (
            <div>
                <ArticleSelect />
                <DateRange />
                <UserForm />
                <ArticleList />
            </div>
        )
    }
}

export default App