package ehtp.pfe.Projetservice.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;

@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String organisation;
    private String codePostal;
    private String adressSiege;
    private String adressLiv;
    private String telMobile;
    private String ville;
    private String pays;
    private String telFixe;
    private String telFaxe;
    private String email;
    private String raisonSoc;
    private String statut;
    private String urlSoc;
    private String fonction;
    private String type;
    private String numContrat;
    private String chefProjet;
    private Collection<Contact> contacts;
}
