package com.askalag.angularspring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String login;
    private String nickName;
    private int age;
    private String email;
    private LocalDate localDate;
}
