# 🚀 Node.js CI Pipeline with Jenkins

This project demonstrates a **simple Continuous Integration (CI) pipeline** using **Jenkins** for a Node.js application. The pipeline automates code checkout, dependency installation, and application run inside a Jenkins job.

---

## 📚 Tech Stack

- ✅ Node.js (Basic App)
- ✅ Git & GitHub
- ✅ Jenkins (installed manually)
- ✅ Declarative Jenkins Pipeline
- ✅ Shell scripting & npm

---

## 🛠️ Features

- Clones code from GitHub
- Installs dependencies via `npm install`
- Runs the Node.js app
- Shows real-time logs on Jenkins UI

---

## 📁 Project Structure
jenkins-visual-node-app/
├── Jenkinsfile # Jenkins pipeline
├── app.js # Node.js app
├── package.json # App dependencies
└── README.md # You're reading it

---

## 🧑‍💻 Jenkinsfile – Pipeline Logic

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/rajatpatra-devops/jenkins-visual-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node app.js &'
            }
        }
    }
}
🚀 How to Run
🧱 Pre-requisites
Jenkins installed with Java 17+

GitHub repo cloned

Git & Node.js installed on Jenkins server

🔧 Steps
Create GitHub Repo
→ Push this project to https://github.com/rajatpatra-devops/jenkins-visual-node-app

Install Jenkins on Local/Linux VM
sudo apt install openjdk-17-jdk git nodejs npm -y
Create Jenkins Job

Type: Pipeline

Set GitHub repo URL

Use Jenkinsfile from SCM

Run the Jenkins Job

You should see:
Cloning repository...
Installing dependencies...
Node app started...
Finished: SUCCESS

Verify App
curl http://localhost:3000
