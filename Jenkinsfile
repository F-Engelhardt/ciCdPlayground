pipeline {
    agent any

    tools {
        // Install the yarn version configured as "M3" and add it to the path.
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/F-Engelhardt/ciCdPlayground.git'

                // Run Maven on a Unix agent.
                sh 'yarn'
                sh 'yarn test'

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }

            post {
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                    junit '*/reports/**/*.xml'
                }
            }
        }
    }
}
