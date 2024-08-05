import Layout from "../../layouts";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import "./index.css";

const data = [
  {
    img: "/src/assets/img/logos_jetbrains-space-icon.png",
    title: "Spacing",
    content: "4/Square",
  },
  {
    img: "/src/assets/img/arcticons_depth-lab.png",
    title: "Depth",
    content: "1/4 N",
  },
  {
    img: "/src/assets/img/twemoji_sun.png",
    title: "Sun",
    content: "Full Sun",
  },
  {
    img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
    title: "Water",
    content: "1/Week",
  },
  {
    img: "/src/assets/img/streamline_lemon-fruit-seasoning-solid.png",
    title: "Season",
    content: "Cool",
  },
];

const Plant = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length == 0) {
      return;
    }
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  useEffect(() => {
    showSlides(1);
  }, []);
  return (
    <Layout>
      <div className="plant1-topimg">
        <div style={{ paddingTop: 120 }}>
          <div>
            <h1>Knowout Rose</h1>
            <h4 style={{ fontWeight: 200, marginBottom: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas.
            </h4>
            <h4 style={{ fontWeight: 200, marginTop: 1 }}>
              Nunc eget congue ante.Vivamus ut sapien et ex volutpat incidunt
              eget at felis.
            </h4>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade" style={{ display: "none" }}>
              <img
                src="/src/assets/img/image 2 (1).png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>

            <div className="mySlides fade" style={{ display: "none" }}>
              <img
                src="/src/assets/img/image 2 (1).png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>

            <div className="mySlides fade" style={{ display: "none" }}>
              <img
                src="/src/assets/img/image 2 (1).png"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="dot" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
            <Grid>
              <h2 style={{ textAlign: "left" }}>Quick Info</h2>
              <Grid
                style={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                {data.map((one) => (
                  <>
                    <Grid
                      style={{
                        border: "1px solid lightgray",
                        borderRadius: 10,
                        padding: 20,
                        width: "150px",
                      }}
                      sx={{
                        "&:hover": {
                          border: "1px solid rgb(4, 168, 132) !important",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                        },
                      }}
                    >
                      <img src={one.img} alt="" />
                      <h3 style={{ margin: 10 }}>{one.title}</h3>
                      <p style={{ margin: 0 }}>{one.content}</p>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "space-between",
                }}
              >
                <h2 style={{ textAlign: "left", fontWeight: 100 }}>
                  Growing Calendar
                </h2>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plant;
