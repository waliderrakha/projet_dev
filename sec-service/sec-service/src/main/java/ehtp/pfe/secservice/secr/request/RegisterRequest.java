package ehtp.pfe.secservice.secr.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Data
public class RegisterRequest {
    @NotBlank
    @Size(min = 3, max = 40)
    private String username;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @NotBlank
    private String role;
    @NotBlank
    @Size(min = 6, max = 20)
    private String password;
}
