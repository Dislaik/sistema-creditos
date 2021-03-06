package com.system.credits.jwt;

import com.system.credits.entity.PrincipalUser;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class Provider {
    private final static Logger logger = LoggerFactory.getLogger(Provider.class);

    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private Integer expiration;

    public String generateToken(Authentication authentication) {
        PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
        return Jwts.builder().setSubject(principalUser.getUsername())
                .claim("role", principalUser.getAuthorities()) // añadido por mi
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 1000l * 60 * 60))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

    }

    public String getUsernameFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public Boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException e) {
            logger.error("token mal formado");
        }catch (UnsupportedJwtException e) {
            logger.error("token no soportado");
        }catch (ExpiredJwtException e) {
            logger.error("token expirado");
        }catch (IllegalArgumentException e) {
            logger.error("token vacio");
        }catch (SignatureException e) {
            logger.error("falla en la firma");
        }
        return false;
    }
}
