package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Delivery;
import com.hexaware.hotpot_web.service.DeliveryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryRestController {

    @Autowired
    private DeliveryService service;

    @PostMapping
    public ResponseEntity<Delivery> addDelivery(@RequestBody Delivery delivery) {
        return new ResponseEntity<>(service.addDelivery(delivery), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Delivery>> getAllDeliveries() {
        return new ResponseEntity<>(service.getAllDeliveries(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Delivery> getDeliveryById(@PathVariable int id) {
        Optional<Delivery> optional = service.getDeliveryById(id);
        return optional.map(delivery -> new ResponseEntity<>(delivery, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Delivery> updateDelivery(@PathVariable int id, @RequestBody Delivery updatedDelivery) {
        Optional<Delivery> optional = service.getDeliveryById(id);
        if (optional.isPresent()) {
            return new ResponseEntity<>(service.updateDelivery(id, updatedDelivery), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDelivery(@PathVariable int id) {
        boolean deleted = service.deleteDelivery(id);
        if (deleted) {
            return new ResponseEntity<>("Delivery deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Delivery not found", HttpStatus.NOT_FOUND);
        }
    }
}
