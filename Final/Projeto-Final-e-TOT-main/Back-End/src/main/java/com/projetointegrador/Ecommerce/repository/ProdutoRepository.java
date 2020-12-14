package com.projetointegrador.Ecommerce.repository;

//Repositório criado para comunicação com o MySQL



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.Ecommerce.model.Produto;


public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	//Método importado de buscar pelo atributo nome  

	public List <Produto> findAllByNomeContainingIgnoreCase (String nome);
	
	
		
}
