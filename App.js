import React, { useState } from "react";
import { Text, View, Button } from "react-native";

import Porto from "./page/porto";

const App = () => {
  const [jumlah, setJumlah] = useState(0);
  return <Porto />;
};
export default App;
