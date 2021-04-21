package ehtp.pfe.fichetempsservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
@Data
public class Phase {
    private Long id;
    private String titre;
    private String code;
    private String desc;
    private Date dateDebut;
    private Date dateFin;
    private  int nbrJour;
    private Projet projet;
}
