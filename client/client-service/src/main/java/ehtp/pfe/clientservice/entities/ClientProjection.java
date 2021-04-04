package ehtp.pfe.clientservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

//@Projection(name = "webClient",types = Client.class)
interface ClientProjection{
    public String getOrganisation();
    public List<Contact>  getContacts();


}