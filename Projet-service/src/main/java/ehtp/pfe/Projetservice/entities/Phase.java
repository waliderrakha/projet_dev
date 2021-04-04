package ehtp.pfe.Projetservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Phase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String code;
    private String desc;
    private Date dateDebut;
    private Date dateFin;
    private  int nbrJour;
    @ManyToOne
    private Projet projet;


}
