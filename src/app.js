import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/style.scss';
import configureStore from './store/configure';
import {addexpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import Routes from './PortfolioComponent/Routes/Router';
import Routes from './routers/Router';

let store = configureStore();

store.dispatch(addexpense({description: 'Water Bill', amount: 200, createdAt: 2017}))
store.dispatch(addexpense({description: 'Gas Bill', amount: 500, createdAt: 2018}))


let state = store.getState();
let visibleExpense = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpense);

let jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

let app = document.getElementById('app');

ReactDOM.render(jsx, app);