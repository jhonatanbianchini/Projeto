package com.projetointegrador.Ecommerce.model;

//Nossa tabela de "Categoria" serve para classificar os cursos por nome e tipo deles, podendo assim 
//gerar vários tipos e categorizá-los de formas diversas
//Ex: 
//Nome: Curso de Java
//Tipo: Programação
//Presencial: Se o curso é presencial ou EAD



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name = "tb_Categoria")
public class Categoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	//
	
	@NotNull
	@Size(min = 2, max = 255)
	private String nome;
	
	@NotNull
	@Size(min = 2, max = 255)
	private String tipo;
	
	private boolean presencial;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public boolean isPresencial() {
		return presencial;
	}

	public void setPresencial(boolean presencial) {
		this.presencial = presencial;
	}

	
	
}