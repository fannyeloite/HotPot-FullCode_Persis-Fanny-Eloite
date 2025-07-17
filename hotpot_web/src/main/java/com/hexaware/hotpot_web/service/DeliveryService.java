package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Delivery;

import java.util.List;
import java.util.Optional;

public interface DeliveryService {
    Delivery addDelivery(Delivery delivery);
    List<Delivery> getAllDeliveries();
    Optional<Delivery> getDeliveryById(int id);
    Delivery updateDelivery(int id, Delivery updatedDelivery);
    boolean deleteDelivery(int id);
}
