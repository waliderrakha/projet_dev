package ehtp.pfe.Projetservice.controller;

import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import ehtp.pfe.Projetservice.services.projetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@RequestMapping(value = "projets")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class projetController {
    @Autowired
    private ProjetRepository projetRepository;
    @Autowired
    private projetService projetService;


    @GetMapping("/projets")
    public List<Projet> getAllProjet(){
        return projetRepository.findAll();

    }

    @PostMapping("/createProjet")
    public Projet createConge ( @RequestBody Projet projet) {

        return projetRepository.save(projet);
    }

    @GetMapping("/projet/{id}")
    public ResponseEntity<Projet> findById(@PathVariable("id") Long id) {
        Optional<Projet> projet = projetRepository.findById(id);
        //System.out.println(projet);
        if (projet.isPresent())
            return new ResponseEntity<Projet>(projet.get(), HttpStatus.OK);
        else
            return new ResponseEntity<Projet>(HttpStatus.NO_CONTENT);

    }





    @DeleteMapping("/deleteProjet/{id}")
    public ResponseEntity<Projet> deleteProjet (@PathVariable("id") Long id) {
        Optional<Projet> projet = projetRepository.findById(id);
        projet.get().setClient(null);
        if (projet.isPresent()) {
            projetRepository.delete(projet.get());
            return new ResponseEntity<Projet>(projet.get(), HttpStatus.ACCEPTED);
        } else
            return new ResponseEntity<Projet>(HttpStatus.NOT_ACCEPTABLE);
    }

    @PostMapping("/projet/update")
    public ResponseEntity<Projet> update(@RequestBody Projet projet) {
        try {
            Projet projet1=projetRepository.findById(projet.getId()).get();
            projet1=projet;
            projetService.saveProjet(projet1);
            return new ResponseEntity<Projet>(projet1, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<Projet>(HttpStatus.NOT_ACCEPTABLE);
        }

    }


}
