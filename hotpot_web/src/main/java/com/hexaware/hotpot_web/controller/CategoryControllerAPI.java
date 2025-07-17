package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Category;
import com.hexaware.hotpot_web.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categories")
public class CategoryControllerAPI {


@Autowired
private CategoryService categoryService;

@PostMapping
public ResponseEntity<Category> addCategory(@RequestBody Category category) {
    return new ResponseEntity<>(categoryService.addCategory(category), HttpStatus.CREATED);
}

@GetMapping
public ResponseEntity<List<Category>> getAllCategories() {
    return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<Category> getCategoryById(@PathVariable int id) {
    Optional<Category> category = categoryService.getCategoryById(id);
    return category.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

@PutMapping("/{id}")
public ResponseEntity<Category> updateCategory(@PathVariable int id, @RequestBody Category updatedCategory) {
    Optional<Category> category = categoryService.getCategoryById(id);
    if (category.isPresent()) {
        return new ResponseEntity<>(categoryService.updateCategory(id, updatedCategory), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deleteCategory(@PathVariable int id) {
    boolean deleted = categoryService.deleteCategory(id);
    if (deleted) {
        return new ResponseEntity<>("Category deleted successfully", HttpStatus.OK);
    } else {
        return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
    }
}
}