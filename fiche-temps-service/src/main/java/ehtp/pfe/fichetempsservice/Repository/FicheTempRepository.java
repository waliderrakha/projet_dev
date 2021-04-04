package ehtp.pfe.fichetempsservice.Repository;

import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface FicheTempRepository extends JpaRepository<FicheTemp,Long> {
}
