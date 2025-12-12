import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getToken } from "../service/AuthStorage";
import { router } from "expo-router";

const AuthChecker = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();

      if (!token) {
        router.replace("/LoginScreen");
      } else {
        router.replace("/(drawer)/welcome");
      }
    };

    checkAuth();
  }, []);

  return (
    <View>
      <Text>Not logged.</Text>
    </View>
  );
};

export default AuthChecker;
