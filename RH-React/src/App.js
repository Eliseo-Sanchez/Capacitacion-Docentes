import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoDocentes from "./docentes/ListadoDocentes";
import Navegacion from "./plantilla/Navegacion";
import AgregarDocente from "./docentes/AgregarDocente";
import EditarDocente from "./docentes/EditarDocente";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoDocentes/>} />
          <Route exact path="/agregar" element={<AgregarDocente/>} />
          <Route exact path="/editar/:id" element={<EditarDocente/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
