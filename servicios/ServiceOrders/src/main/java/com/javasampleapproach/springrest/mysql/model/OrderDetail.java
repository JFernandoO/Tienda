package com.javasampleapproach.springrest.mysql.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ordersdetail")
public class OrderDetail { 

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idorderdetail")
	private long id;
	
	@Column(name = "idproduct")
	private String idProduct;

	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "cost")
	private Double cost;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.PERSIST)
	    @JoinColumn(name="idorder", referencedColumnName="idorder")
	    private Order order;
	 	
	

	public OrderDetail(String idProduct, int quantity, Double cost, Order order) {
		
		this.idProduct = idProduct;
		this.quantity = quantity;
		this.cost = cost;
		this.order = order;
	}

	

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public String getIdProduct() {
		return idProduct;
	}


	public void setIdProduct(String idProduct) {
		this.idProduct = idProduct;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Double getCost() {
		return cost;
	}


	public void setCost(Double cost) {
		this.cost = cost;
	}


	public long getId() {
		return id;
	}

	
	@Override
	public String toString() {
		return "OrderDetail [id=" + id + ", product id=" + idProduct + "]";
	}
}
