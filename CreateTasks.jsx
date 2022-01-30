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

export default function CreateTasks({ isServerInfo }) {
  return (
    <div style={{display: "flex", gap: "10px" }}>

      <Card
        className="task-card"
        style={styles.card}
        title={
          <>
            ⭐️ <Text className="card-title" strong>Your open tasks</Text>
            <Button key="/createnewtasks" className="task-create-btn"><NavLink className="create-task-text" to="/createnewtasks">➕ Create new task</NavLink></Button>
          
              
          </>
        }
      >
  <div className="row">
  <div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
<div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
<div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
</div>
<div className="row">
<div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
<div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
<div className="card border-primary mb-3" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
</div>
      </Card>
      <div>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              ✅ <Text className="card-title" strong> Completed tasks</Text>
            </>
          }
        >
          
          <div className="card border-primary mb-3 task-completed" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
<div className="card border-primary mb-3 task-completed" style={{maxWidth: "20rem" }}>
  <div className="card-header">🏥 Red Cross</div>
  <div className="card-body">
    <h4 className="card-title">Build the best strategic marketing plan for Q1</h4>
    <p className="card-text">👾 Claimed by: StormBrew</p>
    <br></br>
    <div className="d-grid gap-2">
  <button className="btn btn-lg btn-primary" type="button">💎 500 Karma</button>
</div>
  </div>
</div>
        </Card>
      </div>
    </div>
  );
}
