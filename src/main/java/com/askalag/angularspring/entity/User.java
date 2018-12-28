package com.askalag.angularspring.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@NoArgsConstructor
@Data
@Document(collection = "users")
public class User {

    @Id
    private String id;

    @NotEmpty @NotNull @Indexed(unique = true)
    private String login;
    private String nickName;
    private int age;
    private String email;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date date;

}
