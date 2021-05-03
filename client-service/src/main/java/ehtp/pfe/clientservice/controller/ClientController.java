package ehtp.pfe.clientservice.controller;

import ehtp.pfe.clientservice.entities.Client;
import ehtp.pfe.clientservice.exception.ResourceNotFoundException;
import ehtp.pfe.clientservice.repository.ClientRepository;
import ehtp.pfe.clientservice.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping(value = "clients")
@CrossOrigin("*")
@RestController
public class ClientController {
    @Autowired
    ClientService clientService;
    ClientRepository clientRepository;
    @GetMapping(value = "/findAll")
    public List<Client> findAll(){
        return clientService.findAll();
    }
    @GetMapping(value = "/find/{id}")
    public Client findByID (@PathVariable long id ){
        return clientService.findByID(id);
    }
    /*@GetMapping("/articles/{id}")
    public Client getArticleById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Client client =clientService.findByID(id);
        System.out.println(client);
        if(client==null) throw new ResourceNotFoundException("Le produit avec l'id " + id + " est INTROUVABLE. Écran Bleu si je pouvais.");

        return client;

    }*/
    @PostMapping(value = "/add")
    public void save(@RequestBody   Client client){
        clientService.save(client);
    }

}
