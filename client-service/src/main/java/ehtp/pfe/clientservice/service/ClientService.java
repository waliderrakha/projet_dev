package ehtp.pfe.clientservice.service;

import ehtp.pfe.clientservice.entities.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ClientService {
    public void save(Client client);
    public void deleteByID(long id );
    public List<Client> findAll() ;
    public  Client findByID(long id );
    public Page<Client> findByOrganisation(String organisation, Pageable pageable);
}
