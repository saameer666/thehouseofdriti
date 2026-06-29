pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/veera3264-cmyk/thehouseofdriti.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 sync dist/ s3://houseofdhrithi --delete'
            }
        }
    }
}
