package com.hexaware.hotpot_web.config;

import com.hexaware.hotpot_web.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        .cors() // ✅ enable cors
        .and()
        .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/users/**", "api/users/login").permitAll() // public login/signup

                // ✅ Sellers & Admins can view categories
                .requestMatchers(HttpMethod.GET, "/api/categories/**").hasAnyRole("ADMIN", "RESTAURANTOWNER","CUSTOMER")
                .requestMatchers(HttpMethod.GET, "/api/foods/**").hasAnyRole("RESTAURANTOWNER","CUSTOMER","ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/foods/**").hasAnyRole("RESTAURANTOWNER","CUSTOMER","ADMIN")

                // ✅ These endpoints are required for the dashboard
                .requestMatchers("/api/orders/stats/count/**").hasRole("RESTAURANTOWNER")
                .requestMatchers("/api/orders/stats/earnings/**").hasRole("RESTAURANTOWNER")
                .requestMatchers("/api/orders/stats/customers/**").hasRole("RESTAURANTOWNER")
                .requestMatchers("/api/orders/stats/most-ordered/**").hasRole("RESTAURANTOWNER")

                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                
       
                // ✅ Only Admin can add/update/delete categories
                .requestMatchers(HttpMethod.POST, "/api/categories/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/categories/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/categories/**").hasRole("ADMIN")

                .requestMatchers("/api/foods/**").hasRole("RESTAURANTOWNER")
						
//				.requestMatchers("/api/cart/**","/api/orders/**").hasAnyRole("CUSTOMER",
//						  "ADMIN","RESTAURANTOWNER")
                .requestMatchers("/api/cart/user/**").hasAnyRole("CUSTOMER", "ADMIN", "RESTAURANTOWNER")
                .requestMatchers("/api/cart/**", "/api/orders/**").hasAnyRole("CUSTOMER", "ADMIN", "RESTAURANTOWNER")

						 
                .requestMatchers("/api/orders/with-food").hasAnyRole("RESTAURANTOWNER", "ADMIN", "CUSTOMER")
//                .requestMatchers("/api/orders/**").hasAnyRole("CUSTOMER", "ADMIN")

                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
