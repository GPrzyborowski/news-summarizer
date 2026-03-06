package com.github.krzsta.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.krzsta.server.dto.RegisterRequest;
import com.github.krzsta.server.model.AppUser;
import com.github.krzsta.server.service.UserService;
import com.github.krzsta.server.dto.RegisterResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {
    
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        AppUser user = userService.register(req);
        return ResponseEntity.ok(new RegisterResponse(user.getId(), user.getUsername(), user.getEmail(), user.getCreatedAt().toString()));
    }
}
