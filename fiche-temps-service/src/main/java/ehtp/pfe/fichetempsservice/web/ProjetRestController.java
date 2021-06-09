package ehtp.pfe.fichetempsservice.web;

import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.entities.LigneFiche;
import ehtp.pfe.fichetempsservice.fiegn.ConsultantRestClient;
import ehtp.pfe.fichetempsservice.fiegn.ProjetRestClient;
import ehtp.pfe.fichetempsservice.model.Phase;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.HdrHistogram.PackedHistogram;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class ProjetRestController {
    ProjetRestClient projetRestClient;
    FicheTempRepository ficheTempRepository;
    LigneFicheRepository ligneFicheRepository;

    public ProjetRestController(ProjetRestClient projetRestClient, FicheTempRepository ficheTempRepository, LigneFicheRepository ligneFicheRepository) {
        this.projetRestClient = projetRestClient;
        this.ficheTempRepository = ficheTempRepository;
        this.ligneFicheRepository = ligneFicheRepository;
    }
    @GetMapping(path = "/fullLigneFiche/{id}")
    public LigneFiche getLigneFiche(@PathVariable Long id){
        LigneFiche ligneFiche=ligneFicheRepository.findById(id).get();

        Phase phase=projetRestClient.getPhaseById(ligneFiche.getIdPhase());
        ligneFiche.setPhase(phase);
        ligneFicheRepository.save(ligneFiche);
        return ligneFiche;


    }
}
