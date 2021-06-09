package ehtp.pfe.fichetempsservice.entities;

import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class FicheTemp {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private int annee;
    private int mois;
    private String statut="non valide";
    @OneToMany(mappedBy = "ficheTemp")
    private List<LigneFiche> lfiche=new ArrayList<>();
    private Long idSeamineConsultant;
    @Transient
    private SemaineConsultant semaineConsultant;
    private double tothr;

    public FicheTemp(Long id){
        this.id=id;

    }


}
