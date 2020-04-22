import Docker from 'dockerode'

const docker = new Docker()

export async function listAllContainers() {
  return docker.listContainers({ all: true })
}

export async function listAllImages() {
  return docker.listImages()
}
