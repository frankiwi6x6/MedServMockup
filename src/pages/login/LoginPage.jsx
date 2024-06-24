import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import Layout from '../../components/Layout/Layout';

const LoginPage = () => {
  return (
    <div>
      <Layout>


        <LoginComponent />
      </Layout>
    </div >
  );
};

export default LoginPage;