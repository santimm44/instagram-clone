
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PostComponent from './components/PostComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <HeaderComponent />
      {/* <PostComponent/> */}
      <FooterComponent />
    </SafeAreaView>
  );
}

//this style is created using a built in component called stylesheet that allows us to style our componenents
//Flex 1 takes all of the available space of the parent container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
});
