package ehtp.pfe.clientservice.service.impl;

import ehtp.pfe.clientservice.entities.Client;
import ehtp.pfe.clientservice.repository.ClientRepository;
import ehtp.pfe.clientservice.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public void save(Client client) {
        clientRepository.save(client);

    }

    @Override
    public void deleteByID(long id) {
       clientRepository.deleteById(id);
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Client findByID(long id) {
        return clientRepository.findById(id).get();
    }

    @Override
    public Page<Client> findByOrganisation(String organisation, Pageable pageable) {
        return clientRepository.findByOrganisationContains(organisation,pageable);
    }
}
