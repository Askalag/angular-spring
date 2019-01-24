package com.askalag.angularspring.service;

import com.askalag.angularspring.entity.User;

public interface UserService {

    User getUserByLogin(String login);
    User getUserById(String id);
    void addUser(User user);
    Iterable<User> getAll();
    void updateUser(User user);
    //void deleteUser(User user);
    void deleteUserById(String id);
    void dropCollection();

    Iterable<User> getAllByNickName(String nickName);


}
