import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Navbar from "./Navbar";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let API_Key = "Use your api key";
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_Key}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ article: await parsedData.articles });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container my-3" style={{ backgroundColor: "white" }}>
          <h2 style={{ textAlign: "center" }}>Todays Special News!!!</h2>
          <div className="row">
            {/* <div className="col-md-4">
               <NewsItems title = "Checking" description = "checking you out" imgURL= "#" newsURL="/"/>
        </div> */}
            {this.state.article.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsItems
                    title={elements.title ? elements.title : ""}
                    description={
                      elements.description ? elements.description : ""
                    }
                    imgURL={
                      elements.urlToImage
                        ? elements.urlToImage
                        : "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                    }
                    newsURL={elements.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
