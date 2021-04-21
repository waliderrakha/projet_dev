package ehtp.pfe.clientservice.entities;





import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min=2,max = 20)
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
    @OneToMany(mappedBy = "client")
    private Collection<Contact> contacts;
    private String urlSoc;
    private String fonction;
    private String type;
    private String numContrat;
    private String chefProjet;

}
