package RainforestRetail.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
		String url = "https://geocode.search.hereapi.com/v1//n" +
				"    geocode\n" +
				"    ?q=5+Rue+Daunou%2C+75000+Paris%2C+France\n" +
				"    &apiKey={6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q}";


		WebClient.Builder builder = WebClient.builder();
		WebClient webClient = builder.build();

		Mono<String> response = webClient.get()
				.uri(url)
				.retrieve()
				.bodyToMono(String.class);

		// Blocking call to get the response
		String bod = response.block();
		System.out.println("------------------------------------------------");
		System.out.println(bod);
		System.out.println("------------------------------------------------");
	}

}
