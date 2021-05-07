package ehtp.pfe.clientservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "webClient",types = Client.class)
interface ClientProjection{
    public String getId();
    public String getOrganisation();
    public List<Contact>  getContacts();
    public String getCodePostal();
    public String getAdressLiv();
    public String getAdressSiege();
    public String getTelMobile();
    public String getVille();
    public String getPays();
    public String getTelFixe();
    public String getEmail();
    public String getRaisonSoc();
    public String getStatut();
    public String getUrlSoc();
    public String getFonction();
    public String getType();
    public String getNumContrat();
    public String getChefProjet();



}
