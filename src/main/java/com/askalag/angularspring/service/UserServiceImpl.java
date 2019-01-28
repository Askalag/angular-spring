package com.askalag.angularspring.service;

import com.askalag.angularspring.entity.User;
import com.askalag.angularspring.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUserById(String id) {
        return this.userRepository.getUserById(id);
    }

    @Override
    public void addUser(User user) {
        user.setDate(new Date());
        userRepository.insert(user);
    }

    @Override
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(String id) {
        userRepository.deleteUserById(id);
    }

    @Override
    public void dropCollection() {
        userRepository.dropCollection();
    }
}
