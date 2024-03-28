import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../firebaseconfig";
import Button from "../../ButtonsHomePage";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const PlaceholderImage = require("../../../Assets/mercadotecaLogo.png");

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const user = FIREBASE_AUTH.currentUser;
  const refreshPage = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100); // Adjust the delay as needed
  }, []); // Empty dependency array to memoize the callback

  useFocusEffect(refreshPage); // Run the effect when the screen comes into focus

  if (user) {
    navigation.navigate("AllMenus", { refresh: true });
  }
  useEffect(() => {
    if (userData) {
      if (userData.isAdm) {
        Toast.show({
          type: "success",
          text1: "✔️ ADM Login bem sucedido!",
          text2: "",
        });
        navigation.navigate("ManagerDash", { refresh: true });
      } else {
        Toast.show({
          type: "success",
          text1: "✔️ Login bem Sucedido!",
          text2: "",
        });
        navigation.navigate("AllMenus", { refresh: true });
      }
    }
  }, [userData]);

  const signIn = async () => {
    setLoading(true);
    const firestore = getFirestore();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;

      const usersQuery = query(
        collection(firestore, "users"),
        where("email", "==", user.email)
      );
      const querySnapshot = await getDocs(usersQuery);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setUserData(userData);
      } else {
        Toast.show({
          type: "error",
          text1: "❌ Dados de Usuário não encontrado",
          text2: "",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Toast.show({
          type: "error",
          text1: "❌ Usuário não encontrado",
          text2: "",
        });
      } else if (error.code === "auth/invalid-email") {
        Toast.show({
          type: "error",
          text1: "❌ Endereço de Email Inválido!",
          text2: "",
        });
      } else if (error.code === "auth/missing-email") {
        Toast.show({
          type: "error",
          text1: "❌ Digite seu endereço de Email",
          text2: "",
        });
      } else if (error.code === "auth/missing-password") {
        Toast.show({
          type: "error",
          text1: "❌ Digite uma Senha!",
          text2: "",
        });
      } else if (error.code === "auth/wrong-password") {
        Toast.show({
          type: "error",
          text1: "❌ Senha Incorreta!",
          text2: "",
        });
      } else if (error.code === "auth/user-disabled") {
        Toast.show({
          type: "error",
          text1: "❌ Usuário desativado, entre em contato com o suporte",
          text2: "",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "❌ Ocorreu um erro. Tente novamente mais tarde!",
          text2: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder={"Email"}
          style={styles.input}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder={"Insira uma senha"}
          secureTextEntry={true}
          style={styles.input}
          value={password}
          autoCapitalize="none"
        />
        {loading ? (
          <ActivityIndicator size="large" color="#f4f4f4" />
        ) : (
          <>
            <Button theme="login" label="Login" onPressAction={signIn} />
            <Button label="Voltar" theme="home" />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#231F20",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 310,
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "black",
    borderColor: "#231F20",
    marginBottom: 10,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 150,
    paddingBottom: 10,
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 170,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 15,
    fontSize: 30,
    fontWeight: "700",
  },
});
