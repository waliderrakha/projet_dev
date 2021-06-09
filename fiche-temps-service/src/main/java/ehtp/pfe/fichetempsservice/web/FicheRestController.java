package ehtp.pfe.fichetempsservice.web;

import com.fasterxml.jackson.annotation.JacksonInject;
import com.fasterxml.jackson.databind.JsonMappingException;
import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.entities.LigneFiche;
import ehtp.pfe.fichetempsservice.fiegn.ConsultantRestClient;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.*;
import java.sql.SQLSyntaxErrorException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class FicheRestController {

    FicheTempRepository ficheTempRepository;
    LigneFicheRepository ligneFicheRepository;


    public FicheRestController(FicheTempRepository ficheTempRepository, LigneFicheRepository ligneFicheRepository) {
        this.ficheTempRepository = ficheTempRepository;
        this.ligneFicheRepository = ligneFicheRepository;
    }

    @PostMapping("/fiches1")
    public ResponseEntity<FicheTemp> createComm(@RequestBody FicheTemp fiche)
            throws JsonParseException, JsonMappingException, Exception{
        ficheTempRepository.save(fiche);
        //FicheTemp fiche1=new FicheTemp();
        fiche.getLfiche().forEach(c
                ->{
                LigneFiche ligneFiche=new LigneFiche(null,c.getNbrl(),c.getNbrmar(),c.getNbrmer(),c.getNbrj(),c.getNbrv(),
                        c.getNbrs(),c.getDesc(),"non valide",c.getIdProjet(),c.getIdPhase(),c.getProjet()
                        ,c.getPhase1(),fiche,null,c.getTthr(),c.getNbrh(),c.getChoix());
                    ligneFicheRepository.save(ligneFiche);
        }
        );
        ficheTempRepository.save(fiche);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/updateFiche")
    public ResponseEntity<FicheTemp>  createPhase1 (@RequestBody FicheTemp fiche, @RequestParam Long id ) {
        System.out.println("Update Comm with ID = " + id + "...");
        FicheTemp fiche1=ficheTempRepository.findById(id).get();
        List<LigneFiche> l=new ArrayList<>();

           ficheTempRepository.save(fiche1);
        fiche1.setAnnee(fiche.getAnnee());
        fiche1.setMois(fiche.getMois());
        fiche1.setTothr(fiche.getTothr());

        fiche1.getLfiche().forEach(c
                        ->{
                    ligneFicheRepository.delete(c);
                }
        );




        /*System.out.println(fiche1.get());
        System.out.println(id);
        System.out.println(fiche);
        ficheTempRepository.save(fiche1.get());*/


        fiche.getLfiche().forEach(c
                        ->{
                    LigneFiche ligneFiche=new LigneFiche(null,c.getNbrl(),c.getNbrmar(),c.getNbrmer(),c.getNbrj(),c.getNbrv(),
                            c.getNbrs(),c.getDesc(),c.getStatut(),c.getIdProjet(),c.getIdPhase(),c.getProjet()
                            ,c.getPhase1(),fiche1,null,c.getTthr(),c.getNbrh(),c.getChoix());
                    ligneFicheRepository.save(ligneFiche);
                }
        );
        //System.out.println(fiche2);
        ficheTempRepository.save(fiche1);


        /*phase.setProjet(projet);
        return phaseRepository.save(phase);*/

        return new ResponseEntity<>(HttpStatus.OK);



    }


}
