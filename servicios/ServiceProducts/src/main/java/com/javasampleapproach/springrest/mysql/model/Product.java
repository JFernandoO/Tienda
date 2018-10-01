package com.javasampleapproach.springrest.mysql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product { 

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idproduct")
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "catalogue")
	private String catalogue;
	
	@Column(name = "stock")
	private int stock;
	
	@Column(name = "price")
	private int price;


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCatalogue() {
		return catalogue;
	}


	public void setCatalogue(String catalogue) {
		this.catalogue = catalogue;
	}


	public int getStock() {
		return stock;
	}


	public void setStock(int stock) {
		this.stock = stock;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getId() {
		return id;
	}

	public Product(){}
	
	public Product(String name, String catalogue, int stock, int price) {
		this.name = name;
		this.catalogue = catalogue;
		this.stock = stock;
		this.price = price;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + "]";
	}
}
