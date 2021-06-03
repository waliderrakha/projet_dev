package ehtp.pfe.secservice.secr.filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import ehtp.pfe.secservice.secr.JWTUtil;
import ehtp.pfe.secservice.secr.entities.AppUser;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@CrossOrigin("*")
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
   private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
       /* System.out.println("attemptAuthentication");
        String username=request.getParameter("username");
        String password=request.getParameter("password");
        System.out.println(username);
        System.out.println(password);
        UsernamePasswordAuthenticationToken authenticationToken=
                new UsernamePasswordAuthenticationToken(username,password);
   System.out.println(authenticationToken);
        return authenticationManager.authenticate(authenticationToken);*/
        try {
            //pour mettre les info qui arrive depuis l'objet json (Credentials) dans l'objet de la class
            AppUser login = new ObjectMapper()
                    .readValue(request.getInputStream(), AppUser.class);

            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    login.getUsername(),
                    login.getPassword()
            );

            System.out.println(login.toString());
            return authenticationManager.authenticate(authentication);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        //apres la verification du password on appel cette methode
        //on declare un objet User de Spring qui contienne tt les information sur l'utilisateur.
        //apres on genre le token
        System.out.println("successfulAuthentication");
        User user= (User) authResult.getPrincipal();//utilisateur authentifier
        Algorithm algo1=Algorithm.HMAC256(JWTUtil.SECRET);
        String jwtAccessToken= JWT.create().
                withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+JWTUtil.EXPIRE_ACCES_TOKEN))
                .withIssuer(request.getRequestURI().toString())
                .withClaim("roles",user.getAuthorities().stream().map(
                        ga->ga.getAuthority()
                ).collect(Collectors.toList()))
                .sign(algo1);


        String jwtRefreshToken= JWT.create().
                withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+JWTUtil.EXPIRE_REFRESH_TOKEN))
                .withIssuer(request.getRequestURI().toString())
                .sign(algo1);

        Map<String,String> idToken=new HashMap<>();
        idToken.put("access-token",jwtAccessToken);
        idToken.put("refresh-token",jwtRefreshToken);
        response.setContentType("application/json");
        //new ObjectMapper().writeValue(response.getOutputStream(),idToken);

        //response.addHeader("Authorization", "Bearer " + jwtAccessToken);

      response.addHeader("Authorization", "Bearer " + jwtAccessToken);

    }
}
