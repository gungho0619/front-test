import { Button, Grid, Rating } from "@mui/material";
import Layout from "../../layouts";
import "./index.css";
import {
  ArrowDropDown,
  ArrowDropUp,
  MessageOutlined,
  RemoveRedEye,
  Watch,
} from "@mui/icons-material";

const data = [
  {
    img: "/src/assets/img/Lawn Mower.png",
    title: "Lawn Care",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
  {
    img: "/src/assets/img/Plantation.png",
    title: "Tree and Shrub Care",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
  {
    img: "/src/assets/img/Consultant.png",
    title: "Free Consultations",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
  {
    img: "/src/assets/img/Trowel.png",
    title: "Garden Design",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
  {
    img: "/src/assets/img/Spray Sprinkler.png",
    title: "Water Features",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
  {
    img: "/src/assets/img/Flower Growing.png",
    title: "Irrigation Systems",
    content:
      "Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consesuscipit g elig. Vivamus hesndrerit suscipit egestas.",
  },
];

const faqs = [
  {
    title: "Do you specialize in both residential and commercial landscaping?",
    content:
      "Do you spasdfasdfasdfsadf in both residential and commercial landscapingsit amet, consec tetur adipisicinamet, consec tetur adipisicing elig. dolor sit amet, consec tetur adipisicinamet, consec tetur adipisicing eli",
  },
  {
    title: "Do you provide sustainable and eco-friendly landscaping options?",
    content:
      "Do you spasdfasdfasdfsadf in both residential and commercial landscapingsit amet, consec tetur adipisicinamet, consec tetur adipisicing elig. dolor sit amet, consec tetur adipisicinamet, consec tetur adipisicing eli",
  },
  {
    title:
      "How do I request a consultation or estimate for my landscaping project?",
    content:
      "Do you spasdfasdfasdfsadf in both residential and commercial landscapingsit amet, consec tetur adipisicinamet, consec tetur adipisicing elig. dolor sit amet, consec tetur adipisicinamet, consec tetur adipisicing eli",
  },
  {
    title: "What factors influence the cost of a landscaping project?",
    content:
      "Do you spasdfasdfasdfsadf in both residential and commercial landscapingsit amet, consec tetur adipisicinamet, consec tetur adipisicing elig. dolor sit amet, consec tetur adipisicinamet, consec tetur adipisicing eli",
  },
  {
    title: "How often shouold I schedule landscape maintenance services?",
    content:
      "Do you spasdfasdfasdfsadf in both residential and commercial landscapingsit amet, consec tetur adipisicinamet, consec tetur adipisicing elig. dolor sit amet, consec tetur adipisicinamet, consec tetur adipisicing eli",
  },
];

const blogs = [
  {
    type: "Tips",
    title: "Choosing the Right Plants for Your Climate Zone",
    comments: 10,
    views: "10K",
    time: "5 min ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus hendrerit suscipit egestas. Nuneget congue ante. Vivamus ut sapien et ex volutpat tincidiunt eget at felis",
  },
  {
    type: "Insight",
    title: "How to Create a Low Maintenance Landscape",
    comments: 50,
    views: "15K",
    time: "7 min ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus hendrerit suscipit egestas. Nuneget congue ante. Vivamus ut sapien et ex volutpat tincidiunt eget at felis",
  },
  {
    type: "Insight",
    title: "Landscaping Trends for the Modern Homeowner",
    comments: 100,
    views: "20K",
    time: "10 min ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus hendrerit suscipit egestas. Nuneget congue ante. Vivamus ut sapien et ex volutpat tincidiunt eget at felis",
  },
];

const Landing = () => {
  const handleCollapseClick = (e, index) => {
    if (
      document.getElementsByClassName("collapse-content")[index].style.maxHeight
    ) {
      document.getElementsByClassName("collapse-content")[
        index
      ].style.maxHeight = null;
    } else {
      document.getElementsByClassName("collapse-content")[
        index
      ].style.maxHeight =
        document.getElementsByClassName("collapse-content")[index]
          .scrollHeight + "px";
    }
  };

  return (
    <Layout>
      <div>
        <div className="landing-topimg">
          <div style={{ paddingTop: 60 }}>
            <p className="top-txt">
              Gardens of
              <br /> Distinction
            </p>
            <p className="top-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing
              <br /> elig. Vivamus hes ndrerit suscipit g elig. Vivamus hes
              ndrerit suscipit egestas.
            </p>
          </div>
          <div className="top-btn-grid">
            <input className="top-started" type="submit" value="Get Started" />
            <input className="top-learn" type="submit" value="Learn More" />
          </div>
          <div className="top-state-grid">
            <div>
              <p className="state-item-p1">
                15<span className="state-item-plus">+</span>
              </p>
              <p className="state-item-p2">Years Experience</p>
            </div>{" "}
            |
            <div>
              <p className="state-item-p1">
                10K<span className="state-item-plus">+</span>
              </p>
              <p className="state-item-p2">Product</p>
            </div>{" "}
            |
            <div>
              <p className="state-item-p1">
                5K<span className="state-item-plus">+</span>
              </p>
              <p className="state-item-p2">Satisfied Clients</p>
            </div>{" "}
            |
            <div>
              <p className="state-item-p1">
                87<span className="state-item-plus">+</span>
              </p>
              <p className="state-item-p2">Local Team Members</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "50px" }}>
          <div className="plants-container">
            <p className="private-plants-txt">
              Caring For Your{" "}
              <span style={{ color: "rgb(4, 168, 132)" }}>
                Private
                <br /> Plants
              </span>
              , Our Expertise
            </p>
            <p className="private-plants-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
              marginTop={"50px"}
              gap={"20px"}
            >
              <Grid item lg={5.5} sm={12}>
                <Grid container flexDirection={"column"} gap={"20px"}>
                  <Grid
                    item
                    style={{
                      borderRadius: "20px",
                      border: "1px solid transparent",
                      padding: "25px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                    }}
                    sx={{
                      "&:hover": {
                        border: "1px solid rgb(4, 168, 132) !important",
                      },
                    }}
                  >
                    <img src="/src/assets/img/Icon.png" alt="" />
                    <p className="private-plants-item-title">
                      Our
                      <span style={{ color: "rgb(4, 168, 132)" }}>
                        {" "}
                        Mission
                      </span>
                    </p>
                    <p className="private-plants-item-title-below">
                      Lorem ipsum dolor sit amet, consec tetur adipisicinamet,
                      consec tetur adipisicing elig. Vivamuet, consec tetur
                      adipisicinamet, consec tetur adipisicing elig. s hes
                      ndrerit suscipit g elig. Vivamus hes ndrerit suscipit
                      egestas.
                    </p>
                  </Grid>
                  <Grid
                    item
                    style={{
                      borderRadius: "20px",
                      border: "1px solid transparent",
                      padding: "25px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                    }}
                    sx={{
                      "&:hover": {
                        border: "1px solid rgb(4, 168, 132) !important",
                      },
                    }}
                  >
                    <img src="/src/assets/img/Icon (1).png" alt="" />
                    <p className="private-plants-item-title">
                      Our
                      <span style={{ color: "rgb(4, 168, 132)" }}> Vision</span>
                    </p>
                    <p className="private-plants-item-title-below">
                      Lorem ipsum dolor sit amet, consec tetur adipisicinamet,
                      consec tetur adipisicing elig. Vivamuet, consec tetur
                      adipisicinamet, consec tetur adipisicing elig. s hes
                      ndrerit suscipit g elig. Vivamus hes ndrerit suscipit
                      egestas.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5.5} sm={12}>
                <img
                  src="/src/assets/img/image 2.png"
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginTop={"50px"}
          >
            <Grid item xs={12} sm={5.5}>
              <img
                src="/src/assets/img/Image Placeholder.png"
                alt=""
                style={{ borderRadius: "10px", width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={5.5}>
              <p className="choose-us-txt">
                They{" "}
                <span style={{ color: "rgb(4, 168, 132)" }}>Choose Us</span>
              </p>
              <p className="choose-us-txt-below">
                Lorem ipsum dolor s amet, consec tetur adipisicinamet, consec
                tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
                Vivamus hes ndrerit suscipiit amet, consec tetur adipisicinamet,
                consec tetur adipisicing elig. Vivamus hes ndrerit suscipit g
                elig. Vivamus hes ndrerit suscipit egestas.
              </p>
              <div style={{ marginTop: "30px" }}>
                <div className="choose-us-container">
                  Expertise
                  <input
                    className="choose-us-checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <span className="choose-us-checkmark"></span>
                </div>
                <div className="choose-us-container">
                  Timeliness
                  <input
                    className="choose-us-checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <span className="choose-us-checkmark"></span>
                </div>
                <div className="choose-us-container">
                  Customization
                  <input
                    className="choose-us-checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <span className="choose-us-checkmark"></span>
                </div>
                <div className="choose-us-container">
                  Quality Workmanship
                  <input
                    className="choose-us-checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <span className="choose-us-checkmark"></span>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="services-container">
            <p className="private-plants-txt">
              Our landscaping <br />
              work and{" "}
              <span style={{ color: "rgb(4, 168, 132)" }}>services</span>
            </p>
            <p className="private-plants-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <Grid container justifyContent={"center"} gap={"20px"}>
              {data.map((one) => (
                <>
                  <Grid item lg={3}>
                    <Grid
                      item
                      className="services-img"
                      style={{
                        border: "none",
                        borderRadius: 10,
                        padding: "20px 20px",
                        margin: "15px 0px",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                      }}
                    >
                      <img src={one.img} alt="" />
                      <h3 style={{ marginTop: 5 }}>{one.title}</h3>
                      <p style={{ marginTop: 5 }}>{one.content}</p>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
          <div className="gallery-container">
            <p className="gallery-txt">
              Our <span style={{ color: "rgb(4, 168, 132)" }}>Gallery</span>
            </p>
            <p className="gallery-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes etur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <Grid container marginTop={"50px"}>
              <Grid item xs={4}>
                <img
                  src="src/assets/img/Image Placeholder (1).png"
                  alt=""
                  style={{ width: "95%", height: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Grid container style={{ height: "50%" }}>
                  <Grid item xs={6}>
                    <img
                      src="src/assets/img/image 26.png"
                      style={{
                        borderRadius: "15px",
                        width: "90%",
                        height: "97.5%",
                      }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      src="src/assets/img/Image Placeholder (2).png"
                      style={{ width: "90%", height: "97.5%" }}
                      alt=""
                    />
                  </Grid>
                </Grid>
                <div style={{ height: "50%", position: "relative" }}>
                  <img
                    src="src/assets/img/image 21.png"
                    style={{
                      borderRadius: "15px",
                      width: "95%",
                      height: "97.5%",
                      position: "absolute",
                      bottom: 0,
                    }}
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <img
                  src="src/assets/img/Image Placeholder (3).png"
                  alt=""
                  style={{ width: "95%", height: "100%" }}
                />
              </Grid>
            </Grid>
          </div>
          <div className="about-container">
            <p className="about-txt">
              See What They Are Saying <br />
              <span style={{ color: "rgb(4, 168, 132)" }}>About EcoSculpt</span>
            </p>
            <p className="about-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes etur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <Grid container justifyContent={"center"} marginTop={"50px"}>
              <Grid
                xs={5}
                item
                className="about-grid-item"
                style={{
                  border: "none",
                  borderRadius: 10,
                  padding: "20px 40px",
                  margin: "15px 30px",
                  position: "relative",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                }}
              >
                <img
                  className="about-item-img"
                  src="/src/assets/img/Image Placeholder (4).png"
                  alt=""
                />
                <p className="about-item-content">
                  &quot;Lorem ipsum dolor sit amet, consec um dolorum dolor sit
                  amet, conseeet,consec tetum dolor sit amet, conseeum dolor sit
                  amet, conseum dolor sit amet, consenamet, consec tum dolor sit
                  amet, conseolor sit amur adipiscinamet,nsetur adipisciname
                </p>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <p className="about-item-name">Eco Susiloantio</p>
                    <p className="about-item-job">Regional Mobility Manager</p>
                  </Grid>
                  <Grid item>
                    <Rating value={5} unselectable="true" size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                xs={5}
                item
                className="about-grid-item"
                style={{
                  border: "none",
                  borderRadius: 10,
                  padding: "20px 40px",
                  margin: "15px 30px",
                  position: "relative",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                }}
              >
                <img
                  className="about-item-img"
                  src="/src/assets/img/Image Placeholder (4).png"
                  alt=""
                />
                <p className="about-item-content">
                  &quot;Lorem ipsum dolor sit amet, consec um dolorum dolor sit
                  amet, conseeet,consec tetum dolor sit amet, conseeum dolor sit
                  amet, conseum dolor sit amet, consenamet, consec tum dolor sit
                  amet, conseolor sit amur adipiscinamet,nsetur adipisciname
                </p>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <p className="about-item-name">Eco Susiloantio</p>
                    <p className="about-item-job">Regional Mobility Manager</p>
                  </Grid>
                  <Grid item>
                    <Rating value={5} unselectable="true" size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                xs={5}
                item
                className="about-grid-item"
                style={{
                  border: "none",
                  borderRadius: 10,
                  padding: "20px 40px",
                  margin: "15px 30px",
                  position: "relative",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                }}
              >
                <img
                  className="about-item-img"
                  src="/src/assets/img/Image Placeholder (4).png"
                  alt=""
                />
                <p className="about-item-content">
                  &quot;Lorem ipsum dolor sit amet, consec um dolorum dolor sit
                  amet, conseeet,consec tetum dolor sit amet, conseeum dolor sit
                  amet, conseum dolor sit amet, consenamet, consec tum dolor sit
                  amet, conseolor sit amur adipiscinamet,nsetur adipisciname
                </p>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <p className="about-item-name">Eco Susiloantio</p>
                    <p className="about-item-job">Regional Mobility Manager</p>
                  </Grid>
                  <Grid item>
                    <Rating value={5} unselectable="true" size="small" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                xs={5}
                item
                className="about-grid-item"
                style={{
                  border: "none",
                  borderRadius: 10,
                  padding: "20px 40px",
                  margin: "15px 30px",
                  position: "relative",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                }}
              >
                <img
                  className="about-item-img"
                  src="/src/assets/img/Image Placeholder (4).png"
                  alt=""
                />
                <p className="about-item-content">
                  &quot;Lorem ipsum dolor sit amet, consec um dolorum dolor sit
                  amet, conseeet,consec tetum dolor sit amet, conseeum dolor sit
                  amet, conseum dolor sit amet, consenamet, consec tum dolor sit
                  amet, conseolor sit amur adipiscinamet,nsetur adipisciname
                </p>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <p className="about-item-name">Eco Susiloantio</p>
                    <p className="about-item-job">Regional Mobility Manager</p>
                  </Grid>
                  <Grid item>
                    <Rating value={5} unselectable="true" size="small" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="faq-container">
            <p className="faq-txt">
              Frequently Asked{" "}
              <span style={{ color: "rgb(4, 168, 132)" }}>Questions</span>
            </p>
            <p className="faq-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes etur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <div>
              {faqs.map((faq, index) => (
                <>
                  <div
                    id={index}
                    className="faq-collapse"
                    onClick={(e) => handleCollapseClick(e, index)}
                  >
                    <Grid container flexDirection={"row"} alignItems={"center"}>
                      <Grid item xs={11}>
                        <p className="collapse-title">{faq.title}</p>
                        <p className="collapse-content">{faq.content}</p>
                      </Grid>
                      <Grid item xs={1}>
                        <ArrowDropDown
                          style={{ float: "right" }}
                          fontSize="large"
                        />
                        {/* <ArrowDropUp
                          style={{ float: "right" }}
                          fontSize="large"
                        /> */}
                      </Grid>
                    </Grid>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="blog-container">
            <p className="blog-txt">
              Blog And{" "}
              <span style={{ color: "rgb(4, 168, 132)" }}>Articles</span>
            </p>
            <p className="blog-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes etur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
            <div style={{ padding: "50px 0" }}>
              <Grid container justifyContent={"center"}>
                {blogs.map((blog) => (
                  <>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      style={{
                        borderRadius: "20px",
                        border: "1px solid transparent",
                        padding: "15px",
                      }}
                      sx={{
                        "&:hover": {
                          border: "1px solid rgb(4, 168, 132) !important",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                        },
                      }}
                    >
                      <Grid container>
                        <img
                          src="/src/assets/img/Articles.png"
                          alt=""
                          style={{
                            width: "100%",
                            height: "50%",
                          }}
                        />
                        <Button
                          style={{
                            color: "rgb(4,168,132)",
                            fontWeight: "bold",
                            textTransform: "none",
                          }}
                        >
                          {blog.type}
                        </Button>
                        <h2>{blog.title}</h2>
                        <h3
                          style={{
                            color: "grey",
                            fontWeight: "100",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "5px",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            <MessageOutlined
                              style={{ color: "rgb(4, 168, 132)" }}
                            />
                          </span>
                          {blog.comments}
                          <span>
                            <RemoveRedEye
                              style={{ color: "rgb(4, 168, 132)" }}
                            />
                          </span>
                          {blog.views}
                          <span>
                            <Watch style={{ color: "rgb(4, 168, 132)" }} />
                          </span>
                          {blog.time}
                        </h3>
                        <p>{blog.content}</p>
                      </Grid>
                      <input
                        className="blog-learn"
                        type="submit"
                        value="Learn More"
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
            </div>
          </div>
          <div className="contact-container">
            <p className="contact-txt">
              <span style={{ color: "rgb(4, 168, 132)" }}>Contact</span> Us
            </p>
            <p className="contact-txt-below">
              Lorem ipsum dolor sit amet, consec tetur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes etur adipisicinamet, consec
              tetur adipisicing elig. Vivamus hes ndrerit suscipit g elig.
              Vivamus hes ndrerit suscipit egestas.
            </p>
          </div>
          <Grid container>
            <Grid item lg={5} xs={12}>
              <img
                src="/src/assets/img/Image Placeholder (6).png"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </Grid>
            <Grid
              item
              lg={7}
              xs={12}
              padding={"40px"}
              sx={{
                backgroundColor: "rgb(4,168,132)",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              <Grid container justifyContent={"center"}>
                <Grid item lg={12} xs={12}>
                  <p className="contact-label">Full name</p>
                  <input
                    className="contact-input"
                    placeholder="Enter your full name"
                    style={{width: "100%"}}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <p className="contact-label">Email</p>
                  <input
                    className="contact-input"
                    placeholder="Enter your email"
                    style={{width: "100%"}}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <p className="contact-label">Message</p>
                  <input
                    className="contact-input"
                    placeholder="Enter your message"
                    style={{width: "100%"}}
                  />
                </Grid>
              </Grid>
              <input
                type="button"
                className="contact-readMore"
                value="Read More"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
