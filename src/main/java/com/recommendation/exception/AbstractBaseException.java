package com.recommendation.exception;

/**
 * Base exception class for exception to map to readable message and status.
 *
 * @author Neaz Morshed
 */
public abstract class AbstractBaseException extends RuntimeException {
    private static final long serialVersionUID = 7934168968831314440L;

    public abstract int getStatus();

    public AbstractBaseException(final String message) {
        super(message);
    }
}
