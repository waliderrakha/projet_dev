package ehtp.pfe.secservice;

import ehtp.pfe.secservice.secr.entities.AppRole;
import ehtp.pfe.secservice.secr.entities.AppUser;
import ehtp.pfe.secservice.secr.service.AccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
@SpringBootApplication
//@EnableGlobalMethodSecurity(prePostEnabled = true,securedEnabled = true)
public class SecServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecServiceApplication.class, args);
	}
@Bean
  PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
  }

  @Bean
	CommandLineRunner start(AccountService accountService){
		return args -> {

			accountService.addNewRole(new AppRole(null,"USER"));
			accountService.addNewRole(new AppRole(null,"ADMIN"));
			accountService.addNewRole(new AppRole(null,"CLIENT_MANAGER"));
			accountService.addNewRole(new AppRole(null,"PROJET_MANAGER"));
			accountService.addNewRole(new AppRole(null,"FICHE_MANAGER"));

			accountService.addNewUser(new AppUser(null,"user","errakhawalid@gmail.com","1234",new ArrayList<>()));
			accountService.addNewUser(new AppUser(null,"admin","errakhawalid@gmail.com","1234",new ArrayList<>()));
			accountService.addNewUser(new AppUser(null,"user1","errakhawalid@gmail.com","1234",new ArrayList<>()));
			accountService.addNewUser(new AppUser(null,"user2","errakhawalid@gmail.com","1234",new ArrayList<>()));


			accountService.addRoleToUser("user","USER");
			accountService.addRoleToUser("admin","ADMIN");
			accountService.addRoleToUser("user1","CLIENT_MANAGER");
			accountService.addRoleToUser("user2","FICHE_MANAGER");
		};



	}
}
