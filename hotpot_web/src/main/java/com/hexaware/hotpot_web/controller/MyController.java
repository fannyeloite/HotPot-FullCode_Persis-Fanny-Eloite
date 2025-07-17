

package com.hexaware.hotpot_web.controller;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.hexaware.hotpot_web.entity.userRepo;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpSession;

import com.hexaware.hotpot_web.entity.Cart;
import com.hexaware.hotpot_web.entity.CartRepo;
import com.hexaware.hotpot_web.entity.Category;
import com.hexaware.hotpot_web.entity.CategoryRepo;
import com.hexaware.hotpot_web.entity.Delivery;
import com.hexaware.hotpot_web.entity.DeliveryRepo;
import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import com.hexaware.hotpot_web.entity.Order;
import com.hexaware.hotpot_web.entity.OrderRepo;
import com.hexaware.hotpot_web.entity.Payment;
import com.hexaware.hotpot_web.entity.PaymentRepo;
import com.hexaware.hotpot_web.entity.user;

@Controller
public class MyController {

    @Autowired private userRepo repo;
    @Autowired private CartRepo cartRepo;
    @Autowired private CategoryRepo categoryRepo;
    @Autowired private FoodRepo foodRepo;
    @Autowired private OrderRepo orderRepo;
    @Autowired private PaymentRepo paymentRepo;
    @Autowired private DeliveryRepo deliveryRepo;
    

    @RequestMapping("/")
    public String home() {
        return "home.jsp";
    }

    @RequestMapping("/user")
    public String user() {
        return "user.jsp";
    }

    @RequestMapping("register")
    public String register(user user, RedirectAttributes redirectAttributes) {
        repo.save(user);
        redirectAttributes.addFlashAttribute("user", user);
        return "redirect:loginPage";
    }

    @RequestMapping("/loginPage")
    public String loginPage(@ModelAttribute("user") user user, @ModelAttribute("msg") String msg, Model model) {
        model.addAttribute("user", user);
        model.addAttribute("msg", msg);
        return "loginPage.jsp";
    }

    @RequestMapping("logincheck")
    public String login(@RequestParam String email, @RequestParam String password,
                        RedirectAttributes attributes, HttpSession session) {
        try {
            user reg = repo.getReferenceById(email);
            if (reg.getPassword().equals(password)) {
                session.setAttribute("loggedInUser", reg);
                session.setAttribute("userEmail", reg.getEmail());
                if (reg.getRole().equals("Admin")) {
                    return "redirect:adminpage";
                } else if (reg.getRole().equals("restaurantowner")) {
                    session.setAttribute("restaurantownerEmail", reg.getEmail());
                    return "redirect:restaurant";
                } else {
                    return "redirect:selectcategory";
                }

            } else {
                attributes.addFlashAttribute("msg", "Invalid Password");
                return "redirect:loginPage";
            }
        } catch (EntityNotFoundException e) {
            attributes.addFlashAttribute("msg", "Invalid Emailid Or Password");
            return "redirect:loginPage";
        }
    }

    @RequestMapping("home")
    public String userhome() {
        return "home.jsp";
    }

    @GetMapping("/adminpage")
    public String showAdminPage(Model model) {
        model.addAttribute("categories", categoryRepo.findAll());
        return "adminpage.jsp";
    }

    @PostMapping("/addCategory")
    public String addCategory(@ModelAttribute Category category) {
        categoryRepo.save(category);
        return "redirect:/adminpage";
    }

    @GetMapping("/deleteCategory")
    public String deleteCategory(@RequestParam int categoryId) {
        categoryRepo.deleteById(categoryId);
        return "redirect:/adminpage";
    }

    @GetMapping("/getCategory")
    public String getCategory(@RequestParam int categoryId, Model model) {
        Category category = categoryRepo.findById(categoryId).orElse(new Category());
        model.addAttribute("updateCategory", category);
        model.addAttribute("categories", categoryRepo.findAll());
        return "adminpage";
    }

    @GetMapping("/restaurant")
    public String sellerPage(Model model, HttpSession session) {
        String email = (String) session.getAttribute("restaurantownerEmail");
        model.addAttribute("products", foodRepo.findByRestaurantownerEmail(email));
        model.addAttribute("categories", categoryRepo.findAll());
        return "restaurant.jsp";
    }

