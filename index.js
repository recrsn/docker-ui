const Docker = require('dockerode');

const docker = new Docker();

const table = document.getElementById("docker-ps")

docker.listContainers(function (err, containers) {
  containers.forEach(function (containerInfo) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = containerInfo.Id.substring(0, 12);
    cell2.innerHTML = containerInfo.Names[0];
    cell3.innerHTML = containerInfo.Image;
  });
});
