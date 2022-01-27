import { Card, Typography, Col, Row } from "antd";
import React, { useState } from "react";
import { useMoralis, useERC20Balances } from "react-moralis";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
  Input: {
    marginRight: "20px",
  }
};

function DoTheseTasks({ isServerInfo }) {
  var id;
  const { isAuthenticated, account, Moralis } = useMoralis();

  const serverUrl = "https://2y4fie29aopv.usemoralis.com:2053/server";
  const appId = "kbEuDXuHtw9wrigBfvdMiicU7AUuDqfgHNRQgJGL";
  Moralis.start({ serverUrl, appId });

  return (
    <div className="row" style={{ display: "flex", gap: "20px" }}>
      <div className="col-sm-6 d-flex justify-content-center form-card">
      <Card style={styles.card} title={<><Text className="card-title">RED CROSS TASKS</Text></>}>
  <>
    <Row className="center">
      <Col span={12} className="col-item">
      <div className="task-item bounty-card">
              <div className="task-headline">
                <Text style={styles.text}>
                  [OPEN] Write 5 high quality blog posts for our website
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 1400 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>👾 Task open till:
                </Text>
                <Text> 3/4/22</Text>
              </div>
            </div>
      </Col>
      <Col span={12} className="col-item">
      <div className="task-item bounty-card">
              <div className="task-headline">
                <Text style={styles.text}>
                  [OPEN] Write 5 high quality blog posts for our website
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 1400 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>👾 Task open till:
                </Text>
                <Text> 3/4/22</Text>
              </div>
            </div>
      </Col>
    </Row>
    <Row className="center">
    <Col span={12} className="col-item">
      <div className="task-item bounty-card">
              <div className="task-headline">
                <Text style={styles.text}>
                  [OPEN] Write 5 high quality blog posts for our website
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 1400 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>👾 Task open till:
                </Text>
                <Text> 3/4/22</Text>
              </div>
            </div>
      </Col>
      <Col span={12} className="col-item">
      <div className="task-item bounty-card">
              <div className="task-headline">
                <Text style={styles.text}>
                  [OPEN] Write 5 high quality blog posts for our website
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 1400 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>👾 Task open till:
                </Text>
                <Text> 3/4/22</Text>
              </div>
            </div>
      </Col>   
    </Row>
  </>
      </Card>
      </div>
    </div>
  );
}

export default DoTheseTasks;
