import millify from "millify";
import React from "react";
import { Collapse, Row, Col, Typography, Avatar, Divider, Tooltip } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { LinkOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row className="exchangeTitles" style={{ marginBottom: "10px" }}>
        <Col className="exchangesTitle" span={6}>
          Exchanges
        </Col>
        <Col span={5}>24h Trade Volume</Col>
        <Col span={5}>Markets</Col>
        <Col span={5}>Change</Col>
        <Col span={3}>Url</Col>
      </Row>
      {/* <Divider type="horizontal" /> */}
      <Row className="exchangesList">
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse accordion bordered={false}>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  // <Tooltip
                  //   title={exchange.websiteUrl}
                  //   color="#011529"
                  //   placement="topRight"
                  // >
                  <Row className="exchangeRows" key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={5}>${millify(exchange.volume)}</Col>
                    <Col span={5}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={5}>{millify(exchange.marketShare)}%</Col>
                    <Col span={3}>
                      <a href={exchange.websiteUrl} target="_blank">
                        <LinkOutlined />
                      </a>
                    </Col>
                  </Row>
                  // </Tooltip>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
