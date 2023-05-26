import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";

const Social = (props) => {
  return (
    <View>
      {props.social.map((social, i) => (
        <View key={i} style={{ display: "flex", flexDirection: "row" }}>
          <Text>
            {social.social}: <Link src={social.url}>{social.username}</Link>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Social;
