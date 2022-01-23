import { Card, Timeline, Typography } from "antd";
import React from "react";

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
};

var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});

export default function CreateTasks({ isServerInfo }) {
  

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        className="task-card"
        style={styles.card}
        title={
          <>
            ⭐️ <Text strong>Your open tasks</Text>
            <button className="task-create-btn">
              ➕ Create new task
            </button>
          </>
        }
      >
        
        
        
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📌">
            <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  [CLAIMED] Build the best strategic marketing plan for Q1
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 500 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> StormBrew</Text>
              </div>
            </div>
          </Timeline.Item>

          <Timeline.Item dot="🎨">
          <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  [CLAIMED] Create a beautiful website for our charity event
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 1000 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> Meir</Text>
              </div>
            </div>
          </Timeline.Item>

          <Timeline.Item dot="✍️">
          <div className="task-item">
              <div className="task-headline">
                <Text style={styles.text}>
                  [OPEN] Write 5 high quality blog posts for our website
                </Text>
              </div>
              <div className="task-detail-line">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 1400 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Task open till:</Text>
                <Text> 3/4/22</Text>
              </div>
            </div>
          </Timeline.Item>

          <Timeline.Item dot="📣">
            <div className="task-item">
                <div className="task-headline">
                  <Text style={styles.text}>
                    [OPEN] Find 5 influencers interested in partnering
                  </Text>
                </div>
                <div className="task-detail-line border-gradient-purple">
                  <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                  <Text> 300 Karma</Text>
                  <Text style={{fontWeight: "bold"}}> <br></br>👾 Task open till:</Text>
                  <Text> 2/1/22</Text>
                </div>
              </div>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              ✅ <Text strong> Completed tasks</Text>
            </>
          }
        >
          <Timeline.Item dot="🔏">
            <div className="task-item task-completed">
                <div className="task-headline">
                  <Text style={styles.text}>
                    [CLOSED] Find 5 influencers interested in partnering
                  </Text>
                </div>
                <div className="task-detail-line border-gradient-purple">
                  <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                  <Text> 300 Karma</Text>
                  <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                  <Text> dmaka</Text>
                </div>
            </div>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <div className="task-item task-completed">
              <div className="task-headline">
                <Text style={styles.text}>
                    [CLOSED] Find 5 influencers interested in partnering
                </Text>
              </div>
              <div className="task-detail-line border-gradient-purple">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 300 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> floyd_droid</Text>
              </div>
            </div>
          </Timeline.Item>
          <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="🔁">
            <div className="task-item task-completed">
              <div className="task-headline">
                <Text style={styles.text}>
                    [CLOSED] Find 5 influencers interested in partnering
                </Text>
              </div>
              <div className="task-detail-line border-gradient-purple">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 300 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> floyd_droid</Text>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot="🔁">
            <div className="task-item task-completed">
              <div className="task-headline">
                <Text style={styles.text}>
                    [CLOSED] Find 5 influencers interested in partnering
                </Text>
              </div>
              <div className="task-detail-line border-gradient-purple">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 300 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> floyd_droid</Text>
              </div>
            </div>
          </Timeline.Item>
            <Timeline.Item dot="🔁">
            <div className="task-item task-completed">
              <div className="task-headline">
                <Text style={styles.text}>
                    [CLOSED] Find 5 influencers interested in partnering
                </Text>
              </div>
              <div className="task-detail-line border-gradient-purple">
                <Text style={{fontWeight: "bold"}}> 💎 Reward:</Text>
                <Text> 300 Karma</Text>
                <Text style={{fontWeight: "bold"}}> <br></br>👾 Claimed by:</Text>
                <Text> floyd_droid</Text>
              </div>
            </div>
          </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
