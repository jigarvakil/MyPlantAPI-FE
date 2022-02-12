import React, { Component } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = !this.props.category
      ? "MyPlantAPI FE - The PlantO'Pedia by Pooja Tailor "
      : `MyPlantAPI FE - The PlantO'Pedia by Pooja Tailor`;
  }

  updateNews = async () => {
    this.props.setProgress(10);
    let url = `https://myplantsapi.herokuapp.com/api/plant/all`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({
      plants: parseddata,
      loading: false,
      totalResults: parseddata.length,
    });
    this.props.setProgress(100);

    console.log("parseddata", this.state.plants);
  };

  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ marginTop: "150px", marginBottom: "20px" }}
        >
          MyPlantsAPI - Top Plants
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.plants.length}
          hasMore={this.state.plants.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.plants.map((plant) => {
                return (
                  <div className="col-md-6" key={plant.id}>
                    <>
                      <div className="my-3">
                        <span
                          className="text-white  position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                          style={{ zIndex: 1 }}
                        ></span>
                        <div
                          className="card"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#0f2837",
                          }}
                        >
                          <div
                            className="card-body"
                            style={{
                              borderRadius: "20px",
                              backgroundColor: "#0f2837",
                            }}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <h4 className="card-title text-light">
                                  {plant.commonName}
                                </h4>
                                <p className="card-text text-light">
                                  Botnical Name : {plant.botanicalName} <br />
                                  <br />
                                  Description : {plant.description} <br />
                                  <br />
                                  Family: {plant.family ? plant.family : "N/A"}
                                  <br />
                                  <br />
                                  Plant Type :
                                  {plant.plantType ? plant.plantType : "N/A"}
                                  <br />
                                  <br />
                                  Mature Size :
                                  {plant.matureSize ? plant.matureSize : "N/A"}
                                  <br />
                                  <br />
                                  Sun Exposure :
                                  {plant.sunExposure
                                    ? plant.sunExposure
                                    : "N/A"}
                                  <br />
                                  <br />
                                  Soil Type :
                                  {plant.soilType ? plant.soilType : "N/A"}
                                  <br />
                                  <br />
                                  Soil PH :{plant.soilPH ? plant.soilPH : "N/A"}
                                  <br />
                                  <br />
                                  Bloom Time :
                                  {plant.bloomTime ? plant.bloomTime : "N/A"}
                                  <br />
                                  <br />
                                  Flower Color :
                                  {plant.flowerColor
                                    ? plant.flowerColor
                                    : "N/A"}
                                  <br />
                                  <br />
                                  Hardiness Zones :
                                  {plant.hardinessZones
                                    ? plant.hardinessZones
                                    : "N/A"}
                                  <br />
                                  <br />
                                  Native Area :
                                  {plant.nativeArea ? plant.nativeArea : "N/A"}
                                  <br />
                                  <br />
                                  <h5> How To Grow? </h5>:
                                  {plant.howtoGrow ? plant.howtoGrow : "N/A"}
                                  <br />
                                  <br />
                                  <h5> Pruning: </h5>:
                                  {plant.pruning ? plant.pruning : "N/A"}
                                  <br />
                                  <br />
                                  <h5> Common Pests: </h5>:
                                  {plant.commonPests
                                    ? plant.commonPests
                                    : "N/A"}
                                  <br />
                                  <br />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
            <button
              className="btn btn-info onClick={handleNextClick}"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-info"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div> */}
      </>
    );
  }
}

export default News;
