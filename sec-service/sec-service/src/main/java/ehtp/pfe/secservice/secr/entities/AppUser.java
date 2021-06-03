package ehtp.pfe.secservice.secr.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import ehtp.pfe.secservice.secr.entities.AppRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String username;
private String email;
@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
private String password;
@ManyToMany(fetch = FetchType.EAGER)
private Collection<AppRole> appRoles=new ArrayList<>();
}
