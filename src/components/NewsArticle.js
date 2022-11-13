import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Pressable,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import {WebView} from "react-native-webview";

const NewsArticle = ({newsArticles, modalVisible, setModalVisible, url, saveArticle, saved = false}) => {
  const [onModalVisible, setOnModalVisible] = useState(false)
  const [newUrl, setNewUrl] = useState('')

  const onPressArticle = (item) => {
    if (saved) {
      setOnModalVisible(true)
      setNewUrl(item.url)
    } else {
      saveArticle(item)
    }
  }

  const onPressCloseModal = () => {
    if (saved) {
      setOnModalVisible(false)
    } else {
      setModalVisible(prevState => !prevState)
    }
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={newsArticles}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => onPressArticle(item)}>
              <Image source={{uri: item.image}} style={styles.thumbnail} />
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.author}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={saved ? onModalVisible : modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <SafeAreaView style={{backgroundColor: 'black'}} />
          <SafeAreaView>
            <Pressable style={styles.closeButton} onPress={onPressCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </SafeAreaView>
          <WebView source={{uri: saved ? newUrl : url }} />
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  closeButton: {
    backgroundColor: 'black',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingLeft: 16
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  }
});

export default NewsArticle;
