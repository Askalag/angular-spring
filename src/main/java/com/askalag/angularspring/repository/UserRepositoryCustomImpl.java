package com.askalag.angularspring.repository;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom{

    private MongoTemplate mongoTemplate;

    public UserRepositoryCustomImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void dropCollection() {
        mongoTemplate.dropCollection("users");
    }
}
