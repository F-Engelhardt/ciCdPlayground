pipeline {
    agent any

    tools {
        // Install the yarn version configured as "M3" and add it to the path.
        nodejs 'yarn'
    }

    stages {
        stage('Checkout') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', url: 'https://github.com/F-Engelhardt/ciCdPlayground.git'
                }
            }
        stage('Build') {
            steps {
                // Run Maven on a Unix agent.
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Unit test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('E2e test') {
            steps {
                sh 'yarn test:e2e'
            }

            post {
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                    junit '**/reports/**/*.xml'
                }
            }
        }
    }
}
