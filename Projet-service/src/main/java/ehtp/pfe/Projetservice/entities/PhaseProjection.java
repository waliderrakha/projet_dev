package ehtp.pfe.Projetservice.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.rest.core.config.Projection;

import javax.persistence.ManyToOne;
import java.util.Date;
@Projection(name = "webPhase",types = Phase.class)
public interface PhaseProjection {
    public Long getId();
    public String getTitre();
    public String getCode();
    public String getDesc();
    public Date getDateDebut();
    public Date getDateFin();
    public int getNbrJour();
    public Projet getProjet();
}
