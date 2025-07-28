package gm.cd.servicio;

import java.util.List;

import gm.cd.model.modelo.Docente;

public interface IDocenteServicio {
    
    public List<Docente> listarDocentes();

    public Docente buscarDocentePorId(Integer idDocente);

    public Docente guardarDocente(Docente docente);

    public void eliminarDocente (Docente docente);

}
