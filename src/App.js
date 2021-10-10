import "./App.css";

import { Route, Switch, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
// import Navbar from "./components/Navbar";
import {
  Navbar,
  Homepage,
  News,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Contact,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes bckg">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
            className="text-wheat"
          >
            Cryptoz <br />
            All rights reserved
          </Typography.Title>
          <Space className="text-wheat foot-link">
            <Link className="foot-link" to="/">
              Home
            </Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
