import { DockerError } from '../services/docker'

type PageProps = {
  error: (_: DockerError) => void
}

export default PageProps
