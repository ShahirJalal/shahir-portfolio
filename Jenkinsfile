pipeline {
    agent { label 'home-server' }

    environment {
        COMPOSE_PROJECT_NAME = "shahir-portfolio"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Stop Existing Stack') {
            steps {
                sh '''
                    docker compose down --remove-orphans || true
                '''
            }
        }

        stage('Build Backend') {
            steps {
                sh '''
                    docker compose build backend
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                    docker compose build frontend
                '''
            }
        }

        stage('Start Stack') {
            steps {
                sh '''
                    docker compose up -d
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    sleep 20

                    curl -f http://localhost:8083 >/dev/null

                    echo "Portfolio deployment successful!"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }

        failure {
            echo 'Deployment failed.'
        }

        always {
            sh '''
                docker image prune -f || true
            '''
        }
    }
}