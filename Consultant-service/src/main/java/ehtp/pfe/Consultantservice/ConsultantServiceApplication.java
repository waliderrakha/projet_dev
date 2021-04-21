package ehtp.pfe.Consultantservice;

import ehtp.pfe.Consultantservice.entities.Consultant;
import ehtp.pfe.Consultantservice.entities.Semaine;
import ehtp.pfe.Consultantservice.entities.SemaineConsultant;
import ehtp.pfe.Consultantservice.repository.ConsultantRepository;
import ehtp.pfe.Consultantservice.repository.SemaineRepository;
import ehtp.pfe.Consultantservice.repository.SemaineconsultantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;

@SpringBootApplication
public class ConsultantServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConsultantServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner start(ConsultantRepository consultantRepository,
							SemaineRepository semaineRepository,
							SemaineconsultantRepository semaineconsultantRepository,
							RepositoryRestConfiguration restConfiguration

	){return
			args -> {

				restConfiguration.exposeIdsFor(Consultant.class);
				restConfiguration.exposeIdsFor(Semaine.class);
				restConfiguration.exposeIdsFor(SemaineConsultant.class);
				Consultant c1=consultantRepository.save(new Consultant(null,"errakha","walid","interne","cl1","0696749343","0696749343","errakhawalid@gmail.com","ingen info","ingenieur d'etat",12));
				Consultant c2=consultantRepository.save(new Consultant(null,"ait laarbi","mouad","interne","cl1","0696749343","0696749343","errakhawalid@gmail.com","ingen info","ingenieur d'etat",14));
				Consultant c3=consultantRepository.save(new Consultant(null,"khalid","salah","externe","cl1","0696749343","0696749343","errakhawalid@gmail.com","ingen info","ingenieur d'etat",14));

				Semaine s1=semaineRepository.save(new Semaine(null,"semaine1",new Date(),new Date(),"S1","2021"));
				Semaine s2=semaineRepository.save(new Semaine(null,"semaine2",new Date(),new Date(),"S1","2021"));
				Semaine s3=semaineRepository.save(new Semaine(null,"semaine3",new Date(),new Date(),"S1","2021"));

				SemaineConsultant sc1=semaineconsultantRepository.save(new SemaineConsultant(null,c1,s1,"ouvert"));
				SemaineConsultant sc2=semaineconsultantRepository.save(new SemaineConsultant(null,c2,s1,"fermer"));
				consultantRepository.findAll().forEach(c
						->{System.out.println(c.getNom());}
				);

			};

	}
}
