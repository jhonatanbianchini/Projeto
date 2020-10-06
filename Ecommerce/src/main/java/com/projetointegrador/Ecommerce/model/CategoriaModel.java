package com.projetointegrador.Ecommerce.model;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.Table;
	import javax.validation.constraints.NotNull;
	import javax.validation.constraints.Size;

	@Entity
	@Table(name = "tb_Categoria")
	public class CategoriaModel {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long idCategoria;
		
		@NotNull
		@Size(min = 2, max = 255)
		private String NomeCategoria;
		
		@NotNull
		@Size(min = 2, max = 255)
		private String TipoCategoria;
		
		private boolean PresencialEAD;

		public long getIdCategoria() {
			return idCategoria;
		}

		public void setIdCategoria(long idCategoria) {
			this.idCategoria = idCategoria;
		}

		public String getNomeCategoria() {
			return NomeCategoria;
		}

		public void setNomeCategoria(String nomeCategoria) {
			NomeCategoria = nomeCategoria;
		}

		public String getTipoCategoria() {
			return TipoCategoria;
		}

		public void setTipoCategoria(String tipoCategoria) {
			TipoCategoria = tipoCategoria;
		}

		public boolean isPresencialEAD() {
			return PresencialEAD;
		}

		public void setPresencialEAD(boolean presencialEAD) {
			PresencialEAD = presencialEAD;
		}
		
	}


