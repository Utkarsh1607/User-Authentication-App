import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const authCtx = useContext(AuthContext);
  const [fetchedMessage, setFetchedMessage] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://react-native-8b80d-default-rtdb.firebaseio.com/message.json?auth=" +
          authCtx.token
      )
      .then((res) => {
        setFetchedMessage(res.data);
      });
  }, [authCtx.token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
