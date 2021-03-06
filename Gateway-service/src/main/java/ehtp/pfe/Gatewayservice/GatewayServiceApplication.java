package ehtp.pfe.Gatewayservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
public class GatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServiceApplication.class, args);

	}
	//configuration static <<classe de configuration java>>
	//@Bean
	RouteLocator staticRoutes(RouteLocatorBuilder builder){
		return builder.routes()
				.route((r)->r.path("/clients/**").uri("lb://CLIENT-SERVICE"))
				.route(r->r.path("/contacts/**").uri("lb://CONTACT-SERVICE"))

				.build();
	}
	@Bean
	DiscoveryClientRouteDefinitionLocator dynamicRoutes
			(ReactiveDiscoveryClient rdc, DiscoveryLocatorProperties dlp){
		return new DiscoveryClientRouteDefinitionLocator(rdc,dlp);
	}

}
