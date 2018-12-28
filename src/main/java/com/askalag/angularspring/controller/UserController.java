package com.askalag.angularspring.controller;

import com.askalag.angularspring.entity.User;
import com.askalag.angularspring.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{login}")
    public User getUserByLogin(@PathVariable String login) {
        return userService.getUserByLogin(login);
    }

    @PostMapping("/")
    public void addUser(@Valid @RequestBody User user) {
        userService.addUser(user);
    }

    @PutMapping("/")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/")
    public void deleteUser(@RequestBody User user) {
        userService.deleteUser(user);
    }

    @GetMapping("/")
    public Iterable<User> getAll() {
        return userService.getAll();
    }

}
