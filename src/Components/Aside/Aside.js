import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import './Aside.css';

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

const Aside = () => {
    let {path, url} = useRouteMatch();

    return (
        <div className="Aside">
            <Router>
                <div>
                <h2>Search posts by year</h2>
                    <ul>
                        <li>
                            <Link to={`${url}/2021`}>2021</Link>
                        </li>
                        <li><Link to={`${url}/2020`}>2020</Link></li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route path={`${path}/2021`}>
                            <Year2021 />
                        </Route>
                        <Route path={`${path}/2020`}>
                            <Year2020 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

const Year2021 = () => {

    let {path, url} = useRouteMatch();

    const listOfMonths = months.map(month => <li key={month}><Link to={`${url}/${month}`}>{month}</Link></li>)

    return (<div>
        <h2>2021</h2>
        <ul>
        {listOfMonths}
        </ul>

        <hr></hr>

        <Switch>
            <Route path={`${path}/:month`}>
                <Month2021 />
            </Route>
        </Switch>
    </div>);
};

const Year2020 = () => {

    let { path, url } = useRouteMatch(); 

    const listOfMonths = months.map(month => <li key={month}><Link to={`${url}/${month}`}>{month}</Link></li>)

    return (<div>
        <h2>2020</h2>
        <ul>
        {listOfMonths}
        </ul>

        <hr></hr>

        <Switch>
            <Route path={`${path}/:month`}>
                <Month2020 />
            </Route>
        </Switch>
    </div>);
};

const Month2021 = () => {

    let { month } = useParams();

    return(
        <div>
            <h3>{month.toUpperCase()}</h3>
            <ul>
                <li><Link>Post 1</Link></li>
                <li><Link>Post 2</Link></li>
                <li><Link>Post 3</Link></li>
                <li><Link>Post 4</Link></li>
            </ul>
        </div>
    );
};

const Month2020 = () => {

    let { month } = useParams();

    return(
        <div>
            <h3>{month.toUpperCase()}</h3>
            <ul>
                <li><Link>Post 1</Link></li>
                <li><Link>Post 2</Link></li>
                <li><Link>Post 3</Link></li>
                <li><Link>Post 4</Link></li>
            </ul>
        </div>
    );
};

export default Aside;