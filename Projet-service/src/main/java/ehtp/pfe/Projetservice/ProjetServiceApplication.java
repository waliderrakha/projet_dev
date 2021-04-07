package ehtp.pfe.Projetservice;

import ehtp.pfe.Projetservice.entities.Phase;
import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.feign.ClientRestClient;
import ehtp.pfe.Projetservice.model.Client;
import ehtp.pfe.Projetservice.model.Contact;
import ehtp.pfe.Projetservice.repository.PhaseRepository;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.PagedModel;

import java.util.Date;

@SpringBootApplication
@EnableFeignClients
public class ProjetServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProjetRepository projetRepository,
							PhaseRepository phaseRepository,
							ClientRestClient clientRestClient){return
			args -> {

				System.out.println("***********client-------------------");
				Client client=clientRestClient.getClientById(1L);
				System.out.println(client.getEmail());
				System.out.println(client.getId());
				System.out.println(client.getAdressLiv());
				System.out.println(client.getAdressSiege());
				System.out.println(client.getChefProjet());
				System.out.println(client.getOrganisation());
				System.out.println(client.getPays());
				System.out.println(client.getContacts());


				System.out.println("***********contact-------------------");
				Contact contact=clientRestClient.getContactById(1L);
				System.out.println(contact.getId());
				System.out.println(contact.getClient());
				System.out.println(contact.getNom());
				System.out.println(contact.getTel_mobile());

				System.out.println("***********Projet-------------------");

				Projet p1=projetRepository.save(new Projet(null,"application web","bisness application",new Date(),new Date(),new Date(),"PA","en cours","active",10000,null,client.getId(),null));
				Projet p2=projetRepository.save(new Projet(null,"projet2","bisness application",new Date(),new Date(),new Date(),"PA","en cours","active",20000,null,client.getId(),null));

				System.out.println("***********Phase-------------------");
				phaseRepository.save(new Phase(null,"conception","phase1","les diagrammes de classes",new Date(),new Date(),20,p1));
				phaseRepository.save(new Phase(null,"dev","phase2","dev des classes",new Date(),new Date(),20,p1));
				phaseRepository.save(new Phase(null,"test","phase3","test unitaire",new Date(),new Date(),20,p2));
				phaseRepository.save(new Phase(null,"deploiement","phase4","google cloud",new Date(),new Date(),20,p2));
				System.out.println("***********PageModel-------------------");
				PagedModel<Client> clientPagedModel=clientRestClient.pageClients(0,2);

				clientPagedModel.forEach(p->{
					System.out.println(p.getOrganisation());

				});
				System.out.println("***********liste projet-------------------");

				projetRepository.findAll().forEach(c
						->{System.out.println(c.getTitre());}
				);



			};

	}
}
