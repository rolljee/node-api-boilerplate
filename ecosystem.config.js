module.exports = {
  apps: [
    {
      name: "speechmatics-api",
      script: "index.js"
    }
  ],
  deploy: {
    // "production" is the environment name
    production: {
      key: "/etc/ssh/eolementhe.top",
      user: "eolementhe",
      host: ["13.80.28.40"],
      ssh_options: "StrictHostKeyChecking=no",
      ref: "origin/master",
      repo: "git@github.com:eolementhe/speechmatics-api.git",
      path: "/home/eolementhe",
      "post-deploy": "npm install && npm start"
    }
  }
};

// Visit https://pm2.io/doc/en/runtime/guide/easy-deploy-with-ssh/ for mon info
