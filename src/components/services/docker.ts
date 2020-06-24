import Docker from 'dockerode'

export interface DockerError {
  code: string
  message: string
  cause: Error
}

const docker = new Docker()

export async function listAllContainers() {
  return docker.listContainers({ all: true })
}

export async function listAllImages() {
  return docker.listImages()
}
