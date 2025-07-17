package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Category;
import com.hexaware.hotpot_web.entity.CategoryRepo;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class CategoryServiceImplTest {

    @InjectMocks
    private CategoryServiceImpl service;

    @Mock
    private CategoryRepo repo;

    @Test
    void testAddCategory() {
        Category category = new Category();
        category.setCategoryName("Fast Food");

        when(repo.save(category)).thenReturn(category);

        Category result = service.addCategory(category);
        assertEquals("Fast Food", result.getCategoryName());
    }

    @Test
    void testGetAllCategories() {
        when(repo.findAll()).thenReturn(List.of(new Category(), new Category()));
        assertEquals(2, service.getAllCategories().size());
    }

    @Test
    void testGetCategoryById() {
        Category category = new Category();
        category.setCategoryId(1);

        when(repo.findById(1)).thenReturn(Optional.of(category));

        Optional<Category> result = service.getCategoryById(1);
        assertTrue(result.isPresent());
    }

    @Test
    void testDeleteCategory_Success() {
        Category category = new Category();
        category.setCategoryId(5);

        when(repo.findById(5)).thenReturn(Optional.of(category));

        assertTrue(service.deleteCategory(5));
        verify(repo).deleteById(5);
    }
}
