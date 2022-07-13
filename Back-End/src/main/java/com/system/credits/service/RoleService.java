package com.system.credits.service;

import com.system.credits.entity.Role;
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

    public Optional<Role> getByRole(String role) {
        return roleRepository.findByRole(role);
    }

    public void save(Role role) {
        roleRepository.save(role);
    }
}
