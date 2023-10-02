import React, { Component } from "react";
import PhotoContainer from "./photoContainer";

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetch("https://api.artsy.net/api/artworks", {
      method: "GET",
      headers: new Headers({
        "X-XAPP-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiIxNzEwMTI1Yi1jY2FkLTQwZTMtYjE1Ny02ZjkyYTFlZjhhMGEiLCJleHAiOjE2OTY1NjM4NjQsImlhdCI6MTY5NTk1OTA2NCwiYXVkIjoiMTcxMDEyNWItY2NhZC00MGUzLWIxNTctNmY5MmExZWY4YTBhIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1MTY0ODE4NDRjZDY5MDAwYWVmMDBhMiJ9.TBcPhi-MvOuUnD50IEjs3UrLFaaWOrmcicf2BZczyJ4",
      }),
    }).then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response
        .json()
        .then((allPhotos) => {
          this.setState({ photos: allPhotos._embedded.artworks });
        })
        .catch((error) => {
          console.log(error);
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
