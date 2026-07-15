package dev.shahirjalal.portfolio.contact;

import java.time.Instant;

public record ContactResponse(Long id, Instant receivedAt) {

    static ContactResponse from(ContactMessage message) {
        return new ContactResponse(message.getId(), message.getCreatedAt());
    }
}
