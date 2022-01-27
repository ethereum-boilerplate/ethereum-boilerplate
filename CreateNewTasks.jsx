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
import ReactDOM from "react-dom";

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
  },
};

function CreateNewTasks({ isServerInfo }) {
  var id;
  const { isAuthenticated, account, Moralis } = useMoralis();

  const serverUrl = "https://r9iwiwbimljl.usemoralis.com:2053/server";
  const appId = "dbSNTqiw3chZw5VzlFOXebGP9rMxYQF5tuvyawIY";
  Moralis.start({ serverUrl, appId });

  const [active, setActive] = useState(false);
  const onFinish = () => {
    let creator = document.getElementById("creator").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let deadline = document.getElementById("deadline").value;
    let reward = document.getElementById("reward").value;
    var multi;
    if (active === false) {
      multi = "false";
    } else {
      multi = "true";
    }
    //let multi = document.getElementById("multi-allowed").checked;
    let user = Moralis.User.current();
    const taskData = Moralis.Object.extend("taskData");
    const task1 = new taskData();
    task1.set("creatorName", creator);
    task1.set("taskCreator", user.get("ethAddress"));
    task1.set("title", title);
    task1.set("description", description);
    task1.set("deadline", deadline);
    task1.set("reward", reward);
    task1.set("multi", multi);
    task1.save();
    console.log(
      "Received values of form: ",
      title,
      description,
      deadline,
      reward,
      active,
      "from user",
      user.get("ethAddress")
    );
  };

  async function login() {
    let user = Moralis.User.current();
    console.log("pressed");
    if (!user) {
      document.getElementById("logged").innerHTML = "you have logged in";
      user = await Moralis.authenticate();
    } else {
      document.getElementById("logged").innerHTML = "already logged in";
    }
    console.log("logged in user:", user);
  }

  async function logOut() {
    let user = Moralis.User.current();
    if (user) {
      document.getElementById("logged").innerHTML =
        "you successfully logged out";
    } else {
      document.getElementById("logged").innerHTML = "already logged out";
    }

    await Moralis.User.logOut();
    console.log("logged out");
  }

  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
      <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card
          className="form-card"
          style={styles.card}
          title={
            <>
              <Text className="card-title">CREATE NEW TASK</Text>
            </>
          }
        >
          <Form
            className="task-form"
            labelAlign="left"
            size="large"
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
            onFinish={onFinish}
          >
            <Form.Item className="task-title" label="Task Creator">
              <Input className="task-title" id="creator" />
            </Form.Item>
            <Form.Item className="task-title" label="Task Title">
              <Input className="task-title" id="title" />
            </Form.Item>
            <Form.Item className="task-title" label="Task Description">
              <Input className="task-title" id="description" />
            </Form.Item>
            <Form.Item className="task-title" label="Deadline">
              <DatePicker className="task-title" id="deadline" />
            </Form.Item>
            <Form.Item className="task-title" label="Reward Size">
              <InputNumber className="task-title" id="reward" />
            </Form.Item>
            <Form.Item
              className="task-title"
              label="Multiple applicants"
              valuePropName="checked"
            >
              <Switch onClick={() => setActive(!active)} checked={active} />
            </Form.Item>
            <Form.Item className="task-title">
              <Button htmlType="submit">Add Task</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default CreateNewTasks;
