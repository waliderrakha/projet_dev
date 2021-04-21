package ehtp.pfe.Consultantservice.repository;

import ehtp.pfe.Consultantservice.entities.Consultant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface ConsultantRepository extends JpaRepository<Consultant,Long> {
    @RestResource(path = "/bynom")
    Page<Consultant> findByNomContains(@Param("n") String nom, Pageable pageable);
    @RestResource(path = "/byprenom")
    Page<Consultant> findByPrenomContains(@Param("p") String prenom, Pageable pageable);
    @RestResource(path = "/bytype")
    Page<Consultant> findByType(@Param("t") String type, Pageable pageable);



}
