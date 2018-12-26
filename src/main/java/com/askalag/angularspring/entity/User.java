package com.askalag.angularspring.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import java.util.Date;

@NoArgsConstructor
@Data
public class User {

    @Id
    private String id;
    private String login;
    private String nickName;
    private int age;
    private String email;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date date;

}
