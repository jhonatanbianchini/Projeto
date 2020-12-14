package com.projetointegrador.Ecommerce.repository;


//Repositório criado para comunicação com o MySQL



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.Ecommerce.model.Categoria;


public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	//Método importado de buscar por "titulo"  

	public List <Categoria> findAllByTituloContainingIgnoreCase (String titulo);
	

		
}
