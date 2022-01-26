import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import { data } from '../data/data';
import Home from './Home';
import Form from './Form';

const NavBar = () => {
  return (
    <>
      <Router>
        <div className='main-layout'>
          <nav className='nav'>
            <ul className='nav-ul'>
              {data.map((item) => (
                <li key={item.id} className='nav-li'>
                  <NavLink
                    to={`/${item.name}`}
                    activeClassName='nav-active'
                    exact
                  > {item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {data.map((route) => (
              <Route key={route.id} path={`/${route.name}`}>
                <Home aeroline={route.name} />
              </Route>
            ))}
          </Switch>
          <Form />
        </div>
      </Router>
    </>)
};

export default  NavBar;
