import React from 'react'
import NewsItems from './NewsItems'
import { useState,useEffect } from 'react'

const NewsBoard = ({category}) => {
    const [articles,setArticles]=useState([])



    useEffect(() => {
      const fetchApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ef48bd2435444e019884ddc4baa01965`
        const response = await fetch(url);
        const resJson = await response.json();
        // console.log(resJson)
        setArticles(resJson.articles )
      };
      fetchApi();
    }, [category]);
    
  return (
    <div>
      <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>

      {articles?.map((news,index)=>{
        return<NewsItems key={index} title={news.title} description={news.description} img={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard;
