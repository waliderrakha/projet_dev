package ehtp.pfe.secservice.secr.web;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import ehtp.pfe.secservice.secr.JWTUtil;
import ehtp.pfe.secservice.secr.domaine.Message;
import ehtp.pfe.secservice.secr.entities.AppRole;
import ehtp.pfe.secservice.secr.entities.AppUser;
import ehtp.pfe.secservice.secr.repo.AppRoleRepository;
import ehtp.pfe.secservice.secr.repo.AppUserRepository;
import ehtp.pfe.secservice.secr.request.RegisterRequest;
import ehtp.pfe.secservice.secr.service.AccountService;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;
@CrossOrigin("*")
@RestController
public class AccountRestController {
    private AccountService accountService;
    private AppRoleRepository appRoleRepository;
    private AppUserRepository appUserRepository;
    private PasswordEncoder passwordEncoder;

    public AccountRestController(AccountService accountService, AppRoleRepository appRoleRepository, AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.accountService = accountService;
        this.appRoleRepository = appRoleRepository;
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/users")
    public List<AppUser> ListUsers() {
        return accountService.listUsers();
    }

    @PostMapping("/users")
    //@PostAuthorize("hasAutority('ADMIN')")
    public AppUser saveUser(@RequestBody AppUser appUser) {
        return accountService.addNewUser(appUser);
    }

    @PostMapping("/roles")
    public AppRole saveRole(@RequestBody AppRole appRole) {
        return accountService.addNewRole(appRole);
    }

    @PostMapping("/addRoleToUser")
    public void addRoleToUser(@RequestBody RoleUserForm roleUserForm) {
        accountService.addRoleToUser(roleUserForm.getUsername(), roleUserForm.getRoleName());
    }

    @GetMapping(path = "/refreshToken")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String refreshToken = request.getHeader("Authorization");
        if (refreshToken != null && refreshToken.startsWith(JWTUtil.PREFIX)) {

            try {
                String jwt = refreshToken.substring(7);
                Algorithm algorithm = Algorithm.HMAC256("mySecret1234");
                JWTVerifier jwtVerifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = jwtVerifier.verify(jwt);
                String username = decodedJWT.getSubject();
                AppUser appUser = accountService.loadUserByUsername(username);

                String jwtAccessToken = JWT.create().
                        withSubject(appUser.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 5 * 60 * 1000))
                        .withIssuer(request.getRequestURI().toString())
                        .withClaim("roles", appUser.getAppRoles().stream().map(
                                r -> r.getRoleName()
                        ).collect(Collectors.toList()))
                        .sign(algorithm);
                Map<String, String> idToken = new HashMap<>();
                idToken.put("access-token", jwtAccessToken);
                idToken.put("refresh-token", jwt);
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), idToken);

            } catch (Exception e) {
                throw e;

            }


        } else {

            throw new RuntimeException("refresh token required");
        }
    }

    @GetMapping(path = "/profile")
    public AppUser profile(Principal principal) {
        return accountService.loadUserByUsername(principal.getName());
    }

    //++++++++++++++++++++++++
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest signUpRequest) {
        if (accountService.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new Message("Error: Username déjà utilisé !"));
        }

        if (accountService.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new Message("Error: Email déjà utilisé!"));
        }

        // Create new user's account
        AppUser user1 = new AppUser(null, signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                passwordEncoder.encode(signUpRequest.getPassword()), new ArrayList<>());

        String strRoles = signUpRequest.getRole();
        Collection<AppRole> appRoles = new ArrayList<>();

        if (strRoles == null) {
            throw new RuntimeException("Error: Role is not found.");

        } else {
            AppRole appRole = appRoleRepository.findByRoleName(strRoles);
            user1.getAppRoles().add(appRole);
            appUserRepository.save(user1);
        }
        return ResponseEntity.ok(new Message("User registered successfully!"));
        //return new ResponseEntity<Boolean>(HttpStatus.OK);

    }


}


@Data
class RoleUserForm{
    private String username;
    private String roleName;
}
