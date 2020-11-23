import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CourseListContainer from './components/components/course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './components/components/course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default

import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducer';


import './components/style/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const configureStore = initialState => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};

const store = configureStore();
export default class Courses extends Component {
    render() {

        return(
            <Provider store={store}>
                <div>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path="/components/components/" component={CourseListContainer} />
                                <Route exact path="/components/components/course" component={AddOrEditCourseContainer} />
                                <Route path="/component/components/course/:id" component={AddOrEditCourseContainer} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>,
            document.getElementById('root')
        )
    };
};