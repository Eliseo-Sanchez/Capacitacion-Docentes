import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListadoDocentes from "./docentes/ListadoDocentes";
import Navegacion from "./plantilla/Navegacion";
import AgregarDocente from "./docentes/AgregarDocente";
import EditarDocente from "./docentes/EditarDocente";
import LogIn from "./login/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" replace />} />
        <Route exact path="/login" element={<LogIn/>} />
        <Route exact path="/home" element={
          <div className="container">
            <Navegacion />
            <ListadoDocentes/>
          </div>
        } />
        <Route exact path="/agregar" element={
          <div className="container">
            <Navegacion />
            <AgregarDocente/>
          </div>
        } />
        <Route exact path="/editar/:id" element={
          <div className="container">
            <Navegacion />
            <EditarDocente/>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
