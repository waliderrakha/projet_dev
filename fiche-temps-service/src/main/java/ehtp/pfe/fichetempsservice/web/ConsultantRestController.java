package ehtp.pfe.fichetempsservice.web;

import com.fasterxml.jackson.databind.JsonMappingException;
import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.fiegn.ConsultantRestClient;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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
