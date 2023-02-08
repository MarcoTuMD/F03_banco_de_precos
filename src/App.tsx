import React from 'react';
import GlobalContext from './wrappers/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { ptBR } from '@mui/x-data-grid';
import { ptBR as corePtBr } from '@mui/material/locale';
import PrivateRoute from './wrappers/PrivateRoute';
import Login from './pages/Login';
import ExpenseMonitoring from './pages/ExpenseMonitoring';
import Fail from './pages/Fail';

const theme = createTheme(
  corePtBr,
  ptBR
);

function App() {
  document.title = "Monitoramento de Despesas";
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ExpenseMonitoring />} />
            <Route path="/fail" element={<Fail />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;
