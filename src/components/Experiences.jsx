import React from "react";
import { View, Text } from "@react-pdf/renderer";

const Experiences = (props) => {
  const { experiences } = props;

  return (
    <View>
      {experiences.map((exp, i) => (
        <View
          key={i}
          wrap={false}
          style={{
            borderLeft: "2px solid black",
            paddingLeft: 5,
            width: "100%",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 8 }}>
            From {exp.from} to {exp.to}
          </Text>
          <Text style={{ fontSize: 8 }}>
            @ {exp.company} - {exp.type}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>{exp.title}</Text>
          <Text>{exp.summary}</Text>
        </View>
      ))}
    </View>
  );
};

export default Experiences;
