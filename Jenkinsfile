pipeline {
    agent any

    stages {
 main
 
 main
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saameer666/thehouseofdriti.git'
            }
        }
 main

        stage('Deploy to S3') {
            steps {
                sh '''
                aws s3 sync dist/ s3://houseofdhrithi --delete
 
        stage('Deploy to S3') {
            steps {
                sh '''
                aws s3 sync . s3://houseofdhrithi \
                --exclude "*" \
                --include "dist/**" \
                --delete
 main
                '''
            }
        }
    }
}
