import { ScrollView, StyleSheet, Text, View } from "react-native";
import Description from "../../../components/Description";


export default function App() {
  const activities = [
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <View style={styles.bodyStyles}>
        <View>
          <View>
            <Description></Description>
          </View>
          <Text style={styles.listActivities}>Cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            {activities.map((activity) => (
              <Text key={activity} style={styles.stylePerActivity}>
                {activity}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  topContainer: {
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    width: "100%",
    height: 70,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyStyles: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  stylePerActivity: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
  centerQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  listActivities: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
