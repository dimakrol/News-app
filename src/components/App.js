import React, {Component} from 'react';
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Counter from './Counter';
import DateRange from './Filters/DateRange';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: null
        };
    }



    render() {
        const {articles} = this.props;
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id,
        }));
        return (
            <div>
                <Counter />
                <DateRange />
                <UserForm />
                <Select options = {options} value={this.state.selection} onChange={this.changeSelection}/>
                <ArticleList articles = {articles} defaultOpenId={articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App