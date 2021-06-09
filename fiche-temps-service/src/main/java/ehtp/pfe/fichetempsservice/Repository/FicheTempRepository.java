package ehtp.pfe.fichetempsservice.Repository;

import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface FicheTempRepository extends JpaRepository<FicheTemp,Long> {

    @RestResource(path = "/byusername")
    Page<FicheTemp> findByUsername(@Param("u") String username, Pageable pageable);

}
