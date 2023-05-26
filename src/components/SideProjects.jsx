import React from "react";
import { View, Text, Link, StyleSheet } from "@react-pdf/renderer";

const SideProjects = (props) => {
  const { sideProjects } = props;

  return (
    <View>
      {sideProjects.map((project, i) => (
        <View key={i} wrap={false} style={styles.sideProject}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            {project.title}
          </Text>
          <Text>{project.description}</Text>
          <Link style={{ fontSize: 10 }} src={project.url}>
            {project.title}
          </Link>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sideProject: {
    borderLeft: "2px solid black",
    paddingLeft: 5,
    width: "100%",
    marginBottom: 15,
  },
  projectTitle: { fontWeight: "bold", fontSize: 14 },
});

export default SideProjects;
