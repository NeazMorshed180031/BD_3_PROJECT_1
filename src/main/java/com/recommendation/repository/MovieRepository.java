package com.recommendation.repository;

import org.springframework.data.repository.CrudRepository;

import com.recommendation.model.Movie;

/**
 * Movie repository
 *
 * @author Neaz Morshed
 */
public interface MovieRepository extends CrudRepository<Movie, Long> {}
