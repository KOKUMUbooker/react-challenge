import { useState } from "react";
import { Box, Button } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
  DarkBlueEntity,
  LightBlueEntity,
  PinkEntity,
  PurpleEntity,
  RedEntity,
} from "./entities";
import { ImageDialogue } from "./components";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Parent container with fixed width & horizontal scroll */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflowX: "auto", // horizontal scrolling
        }}
      >
        {/* Inner container with fixed width */}
        <Box
          sx={{
            width: "1366px", // <-- Fixed width added to maintain UI width to ensure mobile devices still get to view the same item but with horizontal scroll
            minHeight: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<VisibilityRoundedIcon />}
            onClick={() => setShowModal(true)}
            sx={{
              position: "absolute",
              borderWidth: "0.15rem",
              top: "5%",
              right: "5%",
              borderRadius: "1.5rem",
              paddingY: ".5rem",
              paddingX: "1.5rem",
              fontWeight: 400,
              fontSize: "1.15rem",
            }}
          >
            View original
          </Button>

          {/* Entities */}
          <RedEntity styles={{ translate: "49% 0" }} />
          <PinkEntity styles={{ translate: "24.5%  -12.65%" }} />
          <PurpleEntity />
          <DarkBlueEntity styles={{ translate: "-24.5% -12.65%" }} />
          <LightBlueEntity styles={{ translate: "-49% 0" }} />
        </Box>
      </Box>

      <ImageDialogue
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default App;
