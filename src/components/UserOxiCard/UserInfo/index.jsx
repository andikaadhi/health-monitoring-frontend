import React from "react";
import { Div, Text } from "../../../style-system/components";

const UserInfo = ({ name, age, gender }) => (
  <Div>
    <Text bold fontSize={3} space={{ py: 1 }}>
      {name}
    </Text>
    <Text>{age}</Text>
    <Text>{gender}</Text>
  </Div>
);

export default UserInfo;
