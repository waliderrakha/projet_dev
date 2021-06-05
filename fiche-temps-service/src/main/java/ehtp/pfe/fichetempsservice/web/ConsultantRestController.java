package ehtp.pfe.fichetempsservice.web;

import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.fiegn.ConsultantRestClient;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class ConsultantRestController {

    ConsultantRestClient consultantRestClient;
    FicheTempRepository ficheTempRepository;
    LigneFicheRepository ligneFicheRepository;

    public ConsultantRestController(ConsultantRestClient consultantRestClient, FicheTempRepository ficheTempRepository, LigneFicheRepository ligneFicheRepository) {
        this.consultantRestClient = consultantRestClient;
        this.ficheTempRepository = ficheTempRepository;
        this.ligneFicheRepository = ligneFicheRepository;
    }

    @GetMapping(path = "/fullFicheTemp/{id}")
    public FicheTemp getSemaineConsultant(@PathVariable Long id){
        FicheTemp fiche=ficheTempRepository.findById(id).get();

        SemaineConsultant sc=consultantRestClient.getSemainConsulatantById(fiche.getIdSeamineConsultant());
        fiche.setSemaineConsultant(sc);
        ficheTempRepository.save(fiche);

        return  fiche;


    }
}
