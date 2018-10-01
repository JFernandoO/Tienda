package com.javasampleapproach.springrest.mysql.repo;
import org.springframework.data.repository.CrudRepository;
import com.javasampleapproach.springrest.mysql.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
	
}
