import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExcelReader from './ExcelReader';
import CardData from './components/CardData';
import JsonEditorComponent from './components/Json';
import MyComponent from './components/Json';
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
<ExcelReader/>
  </ThemeProvider>
);

export default App;
