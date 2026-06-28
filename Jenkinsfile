pipeline {
    agent any
 
    stages {
 
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/saameer666/thehouseofdriti.git'
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
                sh '''
                aws s3 sync dist/ s3://houseofdhrithi --delete
                '''
            }
        }
    }
}
