package gm.rh.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import gm.rh.model.modelo.Empleado;

public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer>{

}
