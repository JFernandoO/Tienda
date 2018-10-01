package com.javasampleapproach.springrest.mysql.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.TreeSet;

import org.hibernate.mapping.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.mysql.model.Order;
import com.javasampleapproach.springrest.mysql.model.OrderDetail;
import com.javasampleapproach.springrest.mysql.repo.OrderRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class OrderController {

	@Autowired
	OrderRepository repository;

	@GetMapping("/orders")
	public List<Order> getAllOrders() {
		System.out.println("Get all Orders...");

		List<Order> orders = new ArrayList<>();
		repository.findAll().forEach(orders::add);

		return orders;
	}

	@PostMapping(value = "/orders/create")
	public Order postOrder(@RequestBody Order order) {

		Order o = new Order(
				order.getNamePerson(),
				order.getTypePerson(), 
				order.getNumberPerson(),
				order.getState(),
				order.getTotalQuantity(),
				order.getTotalCost(),
				order.getAddress(),
				order.getDateOrder(),
				order.getTimeOrder()
				);
				
		HashSet<OrderDetail> details = new HashSet<OrderDetail>();
	    for( OrderDetail det : order.getOrderDetails() ) {
	    	det.setOrder( o );
	    	details.add(det);
	    }
		
	    o.setOrderDetails(details);
	    	    
		Order _order = repository.save(o);
		
		return _order;
	}
}
