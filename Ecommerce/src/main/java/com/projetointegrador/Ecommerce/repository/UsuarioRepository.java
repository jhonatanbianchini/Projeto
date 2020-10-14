package com.projetointegrador.Ecommerce.repository;

//Repositório criado para comunicação com o MySQL



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.Ecommerce.model.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	//Método importado de buscar por "Nome"  

	public List <Usuario> findAllByNomeContainingIgnoreCase (String nome);
	
	
		
}

