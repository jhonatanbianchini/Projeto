package com.projetointegrador.Ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.Ecommerce.model.Produto;
import com.projetointegrador.Ecommerce.repository.ProdutoRepository;




//Anotação da classe como Controller
@RestController
//Anotação para mapear a URL
@RequestMapping("/produto")
//Anotação para receber todos tipos de parâmetros 
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ProdutoController {
	
	//Anotação para inclusão das dependências
	@Autowired
	private ProdutoRepository repository;
	
	//Método para buscar todas informações 
	@GetMapping
	public ResponseEntity<List<Produto>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	//Método para buscar pelo ID
	@GetMapping("/{id}")
	public ResponseEntity<Produto> getById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	
	//Método para buscar pela descrição do produto
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Produto>> findAllNome(@PathVariable String nome){
	return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	
	
	//Método para incluir dados
	@PostMapping
	public ResponseEntity<Produto> postProduto (@RequestBody Produto produto){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(repository.save(produto));
	}

	//Método para atualizar dados já existente 
	@PutMapping
	public ResponseEntity<Produto> putProduto (@RequestBody Produto produto){
		return ResponseEntity.ok(repository.save(produto));				
	}
	
	//Método para deletar dados 
	@DeleteMapping("/{id}")
	public void deleteId(@PathVariable long id) {
		repository.deleteById(id);
	}





}