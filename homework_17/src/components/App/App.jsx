import { Container, Box } from "@mui/material";

import Theme from "../../context/Theme";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ToggleButton from "../ToggleButton/ToggleButton";

function App() {

  return (
    <>
      <Theme>
        <Container sx={{ m: "100px auto", width: "900px" }} >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}>

            <HeaderTitle />
            <ToggleButton />

          </Box>
        </Container>
      </Theme>
    </>
  )
}

export default App
