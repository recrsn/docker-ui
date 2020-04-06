var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});
var table = document.getElementById("docker-ps")
docker.listContainers(function (err, containers) {
    containers.forEach(function (containerInfo) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = containerInfo.Id.substring(0,12);
      cell2.innerHTML = containerInfo.Names[0];
      cell3.innerHTML = containerInfo.Image;
    });
  });
