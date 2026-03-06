package com.github.krzsta.server.service;

import com.github.krzsta.server.model.AppUser;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.krzsta.server.dto.RegisterRequest;
import com.github.krzsta.server.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AppUser register(RegisterRequest req) {
        String username = req.username() == null ? "" : req.username().trim();
        String email = req.email() == null ? "" : req.email().trim().toLowerCase();
        String password = req.password();
        
        if (username.isBlank() || email.isBlank() || password == null || password.isBlank()) {
            throw new IllegalArgumentException("Username, email and password are required.");
        }

        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalStateException("User with that email already exists.");
        }

        String hash = passwordEncoder.encode(password);
        AppUser user = new AppUser(username, email, hash);
        return userRepository.save(user);
    }
}
