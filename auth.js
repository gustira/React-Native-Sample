import AsyncStorage from '@react-native-community/async-storage';

 const USERNAME = "uname";

const signIn = async (username, password) => {
    await AsyncStorage.setItem(USERNAME, username);
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

export {signIn};