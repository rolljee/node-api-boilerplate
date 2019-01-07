module.exports = {
  apps: [
    {
      name: "speechmatics.js",
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
      repo: "git@github.com:eolementhe/speechmatics-api",
      path: "~/speechmatics-api",
      "post-deploy": "npm install"
    }
  }
};

// Visit https://pm2.io/doc/en/runtime/guide/easy-deploy-with-ssh/ for mon info