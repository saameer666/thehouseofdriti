stage('Install') {
    steps {
        sh 'npm install'
    }
}

stage('Build') {
    steps {
        sh 'npx ng build --configuration production'
    }
}

stage('Deploy') {
    steps {
        sh 'aws s3 sync dist/ s3://houseofdhrithi --delete'
    }
}
