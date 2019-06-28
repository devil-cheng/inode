import React from 'react';
import IndexHeader from './views/component/header'
import IndexFooter from './views/component/footer'
import RouterIndex from './router/index'
import { Layout } from 'antd'
import './assets/css/style.css'

function App() {
  return (
    <Layout className="main">
      <IndexHeader></IndexHeader>
      <div className="container">
        <RouterIndex/>
      </div>
      <IndexFooter></IndexFooter>
    </Layout>
  );
}

export default App;
