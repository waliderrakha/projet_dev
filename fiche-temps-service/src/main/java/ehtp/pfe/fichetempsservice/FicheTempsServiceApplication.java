package ehtp.pfe.fichetempsservice;

import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.entities.LigneFiche;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class FicheTempsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FicheTempsServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(FicheTempRepository ficheTempRepository, LigneFicheRepository ligneFicheRepository){return
			args -> {


				FicheTemp f1=ficheTempRepository.save(new FicheTemp(null,2021,12,"nv",null));
				FicheTemp f2=ficheTempRepository.save(new FicheTemp(null,2021,12,"nv",null));
				FicheTemp f3=ficheTempRepository.save(new FicheTemp(null,2021,12,"nv",null));
				FicheTemp f4=ficheTempRepository.save(new FicheTemp(null,2021,12,"nv",null));
				FicheTemp f5=ficheTempRepository.save(new FicheTemp(null,2021,12,"nv",null));




				LigneFiche l1=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f2));
				LigneFiche l2=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f1));
				LigneFiche l3=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f3));
				LigneFiche l4=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f4));

				LigneFiche l5=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f2));
				LigneFiche l6=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f1));
				LigneFiche l7=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f3));
				LigneFiche l8=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",f4));

				ligneFicheRepository.findAll().forEach(c
						->{System.out.println(c.getDesc());}
				);

			};

	}




}