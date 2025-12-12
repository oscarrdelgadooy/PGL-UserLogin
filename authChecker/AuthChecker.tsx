import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { authStorageService } from "../service/AuthStorage";

const AuthChecker = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const token = await authStorageService.getToken();

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
