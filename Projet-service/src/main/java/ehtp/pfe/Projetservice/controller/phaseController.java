package ehtp.pfe.Projetservice.controller;

import ehtp.pfe.Projetservice.entities.Phase;
import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.repository.PhaseRepository;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import ehtp.pfe.Projetservice.services.phaseService;
import ehtp.pfe.Projetservice.services.projetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
public class phaseController {
    @Autowired
    private PhaseRepository phaseRepository;
    @Autowired
    private phaseService phaseService ;
    @Autowired
    private ProjetRepository projetRepository;


    @GetMapping("/phases")
    public List<Phase> getAllPhases(){
        return phaseRepository.findAll();

    }
    @PostMapping("/createPhaseIdProjet/{id}")
    public Phase createPhase1 (@RequestBody Phase phase, @PathVariable("id") Long id ) {
        Projet projet=projetRepository.findById(id).get();
        phase.setProjet(projet);
        return phaseRepository.save(phase);
    }

    @PostMapping("/createPhaseId")
    public Phase createPhase (@RequestBody Phase phase, @RequestParam Long id ) {
        Projet projet=projetRepository.findById(id).get();
        phase.setProjet(projet);
        return phaseRepository.save(phase);
    }


    @GetMapping("/projetPhase/{id}")
    public Projet getProjetByPhase(@PathVariable("id") Long id){
        Optional<Phase> phase=phaseRepository.findById(id);
        if (phase.isPresent()) {
            return phase.get().getProjet();
        } else
            return null;


    }

    @PostMapping("/createPhase")
    public Phase createPhase (@Valid @RequestBody Phase phase) {

        return phaseRepository.save(phase);
    }

    @GetMapping("/phase/{id}")
    public ResponseEntity<Phase> findById(@PathVariable("id") Long id) {
        Optional<Phase> phase = phaseRepository.findById(id);
        //System.out.println(projet);
        if (phase.isPresent())
            return new ResponseEntity<Phase>(phase.get(), HttpStatus.OK);
        else
            return new ResponseEntity<Phase>(HttpStatus.NO_CONTENT);

    }






    @DeleteMapping("/deletePhase/{id}")
    public ResponseEntity<Phase> deletePhase (@PathVariable("id") Long id) {
        Optional<Phase> phase = phaseRepository.findById(id);
        if (phase.isPresent()) {
            phaseRepository.delete(phase.get());
            return new ResponseEntity<Phase>(phase.get(), HttpStatus.ACCEPTED);
        } else
            return new ResponseEntity<Phase>(HttpStatus.NOT_ACCEPTABLE);
    }

    @PostMapping("/phase/update")
    public ResponseEntity<Phase> update(@RequestBody Phase phase) {
        try {
            Phase phase1=phaseRepository.findById(phase.getId()).get();
            phase1=phase;
            phaseService.savePhase(phase1);
            return new ResponseEntity<Phase>(phase1, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<Phase>(HttpStatus.NOT_ACCEPTABLE);
        }

    }
}
