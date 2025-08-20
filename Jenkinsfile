parameters {
    string(name: 'ENV_CREDENTIAL_ID', defaultValue: '', description: 'Credential ID for the .env file')
}

pipeline {
    agent any
    environment {
        GIT_MESSAGE = sh(returnStdout: true, script: "git log -n 1 --format=%s ${GIT_COMMIT}").trim()
        GIT_AUTHOR = sh(returnStdout: true, script: "git log -n 1 --format=%ae ${GIT_COMMIT}").trim()
        GIT_COMMIT_SHORT = sh(returnStdout: true, script: "git rev-parse --short ${GIT_COMMIT}").trim()
        GIT_INFO = "Branch(Version): ${GIT_BRANCH}\nLast Message: ${GIT_MESSAGE}\nAuthor: ${GIT_AUTHOR}\nCommit: ${GIT_COMMIT_SHORT}"
        
        DOCKERHUB_CREDENTIAL = "dockerhub-yymin1022"
        DOCKER_IMAGE_NAME = "defcon-fe"
        DOCKER_IMAGE_STORAGE = "yymin1022"
        DOCKER_IMAGE_TAG = "release${BUILD_NUMBER}"
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    if (params.ENV_CREDENTIAL_ID) {
                        withCredentials([file(credentialsId: params.ENV_CREDENTIAL_ID, variable: 'ENV_FILE')]) {
                            sh 'cp $ENV_FILE ./.env.local'
                            echo 'ENV File copied.'
                        }
                    } else {
                        echo 'No .env credential ID provided. Skipping injection.'
                    }
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_STORAGE}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }

        stage("Push Docker Image to Dockerhub") {
            steps {
                script {
                    image = docker.image("${DOCKER_IMAGE_STORAGE}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                    docker.withRegistry("", DOCKERHUB_CREDENTIAL) {
                        image.push("$DOCKER_IMAGE_TAG")
                        image.push("latest")
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'rm -f .env.local'
        }
        success {
            withCredentials([string(credentialsId: "discord-default", variable: "DISCORD_WEBHOOK_URL")]) {
                discordSend description: "**Build ${BUILD_NUMBER}**가 성공하였습니다.\n\n${GIT_INFO}",
                            link: env.BUILD_URL,
                            result: currentBuild.currentResult,
                            title: env.JOB_NAME,
                            webhookURL: "$DISCORD_WEBHOOK_URL"
            }
        }
        failure {
            withCredentials([string(credentialsId: "discord-default", variable: "DISCORD_WEBHOOK_URL")]) {
                discordSend description: "**Build ${BUILD_NUMBER}**가 실패하였습니다.\n\n${GIT_INFO}",
                            link: env.BUILD_URL,
                            result: currentBuild.currentResult,
                            title: env.JOB_NAME,
                            webhookURL: "$DISCORD_WEBHOOK_URL"
            }
        }
    }
}
