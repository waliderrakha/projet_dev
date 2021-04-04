package ehtp.pfe.Projetservice;

import ehtp.pfe.Projetservice.entities.Phase;
import ehtp.pfe.Projetservice.entities.Projet;
import ehtp.pfe.Projetservice.repository.PhaseRepository;
import ehtp.pfe.Projetservice.repository.ProjetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class ProjetServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProjetRepository projetRepository, PhaseRepository phaseRepository){return
			args -> {
				Projet p1=projetRepository.save(new Projet(null,"application web","bisness application",new Date(),new Date(),new Date(),"PA","en cours","active",10000,null));
				Projet p2=projetRepository.save(new Projet(null,"projet2","bisness application",new Date(),new Date(),new Date(),"PA","en cours","active",20000,null));


				phaseRepository.save(new Phase(null,"conception","phase1","les diagrammes de classes",new Date(),new Date(),20,p1));
				phaseRepository.save(new Phase(null,"dev","phase2","dev des classes",new Date(),new Date(),20,p1));
				phaseRepository.save(new Phase(null,"test","phase3","test unitaire",new Date(),new Date(),20,p1));
				phaseRepository.save(new Phase(null,"deploiement","phase4","google cloud",new Date(),new Date(),20,p1));

				projetRepository.findAll().forEach(c
						->{System.out.println(c.getTitre());}
				);

			};

	}
}