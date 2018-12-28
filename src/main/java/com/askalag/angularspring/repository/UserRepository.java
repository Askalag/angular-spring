package com.askalag.angularspring.repository;

import com.askalag.angularspring.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>, UserRepositoryCustom {

    User getUserByLogin(String login);
}
