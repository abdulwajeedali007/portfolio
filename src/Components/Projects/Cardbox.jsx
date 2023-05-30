import React from "react";
import { Card } from "react-bootstrap";
import "./projects.scss";
import github from "../../Images/github.png";

function Cardbox({ url, image, title, tags, description }) {
  return (
    <Card
      style={{ padding: "10px", backgroundColor: "#435364", height: "100%" }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          borderRadius: "20px",
          marginBottom: "16px",
        }}
        className="rounded-1 w-100 h-100"
      />
      <div className="icon">
        <a href={url} target="_blank" rel="noreferrer ">
          <img src={github} alt="" />
        </a>
      </div>
      <Card.Body style={{ padding: "0px" }}>
        <Card.Title
          style={{ marginBottom: "8px", fontWeight: "700", color: "#fff" }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#fff",
            textAlign: "justify",
          }}
        >
          {description}
        </Card.Text>
        <p style={{ fontSize: "12px", margin: "0px", marginTop: "auto" }}>
          {Object.keys(tags).map((tag) => {
            return (
              <span className="tag" key={tag}>
                #{tags[tag]}{" "}
              </span>
            );
          })}
        </p>
      </Card.Body>
    </Card>
  );
}

export default Cardbox;
