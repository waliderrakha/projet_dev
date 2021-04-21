package ehtp.pfe.fichetempsservice.fiegn;

import ehtp.pfe.fichetempsservice.model.Phase;
import ehtp.pfe.fichetempsservice.model.Semaine;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
@FeignClient(name = "PROJET-PHASE-SERVICE")
public interface ProjetRestClient {
    @GetMapping(path = "/phases/{id}?projection=webPhase")
    Phase getPhaseById(@PathVariable(name = "id") Long id);


    @GetMapping(path = "/phases/{id}")
    Semaine getPhaseByIds(@PathVariable(name = "id") Long id);
}
