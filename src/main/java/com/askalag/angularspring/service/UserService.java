package com.askalag.angularspring.service;

import com.askalag.angularspring.entity.User;

public interface UserService {

    User getUserByLogin(String login);
    void addUser(User user);
    Iterable<User> getAll();
    void updateUser(User user);
    void deleteUser(User user);
}
