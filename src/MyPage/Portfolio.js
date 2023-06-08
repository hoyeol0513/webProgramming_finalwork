import { Button, Card, List } from "antd";
import React from "react";

const Portfolio = ({ data }) => {
  console.log(data);
  return (
    <div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data ? data : []}
        style={{ width: "1100px" }}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>{item.url}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Portfolio;
