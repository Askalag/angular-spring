package com.askalag.angularspring.controller;

import com.askalag.angularspring.entity.User;
import com.askalag.angularspring.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PostMapping("/")
    public void addUser(@Valid @RequestBody User user) {
        userService.addUser(user);
    }

    @PutMapping("/")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUserById(id);
    }

    @GetMapping("/")
    public Iterable<User> getAll() {
        return userService.getAll();
    }

    //for Test
    @GetMapping("/dropdb")
    public void dropUserCollection() {
        userService.dropCollection();
    }

}
