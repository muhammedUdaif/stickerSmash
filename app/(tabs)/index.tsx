import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { View, StyleSheet} from "react-native";

const placeholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageViewer imgSource={placeholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffffff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imagecontainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  }
})
