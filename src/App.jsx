import { createTheme, ThemeProvider } from '@mui/material/styles';

import HeaderMappings from './Headermapping';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const theme = createTheme({
  palette: {
    primary: {
      main: '#0033a0', // Blue
    },
    secondary: {
      main: '#0033a0', // Dark Blue
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
   
    <HeaderMappings/>
    </DndProvider>
  </ThemeProvider>
);

export default App;