    @PostMapping("/addFood")
    public String addFood(@ModelAttribute Food food, HttpSession session) {
        String email = (String) session.getAttribute("restaurantownerEmail");
        food.setRestaurantownerEmail(email);
        foodRepo.save(food);
        return "redirect:/restaurant";
    }

    @GetMapping("/deleteFood")
    public String deleteFood(@RequestParam int foodId) {
        foodRepo.deleteById(foodId);
        return "redirect:/restaurant";
    }

    @GetMapping("/getFood")
    public String getFood(@RequestParam int foodId, Model model, HttpSession session) {
        String email = (String) session.getAttribute("restaurantownerEmail");
        Food food = foodRepo.findById(foodId).orElse(new Food());
        model.addAttribute("updateFood", food);
        model.addAttribute("products", foodRepo.findByRestaurantownerEmail(email));
        model.addAttribute("categories", categoryRepo.findAll());
        return "restaurant.jsp";
    }

    @GetMapping("/customerhome")
    public String showCustomerHome(Model model) {
        model.addAttribute("foodItems", foodRepo.findAll());
        return "customerhome.jsp";
    }
    
 // VIEW CART
    @GetMapping("/cart")
    public String viewCart(HttpSession session, Model model) {
        user loggedInUser = (user) session.getAttribute("loggedInUser");
        if (loggedInUser != null) {
            List<Cart> cartItems = cartRepo.findByCustomerEmail(loggedInUser.getEmail());
            model.addAttribute("cartItems", cartItems);
            return "cart.jsp";
        } else {
            return "redirect:/loginPage";
        }
    }

    // ADD TO CART
    @PostMapping("/addToCart")
    public String addToCart(@RequestParam int foodId, HttpSession session, Model model) {
        user loggedInUser = (user) session.getAttribute("loggedInUser");
        if (loggedInUser == null) {
            return "redirect:/loginPage";
        }

        Food food = foodRepo.findById(foodId).orElse(null);
        if (food != null) {
            Cart existingItem = cartRepo.findByCustomerEmailAndFoodId(loggedInUser.getEmail(), foodId);
            if (existingItem != null) {
                existingItem.setQuantity(existingItem.getQuantity() + 1);
                cartRepo.save(existingItem);
            } else {
                Cart newItem = new Cart(loggedInUser.getEmail(), foodId, food.getFoodName(), food.getPrice(), 1);
                cartRepo.save(newItem);
            }
        }

        // Feedback message
        model.addAttribute("msg", "Item added to cart!");

        // Update cart view
        List<Cart> cartItems = cartRepo.findByCustomerEmail(loggedInUser.getEmail());
        model.addAttribute("cartItems", cartItems);

        return "cart.jsp";
    }

    // DELETE ITEM FROM CART
    @GetMapping("/deleteCartItem")
    public String deleteCartItem(@RequestParam int cartId) {
        cartRepo.deleteById(cartId);
        return "redirect:/cart";
    }

    // UPDATE CART ITEM QUANTITY
    @PostMapping("/updateQuantity")
    public String updateQuantity(@RequestParam int cartId, @RequestParam int quantity) {
        Cart cart = cartRepo.findById(cartId).orElse(null);
        if (cart != null) {
            cart.setQuantity(quantity);
            cartRepo.save(cart);
        }
        return "redirect:/cart";
    }


  
    
    @PostMapping("/placeOrder")
    public String placeOrder(HttpSession session, Model model) {
        user customer = (user) session.getAttribute("loggedInUser");
        if (customer == null) {
            return "redirect:/loginPage";
        }

        List<Cart> cartItems = cartRepo.findByCustomerEmail(customer.getEmail());
        if (cartItems.isEmpty()) {
            model.addAttribute("msg", "Cart is empty.");
            return "redirect:/cart";
        }

        double totalAmount = 0;
        Order lastOrder = null;

        for (Cart item : cartItems) {
            double itemTotal = item.getPrice() * item.getQuantity();
            totalAmount += itemTotal;

            Order order = new Order(
                customer.getEmail(),
                item.getFoodId(),
                item.getQuantity(),
                itemTotal,
                LocalDateTime.now(),
                "Pending"
            );

            lastOrder = orderRepo.save(order);
        }

        // Save payment
        Payment payment = new Payment(
            lastOrder.getOrderId(),
            totalAmount,
            "UPI", // Set method dynamically if needed
            "Paid",
            LocalDateTime.now()
        );
        paymentRepo.save(payment);

        // Save delivery info
        Delivery delivery = new Delivery(
            lastOrder.getOrderId(),
            customer.getAddress(),
            "In Transit"
        );
        deliveryRepo.save(delivery);

        // Clear cart
        cartRepo.deleteAll(cartItems);

        // Add attributes to success page
        model.addAttribute("food", foodRepo.findById(lastOrder.getFoodId()).orElse(null));
        model.addAttribute("customer", customer);
        model.addAttribute("orderId", lastOrder.getOrderId());
        model.addAttribute("amount", totalAmount);
        model.addAttribute("eta", "30 minutes"); // Can be calculated

        return "ordersuccess.jsp";
    }
    
