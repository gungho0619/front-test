import React, { useState } from "react";
import Layout from "../../layouts";
import "swiper/css";
import "swiper/css/navigation";
import {
  Broccoli,
  Celery,
  Sunflower,
  Cosmos,
  Cabbage,
} from "../../constants/Images";
import Modal from "@mui/material/Modal";
import Draggable from "react-draggable";
import "./index.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Plants } from "../../constants/Plants";
import PlantModal from "../../components/Modal.jsx";
import { Box, Typography, Button, TextField } from "@mui/material/";
import Plant from "../Plant1/index.jsx";

const GardenMap = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); // Initialize with empty string

  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [table, setTable] = useState([]);
  const [pos, setPos] = useState(null);

  const [selectedItem, setSelectedItem] = useState([]);

  const handleOpen = (content) => {
    setOpen(true);
    setModalContent(content);
  };

  const handleClose = () => {
    setOpen(false);
    setModalContent(""); // Clear content when closing
  };

  const handleCreateTable = () => {
    const newTable = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => "")
    );
    setTable(newTable);
  };

  const handlePick = (item) => {
    return () => {
      setSelectedItem((prevSelectedItems) => {
        const newSelectedItems = [...prevSelectedItems];
        if (pos !== null) {
          newSelectedItems[pos] = item;
        }
        return newSelectedItems;
      });
      handleClose();
    };
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
                      <td
                        key={rowIndex * columns + colIndex}
                        className={
                          pos === rowIndex * columns + colIndex
                            ? "td_clicked"
                            : ""
                        }
                        onClick={() => {
                          setPos(rowIndex * columns + colIndex);
                        }}
                      >
                        {selectedItem &&
                          selectedItem[rowIndex * columns + colIndex] && (
                            <img
                              src={
                                selectedItem[rowIndex * columns + colIndex]
                                  .image
                              }
                              alt={
                                selectedItem[rowIndex * columns + colIndex].name
                              }
                              width={100}
                              height={100}
                            />
                          )}
                      </td>
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
            <Box onClick={handlePick(Plants[0])}>
              <img
                src={Plants[0].image}
                width={80}
                height={80}
                alt="Broccoli"
              />
            </Box>
            <Box onClick={handlePick(Plants[1])}>
              <img src={Plants[1].image} width={80} height={80} alt="Celery" />
            </Box>
            <Box onClick={handlePick(Plants[2])}>
              <img
                src={Plants[2].image}
                width={80}
                height={80}
                alt="Sunflower"
              />
            </Box>
            <Box onClick={handlePick(Plants[3])}>
              <img src={Plants[3].image} width={80} height={80} alt="Cosmos" />
            </Box>
            <Box onClick={handlePick(Plants[4])}>
              <img src={Plants[4].image} width={80} height={80} alt="Cabbage" />
            </Box>
          </Box>
        </PlantModal>
      </div>
    </Layout>
  );
};

export default GardenMap;
