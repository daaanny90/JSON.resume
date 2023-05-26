import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const TechSkills = (props) => {
  const { techSkills } = props;

  return (
    <View style={styles.section}>
      {techSkills.map((skill, i) => {
        const skills = skill.skills.map((sk, j) => {
          return <Text key={j}>{sk}</Text>;
        });

        return (
          <View key={i} wrap={false} style={styles.skillsContainer}>
            <Text style={styles.skill}>{skill.type}</Text>
            {skills}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    border: "2px solid black",
    padding: 5,
    width: 160,
    minHeight: 200,
  },
  skill: {
    fontWeight: "bold",
    fontSize: 14,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
});

export default TechSkills;
