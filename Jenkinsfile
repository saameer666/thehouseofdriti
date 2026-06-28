pipeline {
    agent any
 
    stages {
 
        stage('Clone') {
            steps {
                git branch: 'main', url: 'YOUR_GITHUB_REPO_URL'
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
                aws s3 sync dist/ s3://YOUR_BUCKET_NAME --delete
                '''
            }
        }
    }
}