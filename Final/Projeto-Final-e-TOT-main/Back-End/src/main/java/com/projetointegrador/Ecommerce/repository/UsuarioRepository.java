package com.projetointegrador.Ecommerce.repository;

//Repositório criado para comunicação com o MySQL



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.Ecommerce.model.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	//Método importado de buscar por "Nome"  

	public List <Usuario> findAllByNomeContainingIgnoreCase (String nome);
	public Optional<Usuario> findByUsuarioAndSenha(String usuario, String senha);
	public Optional<Usuario> findByUsuario(String usuario);
	
		
}

