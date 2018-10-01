package com.javasampleapproach.springrest.mysql.model;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "orders")
public class Order { 

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idorder")
	private long id;

	@Column(name = "nameperson")
	private String namePerson;

	@Column(name = "typeperson")
	private String typePerson;
	
	@Column(name = "numberperson")
	private String numberPerson;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "totalquantity")
	private int totalQuantity;
	
	@Column(name = "totalcost")
	private double totalCost;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "dateorder")
	private String dateOrder;
	
	@Column(name = "timeorder")
	private String timeOrder;
	
	 //@OneToMany(mappedBy="associatedOrder", cascade=CascadeType.PERSIST)
	 @OneToMany(mappedBy = "order",cascade = {CascadeType.ALL}, orphanRemoval = true)
	    private Set<OrderDetail> orderDetails;

	 
	
	public Set<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(Set<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getNamePerson() {
		return namePerson;
	}

	public void setNamePerson(String namePerson) {
		this.namePerson = namePerson;
	}

	public String getTypePerson() {
		return typePerson;
	}

	public void setTypePerson(String typePerson) {
		this.typePerson = typePerson;
	}

	public String getNumberPerson() {
		return numberPerson;
	}

	public void setNumberPerson(String numberPerson) {
		this.numberPerson = numberPerson;
	}
	
	

	public int getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
		
	public String getDateOrder() {
		return dateOrder;
	}

	public void setDateOrder(String dateOrder) {
		this.dateOrder = dateOrder;
	}
	
	

	public String getTimeOrder() {
		return timeOrder;
	}

	public void setTimeOrder(String timeOrder) {
		this.timeOrder = timeOrder;
	}

	public Order() {
	}


	

	public Order(String namePerson, String typePerson, String numberPerson, 
			String state, int totalQuantity,
			double totalCost, String address, String dateOrder, String timeOrder) {
		
		this.namePerson = namePerson;
		this.typePerson = typePerson;
		this.numberPerson = numberPerson;
		this.state = state;
		this.totalQuantity = totalQuantity;
		this.totalCost = totalCost;
		this.address = address;
		this.dateOrder = dateOrder;
		this.timeOrder = timeOrder;
	}

	public long getId() {
		return id;
	}

	
	@Override
	public String toString() {
		return "Order [id=" + id + ", state=" + state + "]";
	}
}
