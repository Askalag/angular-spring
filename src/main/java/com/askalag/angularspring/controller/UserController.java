package com.askalag.angularspring.controller;

import com.askalag.angularspring.entity.User;
import com.askalag.angularspring.service.UserService;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
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

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUserById(id);
    }

    @GetMapping("/")
    public Iterable<User> getAll() {
        return userService.getAll();
    }
    @GetMapping("/search")
    public Iterable<User> search(@RequestParam("nickName") String nickName) {
        return userService.getAllByNickName(nickName);
    }
    //for Test
    @GetMapping("/dropdb")
    public void dropUserCollection() {
        userService.dropCollection();
    }

}
