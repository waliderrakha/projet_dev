package ehtp.pfe.fichetempsservice.Repository;

import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.entities.LigneFiche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface LigneFicheRepository extends JpaRepository<LigneFiche,Long> {
}
