import { Card, Timeline, Typography, Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

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
    marginTop: "10px",
  },
};

export default function DoTasks({ isServerInfo }) {
  return (    
    <div style={{ display: "flex", gap: "10px" }}>
      <div className="row">
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            🏥 <Text className="card-title" strong>Red Cross</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline:
                </Text>
                <Text> 2/2/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/dothesetasks" className="task-accept-btn"><NavLink className="create-task-text" to="/dothesetasks">🔍 See more bounties</NavLink></Button>
      </Card>
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            ⭐️ <Text className="card-title" strong>Make a Wish</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline:
                </Text>
                <Text> 2/3/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/createnewtasks" className="task-accept-btn"><NavLink className="create-task-text" to="/">🔍 See more bounties</NavLink></Button>
      </Card>
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            🎗 <Text className="card-title" strong>American Cancer Society</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline:
                </Text>
                <Text> 2/21/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/createnewtasks" className="task-accept-btn"><NavLink className="create-task-text" to="/">🔍 See more bounties</NavLink></Button>
      </Card>
      </div>
      <div>
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            🎗 <Text className="card-title" strong>American Cancer Society</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline: 
                </Text>
                <Text> 2/17/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/createnewtasks" className="task-accept-btn"><NavLink className="create-task-text" to="/">🔍 See more bounties</NavLink></Button>
      </Card>
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            🎗 <Text className="card-title" strong>American Cancer Society</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline:
                </Text>
                <Text> 3/4/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/createnewtasks" className="task-accept-btn"><NavLink className="create-task-text" to="/">🔍 See more bounties</NavLink></Button>
      </Card>
      <Card
        className="job-board"
        style={styles.card}
        title={
          <>
            🎗 <Text className="card-title" strong>American Cancer Society</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{ fontWeight: "bold" }}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  <br></br>🚨 Deadline:
                </Text>
                <Text> 3/17/22</Text>
                <br></br>
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
        <Button key="/createnewtasks" className="task-accept-btn"><NavLink className="create-task-text" to="/">🔍 See more bounties</NavLink></Button>
      </Card>
      </div>
    </div>
  );
}
