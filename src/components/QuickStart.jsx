import { Timeline, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "25px",
    fontWeight: "700",
    marginLeft: "-15px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "17px",
  },
  wrapper: {
    maxWidth: "1000px",
    width: "100%",
    padding: "15px",
  },
};

export default function QuickStart(props) {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>📝To-Do List</h1>
      <Timeline mode="left">
        <Timeline.Item dot="📄" style={styles.text}>
          <Text delete>
            Clone or fork{" "}
            <a
              href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              ethereum-boilerplate
            </a>{" "}
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="💿" style={styles.text}>
          <Text delete>
            Install all dependencies: <Text code>yarn install</Text>
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="🧰" style={styles.text}>
          <Text>
            Sign up for a free account on{" "}
            <a href="https://admin.moralis.io/register" target="_blank" rel="noopener noreferrer">
              Moralis
            </a>
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="💾" style={styles.text}>
          <Text>
            Create a Moralis Server (
            <a
              href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to start Moralis Server
            </a>
            )
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="💿" style={styles.text}>
          <Text>
            Install{" "}
            <a href="https://moralis.io/plugins/1inch/" target="_blank" rel="noopener noreferrer">
              1inch Moralis Plugin
            </a>{" "}
            needed for the<Text code>{"<InchDex />"}</Text> component
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="🔏" style={styles.text}>
          <Text>
            Provide your <Text strong>appId</Text> and <Text strong>serverUrl</Text> from Moralis to{" "}
            <Text code>{"<MoralisProvider>"}</Text> in <Text code>src/index.js</Text>
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="🚀" style={styles.text}>
          <Text>BUIDL!!!</Text>
        </Timeline.Item>
      </Timeline>
      <Timeline mode="left">
        <Timeline.Item dot="⭐️" style={styles.text}>
          <Text>
            Please star this{" "}
            <a
              href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              boilerplate
            </a>
            , every star makes us very happy!
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="📖" style={styles.text}>
          <Text>
            Read more about{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.moralis.io/introduction/readme"
            >
              Moralis
            </a>
          </Text>
        </Timeline.Item>

        <Timeline.Item dot="🙋" style={styles.text}>
          <Text>
            You have questions? Ask them on the {""}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
            >
              Moralis forum
            </a>
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
