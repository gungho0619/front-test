import Layout from "../../layouts";
import { Grid } from "@mui/material";
import "./index.css";

const data = [
  {
    img: "/src/assets/img/Rectangle.png",
    name: "Knowout Rose",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (1).png",
    name: "Onion",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (2).png",
    name: "Shallot",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (3).png",
    name: "Bok Choy",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (4).png",
    name: "Brocolli",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (5).png",
    name: "Cabbage",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (6).png",
    name: "Kale",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (7).png",
    name: "Cosmos",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
  {
    img: "/src/assets/img/Rectangle (8).png",
    name: "Knowout Rose",
    sun: "Full Sun",
    water: "Water/1 Week",
    tolerant: "Tolerant",
    postedBy: "Posted by X Builder",
    price: "$45,545",
  },
];

const Plant = () => {
  return (
    <Layout>
      <div>
        <div>
          <div className="plant-topimg">
            <div style={{ paddingTop: 180, textAlign: "center" }}>
              <p className="search-txt">Search Your Ideal Plant</p>
              <p className="search-txt-below">
                Lorem ipsum dolor sit aec tetur adipisicing elig.
                Vivamus hes ndrerit suscipit emet, consec tetur adipisicing elig.
                Vivamus hes ndrerit suscipit egestas.
              </p>
              <input
                className="input"
                placeholder="Search your plant name..."
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "50px 0" }}>
          <Grid container justifyContent={"space-between"}>
            {data.map((one) => (
              <>
              <Grid item lg={4}>
                <Grid
                  style={{
                    borderRadius: "20px",
                    border: "1px solid lightgray",
                    padding: "15px",
                    margin: "20px auto 20px auto",
                    width: "300px",
                    height: "400px"
                  }}
                  sx={{
                    "&:hover": {
                      border: "1px solid rgb(4, 168, 132) !important",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
                    },
                  }}
                >
                  <img
                    src={one.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "50%",
                    }}
                  />
                  <h2>{one.name}</h2>
                  <h3
                    style={{
                      color: "grey",
                      fontWeight: "100",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{one.sun}</span>
                    <span>{one.water}</span>
                    <span>{one.tolerant}</span>
                  </h3>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"space-around"}
                  >
                    <Grid item lg={6}>
                      <h4 style={{ color: "grey", fontWeight: "100" }}>
                        {one.postedBy}
                      </h4>
                    </Grid>
                    <Grid item lg={6}>
                      <div
                        style={{
                          fontSize: "20px",
                          letterSpacing: "1px",
                          color: "white",
                          background: "grey",
                          padding: "10px",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        {one.price}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Plant;
