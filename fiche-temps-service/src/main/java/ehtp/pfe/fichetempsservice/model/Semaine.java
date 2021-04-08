package ehtp.pfe.fichetempsservice.model;

import lombok.Data;

import java.util.Date;
@Data
public class Semaine {
    private Long id;
    private String descr;
    private Date datedebut;
    private Date dateFin;
    private String code;
    private String annee;
}
