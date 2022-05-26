package com.system.credits.service;

import com.system.credits.entity.Role;
import com.system.credits.enums.RoleType;
import com.system.credits.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service // Service
@Transactional // ??
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Optional<Role> getByRoleType(RoleType roleType) {
        return roleRepository.findByRoleType(roleType);
    }

    public void save(Role role) {
        roleRepository.save(role);
    }
}
