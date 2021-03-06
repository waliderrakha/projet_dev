package ehtp.pfe.Projetservice.feign;

import ehtp.pfe.Projetservice.model.Client;
import ehtp.pfe.Projetservice.model.Contact;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.ws.rs.QueryParam;

@FeignClient(name = "CLIENT-CONTACT-SERVICE")
public interface ClientRestClient {
    @GetMapping(path = "/clients/{id}?projection=webClient")
    Client getClientById(@PathVariable(name = "id") Long id);
    @GetMapping(path = "/clients")
    PagedModel<Client> pageClients(@RequestParam(value = "page") int page, @RequestParam(value = "size") int size);

    @GetMapping(path = "/contacts/{id}?projection=webContact")
    Contact getContactById(@PathVariable(name = "id") Long id);
}
