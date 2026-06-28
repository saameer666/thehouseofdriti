pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm install --legacy-peer-deps --no-audit --no-fund'
            }
        }

        stage('Build') {
            steps {
                sh 'NODE_OPTIONS=--max_old_space_size=1024 npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                aws s3 sync dist/ s3://houseofdhrithi --delete
                '''
            }
        }
    }
}
