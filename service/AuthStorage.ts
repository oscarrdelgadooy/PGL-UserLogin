import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (user: string, token: string) => {
  try {
    await AsyncStorage.setItem(user, token);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async (user: string) => {
  try {
    return await AsyncStorage.getItem(user);
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = async (user: string) => {
  try {
    await AsyncStorage.removeItem(user);
  } catch (error) {
    console.log(error);
  }
};
