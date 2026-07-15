package dev.shahirjalal.portfolio.contact;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ContactMessageRepository repository;

    @Test
    void submitValidMessage_persistsAndReturns201() throws Exception {
        String requestBody = """
                {
                  "name": "Ada Lovelace",
                  "email": "ada@example.com",
                  "message": "Loved the site, let's talk."
                }
                """;

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.receivedAt").exists());

        assertThat(repository.findAll())
                .anySatisfy(saved -> {
                    assertThat(saved.getName()).isEqualTo("Ada Lovelace");
                    assertThat(saved.getEmail()).isEqualTo("ada@example.com");
                    assertThat(saved.getMessage()).isEqualTo("Loved the site, let's talk.");
                });
    }

    @Test
    void submitInvalidMessage_returns400WithFieldErrors() throws Exception {
        String requestBody = """
                {
                  "name": "",
                  "email": "not-an-email",
                  "message": ""
                }
                """;

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.fields.name").exists())
                .andExpect(jsonPath("$.fields.email").exists())
                .andExpect(jsonPath("$.fields.message").exists());
    }
}
