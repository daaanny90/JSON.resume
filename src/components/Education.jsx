import React from "react";
import { View, Text } from "@react-pdf/renderer";

const Education = (props) => {
  const { education } = props;

  return (
    <View>
      {education.map((edu, i) => (
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
            From {edu.from} to {edu.to}
          </Text>
          <Text style={{ fontSize: 8 }}>@ {edu.institute}</Text>
          <Text style={{ fontSize: 8 }}>{edu.company}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>{edu.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default Education;
