import { useState } from "react";
import Layout from "../../layouts";
import "swiper/css";
import "swiper/css/navigation";
import { Broccoli, Celery, Sunflower } from "../../constants/Images";
import Modal from "@mui/material/Modal";
import Draggable from "react-draggable";
import "./index.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Plants } from "../../constants/Plants";
import PlantModal from "../../components/Modal.jsx";
import { Box, Typography, Button, TextField } from "@mui/material/"; // Import Typography

const GardenMap = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); // Correct type for modalContent

  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(16);
  const [table, setTable] = useState([]);

  const handleOpen = (content) => {
    setOpen(true);
    setModalContent(content);
  };

  const handleClose = () => {
    setOpen(false);
    setModalContent(null); // Clear content when closing
  };

  const handleCreateTable = () => {
    const newTable = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => "")
    );
    setTable(newTable);
  };

  return (
    <Layout>
      <div className="container">
        <Swiper
          navigation={true}
          slidesPerView={5}
          modules={[Navigation, Pagination]}
          direction={"vertical"}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {Plants.map((plant) => (
            <SwiperSlide key={plant.id} onClick={() => handleOpen(plant.name)}>
              <img src={plant.image} alt={plant.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ flex: "1 1 60%" }}>
          <Box
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              type="number"
              label="Rows"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              sx={{ marginRight: "10px" }}
            />
            <TextField
              type="number"
              label="Columns"
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
              sx={{ marginRight: "10px" }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#279727" }}
              onClick={handleCreateTable}
            >
              Create Table
            </Button>
          </Box>

          <Box
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <table>
              <tbody>
                {table.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((_, colIndex) => (
                      <td key={colIndex}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>

        <PlantModal open={open} handleClose={handleClose}>
          <Typography>{modalContent}</Typography>
          <Box sx={{ display: "flex", gap: "12px", userSelect: "none" }}>
            <Draggable
            // axis="both"
            // onStart={(e, data) => console.log("Started:", e, data)}
            // onDrag={(e, data) => console.log("Dragging:", e, data)}
            // onStop={(e, data) => console.log("Stopped:", e, data)}
            >
              <Box sx={{ userSelect: "none" }}>
                <img src={Broccoli} width={80} height={80} alt="Broccoli" />
              </Box>
            </Draggable>
          </Box>
        </PlantModal>
      </div>
    </Layout>
  );
};

export default GardenMap;
