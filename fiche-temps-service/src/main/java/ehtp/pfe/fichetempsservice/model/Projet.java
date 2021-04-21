package ehtp.pfe.fichetempsservice.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
@Data
public class Projet {
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
    private Collection<Phase> phases;

}
