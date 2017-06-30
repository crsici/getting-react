import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';
import Products from './products';

ReactDOM.render(<FilterableProductTable products={Products} />, document.getElementById('root'));
registerServiceWorker();
