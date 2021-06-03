package ehtp.pfe.secservice.secr.repo;

import ehtp.pfe.secservice.secr.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


public interface AppUserRepository extends JpaRepository<AppUser,Long> {
    AppUser findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
