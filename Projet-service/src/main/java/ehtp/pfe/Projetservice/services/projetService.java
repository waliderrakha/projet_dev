package ehtp.pfe.Projetservice.services;

import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class projetService {
    @Autowired
    ProjetRepository projetRepository;

    public List<Projet> getAllProjets() {
        return projetRepository.findAll();
    }

    public Optional<Projet> findProjetById(Long id) {
        return projetRepository.findById(id);
    }
    public Projet saveProjet(Projet projet) {
        return projetRepository.save(projet);
    }

    public Projet updateProjet(Projet projet) {
        return projetRepository.save(projet);
    }

    public void deleteProjet(Projet projet) {
        if (projet != null)
            projetRepository.delete(projet);
    }




}
