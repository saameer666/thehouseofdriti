pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build -- --configuration production'
            }
        }

        stage('Check Build Output') {
            steps {
                sh 'ls -la dist'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                    aws s3 sync dist/ s3://houseofdhrithi --delete
                '''
            }
        }
    }
}
