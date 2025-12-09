import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function codeQr() {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQR}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  centerQR: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
