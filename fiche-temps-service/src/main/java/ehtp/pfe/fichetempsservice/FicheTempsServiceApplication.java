package ehtp.pfe.fichetempsservice;

import ehtp.pfe.fichetempsservice.Repository.FicheTempRepository;
import ehtp.pfe.fichetempsservice.Repository.LigneFicheRepository;
import ehtp.pfe.fichetempsservice.entities.FicheTemp;
import ehtp.pfe.fichetempsservice.entities.LigneFiche;
import ehtp.pfe.fichetempsservice.fiegn.ConsultantRestClient;
import ehtp.pfe.fichetempsservice.fiegn.ProjetRestClient;
import ehtp.pfe.fichetempsservice.model.Phase;
import ehtp.pfe.fichetempsservice.model.SemaineConsultant;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;

@SpringBootApplication
@EnableFeignClients
public class FicheTempsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FicheTempsServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(FicheTempRepository ficheTempRepository,
							LigneFicheRepository ligneFicheRepository,
							ConsultantRestClient consultantRestClient,
							ProjetRestClient projetRestClient, RepositoryRestConfiguration restConfiguration
	){return
			args -> {

				restConfiguration.exposeIdsFor(FicheTemp.class);
				restConfiguration.exposeIdsFor(LigneFiche.class);
				SemaineConsultant s=consultantRestClient.getSemainConsulatantById(1L);
				System.out.println("----------------------------------------------");
				System.out.println(s.getConsultant());
				System.out.println(s.getEtat());
				System.out.println(s.getSemaine());
				System.out.println(s.getId());


				FicheTemp f1=ficheTempRepository.save(new FicheTemp(null,"admin",2021,12,"nv",null,1L,s,12));
				FicheTemp f2=ficheTempRepository.save(new FicheTemp(null,"admin",2021,12,"nv",null,1L,s,12));
				FicheTemp f3=ficheTempRepository.save(new FicheTemp(null,"user",2021,12,"nv",null,1L,s,12));
				FicheTemp f4=ficheTempRepository.save(new FicheTemp(null,"admin",2021,12,"nv",null,1L,s,12));
				FicheTemp f5=ficheTempRepository.save(new FicheTemp(null,"user",2021,12,"nv",null,1L,s,12));


				Phase phase=projetRestClient.getPhaseById(1L);
				System.out.println("------------phase------------------");
				System.out.println(phase.getDesc());
				System.out.println(phase.getId());
				System.out.println(phase.getCode());
				System.out.println(phase.getNbrJour());
				System.out.println(phase.getProjet());


				LigneFiche l1=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f2,null,1D,2,"lundi"));
				LigneFiche l2=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f1,null,1D,2,"lundi"));
				LigneFiche l3=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f3,null,1D,2,"lundi"));
				LigneFiche l4=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f4,null,1D,2,"lundi"));

				LigneFiche l5=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f2,null,1D,2,"lundi"));
				LigneFiche l6=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f1,null,1D,2,"lundi"));
				LigneFiche l7=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f3,null,1D,2,"lundi"));
				LigneFiche l8=ligneFicheRepository.save(new LigneFiche(null,6,3,5,6,6,8,"tache1","nv",1L,1L,"projet1","dev",f4,null,1D,2,"lundi"));

				ligneFicheRepository.findAll().forEach(c
						->{System.out.println(c.getDesc());}
				);

			};

	}




}
