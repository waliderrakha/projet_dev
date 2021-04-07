package ehtp.pfe.clientservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "webContact",types = Contact.class)
interface ContactProjection{
    public String getNom();
    public String getPrenom();
    public Client getClient();
    public String getId();
    public String getEmail();
    public String getTel_fixe();
    public String getTel_mobile();
    public String getDep();


}
