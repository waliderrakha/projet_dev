package ehtp.pfe.Projetservice.services;

import ehtp.pfe.Projetservice.entities.Phase;
import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.repository.PhaseRepository;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
@Service
public class phaseService {
    @Autowired
    PhaseRepository phaseRepository;
    @Autowired
    ProjetRepository projetRepository;

    public List<Phase> getAllphases() {
        return phaseRepository.findAll();
    }

    public Optional<Phase> findPhaseById(Long id) {
        return phaseRepository.findById(id);
    }
    public Phase savePhase(Phase phase) {
        return phaseRepository.save(phase);
    }

    public Phase updatePhase(Phase phase) {
        return phaseRepository.save(phase);
    }

    public void deletePhase(Phase phase) {
        if (phase != null)
            phaseRepository.delete(phase);
    }

    public Collection<Phase> findPhaseByIdProjet(Long id)
    { Projet projet = projetRepository.findById(id).get();
        return projet.getPhases();

    }
}
