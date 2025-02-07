const VideoSection = () => {
  return (
    <section className="section video-s pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xxl-7">
                  <div className="section__header text-center">
                    <h2 className="title mt-4 title-animation">
                      Unveiling Squads
                    </h2>
                    {/* <p>
                      By leveraging deep learning algorithms, DeepArt.io
                      analyzes the input image and applies the style
                      characteristics of renowned artworks to generate visually
                      striking compositions.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="video-s__content">
                    <video autoPlay loop muted controls>
                      <source src="/images/TeamsVDO.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
