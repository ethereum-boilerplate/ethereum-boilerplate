import { Card, Typography } from "antd";
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

function CreateNewTasks({ isServerInfo }) {
  var id;
  const { isAuthenticated, account, Moralis } = useMoralis();

  const serverUrl = "https://2y4fie29aopv.usemoralis.com:2053/server";
  const appId = "kbEuDXuHtw9wrigBfvdMiicU7AUuDqfgHNRQgJGL";
  Moralis.start({ serverUrl, appId });

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card className="form-card" style={styles.card} title={<><Text className="card-title">CREATE NEW TASK</Text></>}>
        





        <Form className="form-check form-switch" labelAlign="left" size="large"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          // initialValues={{
          //   size: componentSize,
          // }}
          // onValuesChange={onFormLayoutChange}
          // size={componentSize}
        >
          <Form.Item  className="form-group row" label="Task title">
            <Input className="task-title mt-4" />
          </Form.Item>
          <Form.Item className="form-group row" label="Task description">
            <Input className="task-title mt-4" />
          </Form.Item>
          <Form.Item className="form-group row" label="Deadline">
            <DatePicker className="task-title mt-4"/>
          </Form.Item>
          <Form.Item className="form-group row" label="Reward size">
            <InputNumber className="task-title mt-4"/>
          </Form.Item>
          <Form.Item className="form-group row" label="Multiple applicants" valuePropName="checked">
            <Switch  />
          </Form.Item>
          <Form.Item className="form-group row">
            <Button>Add task</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default CreateNewTasks;
