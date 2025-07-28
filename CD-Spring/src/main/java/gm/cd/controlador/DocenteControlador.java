package gm.cd.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gm.cd.excepcion.RecursoNoEncontradoExcepcion;
import gm.cd.model.modelo.Docente;
import gm.cd.servicio.IDocenteServicio;

@RestController
@RequestMapping("cd-app")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class DocenteControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(DocenteControlador.class);

    @Autowired
    private IDocenteServicio docenteServicio;

    //---------------------------------------------------------------------------------
    
    @GetMapping("/docentes")
    public List<Docente> obtenerDocentes (){
        var docentes = docenteServicio.listarDocentes();
        docentes.forEach((docente -> logger.info(docente.toString())));
        return docentes;
    }

    @PostMapping("/docentes")
    public Docente agregarDocente(@RequestBody Docente docente) {
        logger.info("Docente a agregar: " + docente);
        return docenteServicio.guardarDocente(docente);
    }

    @GetMapping("/docentes/{id}")
    public ResponseEntity<Docente> obtenerDocentePorId(@PathVariable Integer id){
        Docente docente = docenteServicio.buscarDocentePorId(id);
        if (docente == null)
            throw new RecursoNoEncontradoExcepcion("No se encontró el docente id: "+id);
        return ResponseEntity.ok(docente);
    }

    @PutMapping("/docentes/{id}")
    public ResponseEntity<Docente> actualizarDocente(@PathVariable Integer id, @RequestBody Docente docenteRecibido){
        Docente docente = docenteServicio.buscarDocentePorId(id);
        if (docente == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe: "+id);
        docente.setNombre(docenteRecibido.getNombre());
        docente.setDepartamento(docenteRecibido.getDepartamento());
        docente.setSueldo(docenteRecibido.getSueldo());
        docenteServicio.guardarDocente(docente);
        return ResponseEntity.ok(docente);
    }

    @DeleteMapping("/docentes/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarDocente(@PathVariable Integer id){
        Docente docente = docenteServicio.buscarDocentePorId(id);
        if(docente == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe: " +id);
        docenteServicio.eliminarDocente(docente);
        // Json {"eliminado", "true"}
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
