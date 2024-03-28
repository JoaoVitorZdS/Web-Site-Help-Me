import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
const PlaceholderImage = require("../../../Assets/mercadotecaLogo.png");
import Button from "../../ButtonsHomePage";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../../firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const Register = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [document, setDocument] = useState();
  const [phone, setPhone] = useState();
  const [birthdate, setBirthdate] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const auth = FIREBASE_AUTH;
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation();
  if (user) {
    navigation.navigate("AllMenus", { refresh: true });
  }
  const refreshPage = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100); // Adjust the delay as needed
  }, []); // Empty dependency array to memoize the callback

  useFocusEffect(refreshPage); // Run the effect when the screen comes into focus
  const formatCPF = (cpf) => {
    if (!cpf) return "";

    const cpfNumbers = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    const parts = [];

    for (let i = 0; i < cpfNumbers.length; i += 3) {
      parts.push(cpfNumbers.substr(i, 3));
    }

    return parts.join(".");
  };

  // Função para formatar o telefone com os placeholders
  const formatPhone = (phoneNumber) => {
    if (!phoneNumber) return "";
    const formattedPhone = phoneNumber.replace(
      /(\d{2})(\d{1})(\d{4})(\d{4})/,
      "($1) $2 $3-$4"
    );
    return formattedPhone;
  };
  const saveProfileData = () => {
    const doc = addDoc(collection(FIREBASE_DB, "users"), {
      username: username,
      email: email,
      pass: password,
      doc: document,
      phone: phone,
      birthdate: birthdate,
    });
  };
  const signUp = async () => {
    setLoading(true);
    try {
      if (!username) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Nome de Usuário.",
          text2: "",
        });
        return;
      }

      if (!phone) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Número de Telefone com DDD..",
          text2: "",
        });
        return;
      }
      if (!birthdate) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Data de Nascimento.",
          text2: "",
        });
        return;
      }
      if (!document) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Número de CPF.",
          text2: "",
        });

        return;
      }

      if (!email) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Email.",
          text2: "",
        });
        return;
      }

      if (!password) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo Senha.",
          text2: "",
        });

        return;
      }
      saveProfileData();

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, { displayName: username });

        navigation.navigate("AllMenus", { refresh: true });
        Alert.alert("Registro Bem Sucedido!");
      } else {
        Alert.alert("Usuário não autenticado");
      }
    } catch (error) {
      Alert.alert("Registro Falhou!" + error.message);
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
        <Text style={styles.text}>Cadastro</Text>
        <TextInput
          onChangeText={(text) => setUsername(text)}
          placeholder={"Nome de Usuário"}
          style={styles.input}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setPhone(formatPhone(text))}
          placeholder={"Número de Telefone com DDD"}
          style={styles.input}
          value={phone}
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={16}
        />
        <TextInput
          onChangeText={(text) => setBirthdate(text)}
          placeholder={"Data de Nascimento"}
          style={styles.input}
          value={birthdate}
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(text) => setDocument(formatCPF(text))}
          placeholder={"CPF"}
          style={styles.input}
          value={document}
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={14}
        />
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
            <Button theme="register" label="Cadastrar" onPressAction={signUp} />

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
    paddingTop: 50,
    paddingBottom: 10,
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 400,
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
    fontWeight: 700,
  },
});
