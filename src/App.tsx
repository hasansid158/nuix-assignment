
import Home from './pages/home/Home';

import { Container, Box } from '@mui/material';

const App = () => {
  return (
    <Box
      backgroundColor='common.background'
      minHeight='100dvh'
    >
      <Container>
        <Home />
      </Container>
    </Box>
  );
}

export default App
