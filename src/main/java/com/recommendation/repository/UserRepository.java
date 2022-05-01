package com.recommendation.repository;

import org.springframework.data.repository.CrudRepository;

import com.recommendation.model.User;

/**
 * User repository
 *
 * @author Neaz Morshed
 */
public interface UserRepository extends CrudRepository<User, Long> {}

