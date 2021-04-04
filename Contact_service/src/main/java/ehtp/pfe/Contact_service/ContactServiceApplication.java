package ehtp.pfe.Contact_service;

import ehtp.pfe.Contact_service.entities.Contact;
import ehtp.pfe.Contact_service.repository.ContactRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ContactServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner start(ContactRepository contactRepository){return
 args -> {
    contactRepository.save(new Contact(null,"errakha","walid","0696749343","0696749343","errakhawalid@gmail.com","info"));
	 contactRepository.save(new Contact(null,"Ait larbi","mouad","0696749343","0696749343","aitlarbimouad@gmail.com","info"));
    contactRepository.findAll().forEach(c
		->{System.out.println(c.toString());}
		);

	};

	}

}
