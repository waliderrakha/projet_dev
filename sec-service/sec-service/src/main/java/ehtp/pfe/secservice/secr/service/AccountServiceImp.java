package ehtp.pfe.secservice.secr.service;

import ehtp.pfe.secservice.secr.entities.AppRole;
import ehtp.pfe.secservice.secr.entities.AppUser;
import ehtp.pfe.secservice.secr.repo.AppRoleRepository;
import ehtp.pfe.secservice.secr.repo.AppUserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class AccountServiceImp implements AccountService{
    private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    private PasswordEncoder passwordEncoder;
    public AccountServiceImp(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository, PasswordEncoder passwordEncoder)
    {
        this.appUserRepository=appUserRepository;
        this.appRoleRepository=appRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public AppUser addNewUser(AppUser appUser) {
        String pw=appUser.getPassword();
        appUser.setPassword(passwordEncoder.encode(pw));
        return appUserRepository.save(appUser);
    }

    @Override
    public AppRole addNewRole(AppRole appRole) {
        return appRoleRepository.save(appRole);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        AppUser appUser=appUserRepository.findByUsername(username);
        AppRole appRole=appRoleRepository.findByRoleName(roleName);
        appUser.getAppRoles().add(appRole);


    }

    @Override
    public AppUser loadUserByUsername(String username) {

        return appUserRepository.findByUsername(username);
    }

    @Override
    public List<AppUser> listUsers() {
        return appUserRepository.findAll();
    }

    @Override
    public Boolean existsByUsername(String username) {
        return appUserRepository.existsByUsername(username);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return appUserRepository.existsByEmail(email);
    }
}
