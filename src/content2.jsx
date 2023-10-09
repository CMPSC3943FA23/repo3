import React, { Component } from "react";
import PhotoContainer from "./photoContainer";
const testEndpoint =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=True&isPublicDomain=True&medium=Paintings&q=Landscape";
const eachEndpoint =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

export class Content2 extends Component {
  constructor() {
    super();
    this.state = {
      IDs: [],
      photos: [],
    };
  }

  async getID() {
    const res = await fetch(testEndpoint);
    const IDblob = await res.json();
    return IDblob.objectIDs;
  }

  async getPhoto(endPoint) {
    const res = await fetch(endPoint);
    const photoBlob = await res.json();
    return photoBlob.objectIDs;
  }

  async getPhotoList(IDs) {
    const idl = await this.getID();
    console.log(idl);
    let i = 0;
    let j = 0;
    while (i < 12) {
      const res = await fetch(eachEndpoint + idl[j++]);
      if (res.status === 200) {
        const photoBlob = await res.json();
        this.setState({
          photos: [...this.state.photos, photoBlob],
        });
        i++;
      }
    }
    console.log(this.state.photos);
  }

  componentDidMount() {
    this.getPhotoList();
    console.log(this.state.photos);
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
