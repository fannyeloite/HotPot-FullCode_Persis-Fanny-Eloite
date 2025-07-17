package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Delivery;
import com.hexaware.hotpot_web.entity.DeliveryRepo;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class DeliveryServiceImplTest {

    @InjectMocks
    private DeliveryServiceImpl service;

    @Mock
    private DeliveryRepo repo;

    @Test
    void testAddDelivery() {
        Delivery delivery = new Delivery();
        delivery.setDeliveryStatus("Pending");

        when(repo.save(delivery)).thenReturn(delivery);

        Delivery saved = service.addDelivery(delivery);
        assertEquals("Pending", saved.getDeliveryStatus());
    }

    @Test
    void testGetAllDeliveries() {
        when(repo.findAll()).thenReturn(List.of(new Delivery(), new Delivery()));
        assertEquals(2, service.getAllDeliveries().size());
    }

    @Test
    void testGetDeliveryById() {
        Delivery delivery = new Delivery();
        delivery.setDeliveryId(101);

        when(repo.findById(101)).thenReturn(Optional.of(delivery));

        Optional<Delivery> result = service.getDeliveryById(101);
        assertTrue(result.isPresent());
        assertEquals(101, result.get().getDeliveryId());
    }

    @Test
    void testDeleteDelivery_Success() {
        Delivery delivery = new Delivery();
        delivery.setDeliveryId(1);

        when(repo.findById(1)).thenReturn(Optional.of(delivery));

        assertTrue(service.deleteDelivery(1));
        verify(repo).deleteById(1);
    }
}
