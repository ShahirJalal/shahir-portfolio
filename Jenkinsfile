pipeline {
    agent {
        label 'ubuntu'
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

        stage('Build & Deploy Backend') {
            steps {
                sh '''
                    docker compose build backend
                    docker compose up -d backend
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

        stage('Start Frontend') {
            steps {
                sh '''
                    docker compose up -d frontend
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    curl -f http://localhost:8083
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
                docker builder prune -f || true
            '''
        }
    }
}