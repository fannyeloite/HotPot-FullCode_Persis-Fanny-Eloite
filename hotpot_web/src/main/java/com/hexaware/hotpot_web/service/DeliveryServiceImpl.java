package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Delivery;
import com.hexaware.hotpot_web.entity.DeliveryRepo;
import com.hexaware.hotpot_web.service.DeliveryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    @Autowired
    private DeliveryRepo repo;

    @Override
    public Delivery addDelivery(Delivery delivery) {
        return repo.save(delivery);
    }

    @Override
    public List<Delivery> getAllDeliveries() {
        return repo.findAll();
    }

    @Override
    public Optional<Delivery> getDeliveryById(int id) {
        return repo.findById(id);
    }

    @Override
    public Delivery updateDelivery(int id, Delivery updatedDelivery) {
        updatedDelivery.setDeliveryId(id);
        return repo.save(updatedDelivery);
    }

    @Override
    public boolean deleteDelivery(int id) {
        Optional<Delivery> optional = repo.findById(id);
        if (optional.isPresent()) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
