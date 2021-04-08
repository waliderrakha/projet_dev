package ehtp.pfe.fichetempsservice.model;

import lombok.Data;

@Data
public class SemaineConsultant {
    private Long id;
    private Consultant consultant;
    private Semaine semaine;
    private String etat;
}