    @GetMapping("/selectcategory")
    public String showCategorySelectionPage(Model model) {
        model.addAttribute("categories", categoryRepo.findAll());
        return "selectcategory.jsp";
    }

    @GetMapping("/categoryFoodList")
    public String showFoodByCategory(@RequestParam String category, Model model, HttpSession session) {
        user loggedInUser = (user) session.getAttribute("loggedInUser");
        if (loggedInUser == null) {
            return "redirect:/loginPage";
        }

        List<Food> foodItems = foodRepo.findByCategory(category);
        model.addAttribute("foodItems", foodItems);
        model.addAttribute("selectedCategory", category);
        model.addAttribute("loggedInUser", loggedInUser);
        return "customerhome.jsp";
    }

     
 // ==================== PAYMENT PAGE ====================
    @GetMapping("/paymentPage")
    public String showPaymentPage(@RequestParam(required = false) Integer orderId, Model model) {
        if (orderId == null) {
            return "redirect:/customerhome";  // or some error page
        }
        Optional<Order> orderOpt = orderRepo.findById(orderId);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            model.addAttribute("orderId", order.getOrderId());
            model.addAttribute("amount", order.getTotalPrice());
            return "payment.jsp";
        } else {
            return "redirect:/customerhome";
        }
    }


    // ==================== PROCESS PAYMENT ====================
    @PostMapping("/processPayment")
    public String processPayment(
            @RequestParam(required = false) Integer orderId,
            @RequestParam double amount,
            @RequestParam String method,
            HttpSession session,
            RedirectAttributes attributes
    ) {
        if (orderId == null) {
            return "redirect:/customerhome";
        }
        Payment payment = new Payment();
        payment.setOrderId(orderId);
        payment.setAmount(amount);
        payment.setMethod(method);
        payment.setStatus("Paid");
        payment.setPaymentDate(LocalDateTime.now());
        paymentRepo.save(payment);

        // Create delivery entry
        user customer = (user) session.getAttribute("loggedInUser");
        Delivery delivery = new Delivery();
        delivery.setOrderId(orderId);
        delivery.setDeliveryAddress(customer.getAddress());
        delivery.setDeliveryStatus("In Transit");
        deliveryRepo.save(delivery);

        attributes.addFlashAttribute("orderId", orderId);
        attributes.addFlashAttribute("deliveryAddress", customer.getAddress());
        attributes.addFlashAttribute("deliveryStatus", "In Transit");
        attributes.addFlashAttribute("expectedTime", LocalDateTime.now().plusMinutes(45).toLocalTime());

        return "redirect:/deliveryPage";
    }

    // ==================== DELIVERY PAGE ====================
    @GetMapping("/deliveryPage")
    public String showDeliveryPage(Model model) {
        return "delivery.jsp";
    }
    
    @GetMapping("/orderHistory")
    public String showOrderHistory(HttpSession session, Model model) {
        user loggedInUser = (user) session.getAttribute("loggedInUser");
        List<Order> orders = orderRepo.findByCustomerEmail(loggedInUser.getEmail());
        model.addAttribute("orderList", orders);
        return "orderhistory.jsp";
    }


   

   

    @RequestMapping("logout")
    public String logout(HttpSession session, RedirectAttributes attributes) {
        session.invalidate();
        attributes.addFlashAttribute("msg", "You Have Been Successfully Logged Out");
        return "redirect:loginPage";
    }
}
