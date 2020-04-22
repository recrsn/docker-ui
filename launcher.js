const { spawnSync } = require('child_process')

const result = spawnSync('npm', ['run', 'start:electron'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
    APP_DEV_URL: process.argv[2]
  }
})

if (result.error) {
  console.error('Error starting Electron')
  console.error(result.error)
  process.exit(1)
} else {
  console.log(
    `Electron exited with status code ${result.status}${
      result.signal ? ` on ${result.signal}` : ''
    }`
  )
  process.exit(result.status)
}
