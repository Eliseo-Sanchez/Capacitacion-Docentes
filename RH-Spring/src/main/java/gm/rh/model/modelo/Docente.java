package gm.rh.model.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "docente")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Docente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idDocente;
    String nombre;
    String departamento;
    String sueldo;

}
