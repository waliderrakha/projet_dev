package ehtp.pfe.fichetempsservice.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import ehtp.pfe.fichetempsservice.model.Phase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
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
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private FicheTemp ficheTemp;
    private Long idPhase;
    @Transient
    private Phase phase;



}
