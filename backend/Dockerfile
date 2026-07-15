# ==========================================
# Stage 1 - Build Spring Boot Application
# ==========================================
FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .

RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src src

RUN ./mvnw clean package -DskipTests

# ==========================================
# Stage 2 - Runtime
# ==========================================
FROM eclipse-temurin:17-jre

WORKDIR /app

RUN useradd -ms /bin/bash spring

USER spring

COPY --from=builder /app/target/*.jar app.jar

ENV JAVA_OPTS=""

EXPOSE 8082

ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar app.jar"]