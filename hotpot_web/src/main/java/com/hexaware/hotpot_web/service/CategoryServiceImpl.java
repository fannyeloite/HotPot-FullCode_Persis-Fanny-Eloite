package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Category;
import com.hexaware.hotpot_web.entity.CategoryRepo;
import com.hexaware.hotpot_web.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {


@Autowired
private CategoryRepo categoryRepo;

@Override
public Category addCategory(Category category) {
    return categoryRepo.save(category);
}

@Override
public List<Category> getAllCategories() {
    return categoryRepo.findAll();
}

@Override
public Optional<Category> getCategoryById(int id) {
    return categoryRepo.findById(id);
}

@Override
public Category updateCategory(int id, Category updatedCategory) {
    updatedCategory.setCategoryId(id);
    return categoryRepo.save(updatedCategory);
}

@Override
public boolean deleteCategory(int id) {
    Optional<Category> category = categoryRepo.findById(id);
    if (category.isPresent()) {
        categoryRepo.deleteById(id);
        return true;
    }
    return false;
}
}