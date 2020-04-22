const Docker = require('dockerode')

const docker = new Docker()

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const navlist = document.getElementById('sidebar-nav')

  navlist.addEventListener('click', event => {
    const element = event.target

    if (element.dataset.href) {
      const navItems = document.querySelectorAll('.nav-item')

      for (let navItem of navItems) {
        navItem.classList.remove('active')
      }

      element.classList.add('active')
      render(element.dataset.href, root)
    }
  })

  render('/containers', root)
})

function clearChildren(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild)
  }
}

function renderTemplate(fragmentName, root, initCallback) {
  const template = document.getElementById(fragmentName)

  if (template == null) {
    return
  }

  const fragmentRoot = template.content.cloneNode(true)
  clearChildren(root)
  root.appendChild(fragmentRoot)

  if (initCallback) {
    initCallback(fragmentRoot)
  }
}

function render(fragmentName, root) {
  switch (fragmentName) {
    case '/containers':
      renderTemplate(fragmentName, root, showContainers)
      break
    case '/images':
      renderTemplate(fragmentName, root, showImages)
      break
  }
}

function showContainers(root) {
  const table = root.getElementById('docker-ps')

  docker.listContainers(function(err, containers) {
    if (err) {
      console.log(err)
      return
    }

    containers.forEach(function(containerInfo) {
      const row = table.insertRow()
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)
      const cell3 = row.insertCell(2)
      cell1.innerHTML = containerInfo.Id.substring(0, 12)
      cell2.innerHTML = containerInfo.Names[0]
      cell3.innerHTML = containerInfo.Image
    })
  })
}

function showImages(root) {
  const table = root.getElementById('images')

  docker.listImages(function(err, images) {
    if (err) {
      console.log(err)
      return
    }

    images.forEach(function(imageInfo) {
      const row = table.insertRow()
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)
      const cell3 = row.insertCell(2)
      cell1.innerHTML = imageInfo.Id.substring(0, 12)
      cell2.innerHTML = imageInfo.RepoTags.join(' ')
      cell3.innerHTML = imageInfo.Tag
    })
  })
}
