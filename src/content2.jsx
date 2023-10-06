import React, { Component } from "react";
import PhotoContainer from "./photoContainer";

export class Content2 extends Component {
  constructor() {
    super();
    this.state = {
      IDs: [],
      photos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=True&isPublicDomain=True&medium=Paintings&q=Landscape"
    ).then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response
        .json()
        .then((allIDs) => {
          console.log(allIDs);
          this.setState({ IDs: allIDs.objectIDs });
          return allIDs.objectIDs;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((IDlist) => {
          console.log(IDlist);
          for (let i = 0; i < 25; i++) {
            fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${IDlist[i]}`
            ).then((response) => {
              if (!response.ok) {
                throw Error("Error fetching image URL");
              }
              return response.json().then((allPhotos) => {
                this.setState({
                  photos: [...this.state.photos, allPhotos],
                });
                //console.log(this.state.photos);
              });
            });
          }
        });
    });
  }
  render() {
    return (
      <section className="content">
        <p>Content</p>
        <PhotoContainer photos={this.state.photos} />
      </section>
    );
  }
}
