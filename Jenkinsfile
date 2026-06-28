pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saameer666/thehouseofdriti.git'
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
