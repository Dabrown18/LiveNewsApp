import { createSelector } from '@reduxjs/toolkit';

export const selectData = state => state.news.data;
export const selectSavedArticles = state => state.news.savedArticles;

export const selectNewsArticles = createSelector(
  [selectData],
  (data) => {
    let tempArray = [];

    data.map(article => {
      if (article?.title && article?.byline) {
        tempArray.push({
          image: article?.multimedia?.length > 0 ? article?.multimedia[0]?.url : '',
          title: article.title,
          author: article.byline,
          url: article.url
        });
      }
    });

    return tempArray;
});
