package ehtp.pfe.Consultantservice.repository;

import ehtp.pfe.Consultantservice.entities.Consultant;
import ehtp.pfe.Consultantservice.entities.Semaine;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface SemaineRepository extends JpaRepository<Semaine,Long> {
    @RestResource(path = "/bycode")
    Page<Consultant> findByCodeContains(@Param("c") String code, Pageable pageable);
    @RestResource(path = "/bydescr")
    Page<Consultant> findByDescrContains(@Param("d") String descr, Pageable pageable);

}
