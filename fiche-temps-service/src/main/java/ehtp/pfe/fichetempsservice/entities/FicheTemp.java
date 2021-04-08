package ehtp.pfe.fichetempsservice.entities;

import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class FicheTemp {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int annee;
    private int mois;
    private String statut;
    @OneToMany(mappedBy = "ficheTemp")
    private Collection<LigneFiche> ligneFiches;
    private Long idSeamineConsultant;
    @Transient
    private SemaineConsultant semaineConsultant;

}
