package dev.shahirjalal.portfolio.contact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final ContactMessageRepository repository;

    public ContactService(ContactMessageRepository repository) {
        this.repository = repository;
    }

    public ContactMessage submit(ContactRequest request) {
        ContactMessage saved = repository.save(new ContactMessage(request.name(), request.email(), request.message()));
        notifyOwner(saved);
        return saved;
    }

    /**
     * Best-effort notification hook. No email provider is wired up yet — swap the log line for a
     * real SMTP/API call later. Must never throw: a notification failure must not affect the
     * already-persisted message or the API response.
     */
    private void notifyOwner(ContactMessage message) {
        try {
            log.info("New contact message received: id={}, name={}, email={}", message.getId(), message.getName(), message.getEmail());
        } catch (Exception e) {
            log.warn("Failed to notify owner of contact message id={}", message.getId(), e);
        }
    }
}
