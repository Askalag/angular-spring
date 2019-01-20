package com.askalag.angularspring.service;

import com.askalag.angularspring.entity.User;
import com.askalag.angularspring.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUserByLogin(String login) {
        return userRepository.getUserByLogin(login);
    }

    @Override
    public void addUser(User user) {
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

    @Override
    public Iterable<User> getAllByNickName(String nickName) {
        Iterable<User> users = userRepository.getAllByNickName(nickName);
        return users;
    }


}
