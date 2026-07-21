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

        // Temporary diagnostic test
        stage('Build & Deploy') {
            steps {
                sh '''
                    echo "Sleeping for 8 minutes..."
                    sleep 480
                    echo "Finished sleeping."
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    echo "Verify stage reached successfully."
                '''
            }
        }

    }

    post {

        success {
            echo 'Sleep test completed successfully!'
        }

        failure {
            echo 'Sleep test failed.'
        }

        always {
            sh '''
                docker image prune -f || true
                docker builder prune -f || true
            '''
        }
    }
}