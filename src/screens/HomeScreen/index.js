import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { fetchArticles } from '../../redux/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewsArticles } from '../../selectors';
import { newsActions } from '../../redux/newsSlice';
import NewsArticle from '../../components/NewsArticle'

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState('')
  const newsArticles = useSelector(selectNewsArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const saveArticle = (item) => {
    // Open an alert
    Alert.alert(
      'Save Article',
      'Do you want to save this article?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
          setUrl(item.url)
            dispatch(newsActions.saveArticles(item));
            setModalVisible(prevState => !prevState);
          } },
      ]
    );
  };

  return (
    <NewsArticle
      newsArticles={newsArticles}
      saveArticle={saveArticle}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      url={url}
    />
  );
}

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

export default HomeScreen;
