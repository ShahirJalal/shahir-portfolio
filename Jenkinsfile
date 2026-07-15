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

        stage('Build & Deploy') {
            steps {
                sh '''
                    docker compose up -d --build
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    sleep 10

                    curl -f http://localhost:8083 > /dev/null

                    echo "Portfolio is responding successfully."
                '''
            }
        }

    }

    post {

        success {
            echo 'Shahir Portfolio deployed successfully!'
        }

        failure {
            echo 'Shahir Portfolio deployment failed.'
        }

        always {
            sh '''
                docker image prune -f || true
                docker builder prune -f || true
            '''
        }
    }
}