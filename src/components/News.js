import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'

export class News extends Component {


   
    constructor() {
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1,
        }
    }

    async componentDidMount() {
      let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=07de49cc7926432588165a748dc728fd';
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className= 'container my-3'>
        <h2>Top Heading</h2>
    
        <div className="row">

{this.state.articles.map((element)=> {
    return <div className="col-md" key={element.url}>
        <NewsUpdate title={element.title} newsUrl={element.url} description={element.description} imageUrl={element.urlToImage}/>
    </div>

  })}

</div>
</div>
    )
}
}

           

export default News