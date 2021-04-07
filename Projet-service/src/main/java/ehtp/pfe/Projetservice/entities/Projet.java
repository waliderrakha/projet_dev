package ehtp.pfe.Projetservice.entities;

import ehtp.pfe.Projetservice.model.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Projet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String desc;
    private Date dateDebut;
    private Date dateFin;
    private Date dateReception;
    private String type;
    private String statut;
    private String active;
    private double budget;
    @OneToMany(mappedBy = "projet")
    private Collection<Phase> phases;
    private long clientId;
    @Transient
    private Client client;
}
