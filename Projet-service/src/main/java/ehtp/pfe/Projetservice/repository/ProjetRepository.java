package ehtp.pfe.Projetservice.repository;

import ehtp.pfe.Projetservice.entities.Projet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource
public interface ProjetRepository extends JpaRepository<Projet,Long> {
    @RestResource(path = "/bytitre")
    Page<Projet> findByTitreContains(@Param("t") String nom, Pageable pageable);


}
