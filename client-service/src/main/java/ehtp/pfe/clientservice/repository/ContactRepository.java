package ehtp.pfe.clientservice.repository;
import ehtp.pfe.clientservice.entities.Contact;
import jdk.Exported;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource()
@CrossOrigin("*")
public interface ContactRepository extends JpaRepository<Contact,Long> {

    @RestResource(path = "/bynom")
    Page<Contact> findByNomContains(@Param("n") String nom, Pageable pageable);
    @RestResource(path = "/byprenom")
    Page<Contact> findByPrenomContains(@Param("p") String prenom, Pageable pageable);
    @RestResource(path = "/bydep")
    Page<Contact> findByDepContains(@Param("d") String dep, Pageable pageable);
}
