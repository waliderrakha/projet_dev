package ehtp.pfe.clientservice;

import ehtp.pfe.clientservice.entities.Client;
import ehtp.pfe.clientservice.entities.Contact;
import ehtp.pfe.clientservice.repository.ClientRepository;
import ehtp.pfe.clientservice.repository.ContactRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class ClientServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ClientRepository clientRepository, ContactRepository contactRepository, RepositoryRestConfiguration restConfiguration) {
		return args -> {
			restConfiguration.exposeIdsFor(Client.class);
			restConfiguration.exposeIdsFor(Contact.class);

			Client client1=clientRepository.save(new Client(null, "EHTP", "20000", "adress1", "adress2", "0696749343",
					"settat", "maroc", "0696749343", "0696749343", "errakhawaid@gmail.com", "12345", "active",null,"url","info","interne","1234","walid"));

			Client client2=clientRepository.save(new Client(null, "Business app", "20000", "adress1", "adress2", "0696749343",
					"casa", "maroc", "0696749343", "0696749343", "errakhawaid@gmail.com", "12345", "active",null,"url","info","interne","1234","walid"));

			Contact contact1=contactRepository.save(new Contact(null,"errakha","walid","0696749343","0696749343",
					"errakhawalid@gmail.com","info",client1));
			Contact contact3=contactRepository.save(new Contact(null,"errakha","aymane","0696749343","0696749343",
					"errakhawalid@gmail.com","info",client1));


			Contact contact2=contactRepository.save(new Contact(null,"Ait larbi","mouad","0696749343",
					"0696749343","aitlarbimouad@gmail.com","info",client2));
			Contact contact4=contactRepository.save(new Contact(null,"jarmati","amin","0696749343","0696749343",
					"errakhawalid@gmail.com","info",client2));
			clientRepository.findAll().forEach(p -> {
				System.out.println(p.getOrganisation());
			});

		};

	}
}
