module.exports = {
  apps : [{
    name: "kryptix-xmd",
    script: "./index.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
