package com.javasampleapproach.springrest.mysql.repo;
import org.springframework.data.repository.CrudRepository;
import com.javasampleapproach.springrest.mysql.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
	
}
