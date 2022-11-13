import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSavedArticles } from '../../selectors';
import NewsArticle from "../../components/NewsArticle";

const SavedArticlesScreen = ({saveArticle}) => {
  const newsArticles = useSelector(selectSavedArticles);
  const [modalVisible, setModalVisible] = useState(false)
  const [url, setUrl] = useState('')

  return (
    <NewsArticle
      saved
      saveArticle={saveArticle}
      newsArticles={newsArticles}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      url={url}
    />
  );
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
});

export default SavedArticlesScreen;
