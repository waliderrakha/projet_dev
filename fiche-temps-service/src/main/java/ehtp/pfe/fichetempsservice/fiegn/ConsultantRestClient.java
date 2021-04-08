package ehtp.pfe.fichetempsservice.fiegn;

import ehtp.pfe.fichetempsservice.model.Semaine;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
@FeignClient(name = "CONSULTANT-SERVICE")
public interface ConsultantRestClient {
    @GetMapping(path = "/semaineConsultants/{id}?projection=webSemaineConsultant")
    SemaineConsultant getSemainConsulatantById(@PathVariable(name = "id") Long id);


    @GetMapping(path = "/semaines/{id}")
    Semaine getContactById(@PathVariable(name = "id") Long id);
}
