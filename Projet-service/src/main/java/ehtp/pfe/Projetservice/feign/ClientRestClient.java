package ehtp.pfe.Projetservice.feign;

import ehtp.pfe.Projetservice.model.Client;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.ws.rs.QueryParam;

@FeignClient(name = "CLIENT-CONTACT-SERVICE")
public interface ClientRestClient {
    @GetMapping(path = "/clients/{id}")
    Client getClientById(@PathVariable(name = "id") Long id);
    /*@GetMapping(path = "/clients")
    PagedModel<Client> pagePClients(@QueryParam(value = "page") int page,@QueryParam(value = "size") int size);*/
}
