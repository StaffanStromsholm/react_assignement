import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import './Aside.css';

const Aside = () => {
    let {path, url} = useRouteMatch();
    console.log(url);
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
    )
}

const Year2021 = () => {

    let {path, url} = useRouteMatch();

    return (<div>
        <h2>2021</h2>
        <ul>
            <li>
                <Link to={`${url}/jan`}>Jan</Link>
            </li>
            <li>
                <Link to={`${url}/feb`}>Feb</Link>
            </li>
            <li>
                <Link to={`${url}/mar`}>Mar</Link>
            </li>
            <li>
                <Link to={`${url}/apr`}>Apr</Link>
            </li>
            <li>
                <Link to={`${url}/may`}>May</Link>
            </li>
            <li>
                <Link to={`${url}/jun`}>Jun</Link>
            </li>
            <li>
                <Link to={`${url}/jul`}>Jul</Link>
            </li>
            <li>
                <Link to={`${url}/aug`}>Aug</Link>
            </li>
            <li>
                <Link to={`${url}/sep`}>Sep</Link>
            </li>
            <li>
                <Link to={`${url}/okt`}>Okt</Link>
            </li>
            <li>
                <Link to={`${url}/nov`}>Nov</Link>
            </li>
            <li>
                <Link to={`${url}/dec`}>Dec</Link>
            </li>
        </ul>

        <Switch>
            <Route path={`${path}/:month`}>
                <Month2021 />
            </Route>
        </Switch>
    </div>);
}

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
    )
}

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
    )
}

const Year2020 = () => {

    let { path, url } = useRouteMatch(); 

    return (<div>
        <h2>2020</h2>
        <ul>
            <li>
                <Link to={`${url}/jan`}>Jan</Link>
            </li>
            <li>
                <Link to={`${url}/feb`}>Feb</Link>
            </li>
            <li>
                <Link to={`${url}/mar`}>Mar</Link>
            </li>
            <li>
                <Link to={`${url}/apr`}>Apr</Link>
            </li>
            <li>
                <Link to={`${url}/may`}>May</Link>
            </li>
            <li>
                <Link to={`${url}/jun`}>Jun</Link>
            </li>
            <li>
                <Link to={`${url}/jul`}>Jul</Link>
            </li>
            <li>
                <Link to={`${url}/aug`}>Aug</Link>
            </li>
            <li>
                <Link to={`${url}/sep`}>Sep</Link>
            </li>
            <li>
                <Link to={`${url}/okt`}>Okt</Link>
            </li>
            <li>
                <Link to={`${url}/nov`}>Nov</Link>
            </li>
            <li>
                <Link to={`${url}/dec`}>Dec</Link>
            </li>
        </ul>

        <Switch>
            <Route path={`${path}/:month`}>
                <Month2020 />
            </Route>
        </Switch>
    </div>)
}

export default Aside;