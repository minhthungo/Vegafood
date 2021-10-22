import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';

import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="mainLayout">
        <AntHeader>
          <Header />
        </AntHeader>
        <AntContent>
          <Route path="/" exact={true} component={HomeView} />
          <Route path="/menus/:id" component={MenuView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
        </AntContent>
        <AntFooter>
          <Footer />
        </AntFooter>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
