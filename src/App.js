import './App.css';
import AppBar from './Components/NavBar';
import { Grid, Box } from "@mui/material"
import MainComponent from './Components/MainComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Grid>
      <Router>
        <AppBar />
        <Routes>
          <Route exact path='/' element={<MainComponent />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
