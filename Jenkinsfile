pipeline {
    agent any

    // ✅ NO tools {} block — uses YOUR system-installed Node 24!

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }

    triggers {
        cron('0 4 * * *')
    }

    environment {
        REPORTS_DIR = 'cypress/reports'
        // ✅ POINTS TO YOUR SYSTEM NODE 24 — matches YOUR server exactly!
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {
        stage('Verify Node Version') {
            steps {
                bat 'node --version' // ✅ Will show: v24.18.1
                bat 'npm --version'
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Clean Old Reports & Media') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'rm -rf cypress/reports cypress/screenshots cypress/videos'
                    } else {
                        bat 'if exist cypress\\reports rmdir /s /q cypress\\reports & if exist cypress\\screenshots rmdir /s /q cypress\\screenshots & if exist cypress\\videos rmdir /s /q cypress\\videos'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run test-ci'
                    } else {
                        bat 'npm run test-ci'
                    }
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'cypress/reports/html/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'cypress/reports/screenshots/**/*', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'cypress/reports/videos/**/*', allowEmptyArchive: true
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }

    post {
        success {
            echo '✅ All tests passed! Report generated successfully.'
        }
        failure {
            echo '⚠️ Some tests failed — Check report below for details.'
        }
    }
}