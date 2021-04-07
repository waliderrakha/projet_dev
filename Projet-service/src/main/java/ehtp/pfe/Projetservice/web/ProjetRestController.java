package ehtp.pfe.Projetservice.web;

import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.feign.ClientRestClient;
import ehtp.pfe.Projetservice.model.Client;
import ehtp.pfe.Projetservice.repository.PhaseRepository;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjetRestController {
    private ProjetRepository projetRepository;
    private PhaseRepository phaseRepository;
    private ClientRestClient clientRestClient;

    public ProjetRestController(ProjetRepository projetRepository, PhaseRepository phaseRepository, ClientRestClient clientRestClient) {
        this.projetRepository = projetRepository;
        this.phaseRepository = phaseRepository;
        this.clientRestClient = clientRestClient;
    }




    @GetMapping(path = "/fullProjet/{id}")
    public Projet getProjet(@PathVariable Long id){
        Projet projet=projetRepository.findById(id).get();
        Client client=clientRestClient.getClientById(projet.getClientId());
        projet.setClient(client);

        return  projet;


    }
}
