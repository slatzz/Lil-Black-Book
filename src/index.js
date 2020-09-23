import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout.js'
import './styles.scss'


const renderMe = document.getElementById('root');
ReactDOM.render(<Layout API_KEY={window.API_KEY}/>, renderMe);