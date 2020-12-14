package com.projetointegrador.Ecommerce.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfig {

	//Mapeando API
    @Bean
    public Docket docket(){
        return new Docket(DocumentationType.SWAGGER_2)
                    .select()
                    .apis( RequestHandlerSelectors.basePackage("com.projetointegrador.Ecommerce.controller") )
                    .paths(PathSelectors.any())
                    .build()
                    .apiInfo(apiInfo());
    }

    //Versão do Ecommerce
    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                    .title("Ecommerce")
                    .description("API do Ecommerce")
                    .version("1.0")
                    .contact(contact())
                    .build();
    }

    //Dados de contato
    private Contact contact(){
        return new Contact("Alex Frederico Meschnark, "
        				 + "Jhonatan Bianchini, "
        				 + "Kauan Manoel, "
        				 + "Ricardo Mendes",
        		           "https://github.com/ricardotmendes/Projeto-Integrador-Generation",
        				   "Desenvolvedores Java Jr Web Full Stack");
    }
}

