module.exports = {
  apps: [{
    name: 'quafback-admin',
    script: 'node_modules/next/dist/bin/next',
    args: 'dev',
    env: {
      HOSTNAME: '0.0.0.0'
    }
  }]
}
