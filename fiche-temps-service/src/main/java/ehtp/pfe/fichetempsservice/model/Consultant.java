package ehtp.pfe.fichetempsservice.model;

import lombok.Data;

@Data
public class Consultant {
    private Long id;
    private String nom;
    private String prenom;
    private String type;
    private String desc;
    private String telMobile;
    private String telFixe;
    private String email;
    private String fonction;
    private String formation;
    private  int nbreJour;
}
