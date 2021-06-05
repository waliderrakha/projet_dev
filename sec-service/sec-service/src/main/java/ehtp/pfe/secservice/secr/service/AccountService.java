package ehtp.pfe.secservice.secr.service;

import ehtp.pfe.secservice.secr.entities.AppRole;
import ehtp.pfe.secservice.secr.entities.AppUser;

import java.util.List;

public interface AccountService{
    AppUser addNewUser(AppUser appUser);
    AppRole addNewRole(AppRole approle);
    void addRoleToUser(String username,String rolename);
    public AppUser loadUserByUsername(String username);
    List<AppUser> listUsers();
    public Boolean existsByUsername(String username);
    public Boolean existsByEmail(String email);
    public Boolean updatePassword(String username, String oldPass, String newPass);
}
