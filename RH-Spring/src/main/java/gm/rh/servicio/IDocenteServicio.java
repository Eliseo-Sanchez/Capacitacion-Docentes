package gm.rh.servicio;

import java.util.List;

import gm.rh.model.modelo.Docente;

public interface IDocenteServicio {
    
    public List<Docente> listarDocentes();

    public Docente buscarDocentePorId(Integer idDocente);

    public Docente guardarDocente(Docente docente);

    public void eliminarDocente (Docente docente);

}
