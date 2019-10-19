import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import { NavBar } from '../components/atoms';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ width: '100vw', maxWidth: '800px', padding: '4px' }}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    );
  }
}
