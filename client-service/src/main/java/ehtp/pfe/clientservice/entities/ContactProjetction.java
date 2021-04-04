package ehtp.pfe.clientservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

//@Projection(name = "webContact",types = Contact.class)
interface ContactProjection{
    public String getNom();
    public String getPrenom();
    public Client getClient();


}
