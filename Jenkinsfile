pipeline {
    agent any

    tools {
        nodejs 'NodeJS-LTS'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }

    stages {
        stage('Checkout Code') {
            steps { checkout scm }
        }

        stage('Install Dependencies') {
            steps { bat 'npm ci' }
        }

        stage('Clean Old Reports & Media') {
            steps { bat 'npm run cy-clean' }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run test-ci'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'cypress/reports/html/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'cypress/reports/screenshots/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'cypress/reports/videos/**/*', allowEmptyArchive: true
                }
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])
        }
        success { echo '✅ All tests passed!' }
        failure { echo '❌ Check reports below.' }
    }
}