package ehtp.pfe.Consultantservice.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "webSemaineConsultant",types = SemaineConsultant.class)
interface SemaineConsultantProjection {
    public Consultant getConsultant();
    public Semaine getSemaine();
    public Long getId();
    public String getEtat();
}
