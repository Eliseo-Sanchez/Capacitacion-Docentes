package gm.cd.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gm.cd.model.modelo.Docente;
import gm.cd.repositorio.DocenteRepositorio;

@Service
public class DocenteServicio implements IDocenteServicio{

    @Autowired
    private DocenteRepositorio docenteRepositorio;

    @Override
    public List<Docente> listarDocentes() {
        return docenteRepositorio.findAll();
    }

    @Override
    public Docente buscarDocentePorId(Integer idDocente) {
        Docente docente = docenteRepositorio.findById(idDocente).orElse(null);
        return docente;
    }

    @Override
    public Docente guardarDocente(Docente docente) {
        return docenteRepositorio.save(docente);
    }

    @Override
    public void eliminarDocente(Docente docente) {
        docenteRepositorio.delete(docente);    
    }
    
}
