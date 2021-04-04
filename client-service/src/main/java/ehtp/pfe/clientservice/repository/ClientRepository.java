
package ehtp.pfe.clientservice.repository;
import ehtp.pfe.clientservice.entities.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
@RepositoryRestResource
public interface ClientRepository extends JpaRepository<Client,Long> {
    @RestResource(path = "/byorg")
    Page<Client> findByOrganisationContains(@Param("o") String organisation, Pageable pageable);
    @RestResource(path = "/byville")
    Page<Client> findByVilleContains(@Param("v") String ville, Pageable pageable);
    @RestResource(path = "/bystatut")
    Page<Client> findByStatutContains(@Param("s") String Statut, Pageable pageable);
}
