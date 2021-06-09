package ehtp.pfe.fichetempsservice.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import ehtp.pfe.fichetempsservice.model.Phase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class LigneFiche {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double nbrl;
    private  double nbrmar;
    private  double nbrmer;
    private  double nbrj;
    private  double nbrv;
    private  double nbrs;
    private String desc;
    private String statut;
    private Long idProjet;
    private Long idPhase;
    private String projet;
    private String phase1;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private FicheTemp ficheTemp;
    @Transient
    private Phase phase;
    private double tthr;
    private double nbrh;
    private String choix;



}
