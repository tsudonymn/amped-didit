---
20200824
pi@raspberrypi:~ $ curl -sLS https://dl.get-arkade.dev | sudo sh
armv7l
Downloading package https://github.com/alexellis/arkade/releases/download/0.6.4/arkade-armhf as /tmp/arkade-armhf
Download complete.

Running with sufficient permissions to attempt to move arkade to /usr/local/bin
New version of arkade installed to /usr/local/bin
Creating alias 'ark' for 'arkade'.
            _             _      
  __ _ _ __| | ____ _  __| | ___ 
 / _` | '__| |/ / _` |/ _` |/ _ \
| (_| | |  |   < (_| | (_| |  __/
 \__,_|_|  |_|\_\__,_|\__,_|\___|

Get Kubernetes apps the easy way

Version: 0.6.4
Git Commit: 76049b52349f44e325e288b9ea8e264efa890f3e
pi@raspberrypi:~ $ kubectl top node
WARN[2020-08-23T00:53:38.239594766-04:00] Unable to read /etc/rancher/k3s/k3s.yaml, please start server with --write-kubeconfig-mode to modify kube config permissions 
error: error loading config file "/etc/rancher/k3s/k3s.yaml": open /etc/rancher/k3s/k3s.yaml: permission denied
pi@raspberrypi:~ $ export KUBECONFIG=`pwd`/kubeconfig
pi@raspberrypi:~ $ cd ~/
.BOINC/    .config/   Downloads/ .kube/     Pictures/  .ssh/      .vnc/
Bookshelf/ Desktop/   .gnome/    .local/    .pki/      Templates/ 
.cache/    Documents/ .gnupg/    Music/     Public/    Videos/    
pi@raspberrypi:~ $ cd ~/.kube/
pi@raspberrypi:~/.kube $ ls
cache  config  http-cache
pi@raspberrypi:~/.kube $ cd 
pi@raspberrypi:~ $ export KUBECONFIG=/home/pi/.kube/config 
pi@raspberrypi:~ $ kubectl top pod --all-namespaces
Error from server (ServiceUnavailable): the server is currently unable to handle the request (get pods.metrics.k8s.io)
pi@raspberrypi:~ $ kubectl top pod
Error from server (ServiceUnavailable): the server is currently unable to handle the request (get pods.metrics.k8s.io)
pi@raspberrypi:~ $ kubectl get node -o wide
NAME          STATUS     ROLES    AGE     VERSION        INTERNAL-IP    EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION   CONTAINER-RUNTIME
raspberrypi   NotReady   master   3d14h   v1.18.6+k3s1   192.168.1.68   <none>        Raspbian GNU/Linux 10 (buster)   5.4.51-v7l+      containerd://1.3.3-k3s2
pi@raspberrypi:~ $ 

---
b4 20200824
This all begon from: Well not quite and close enough...

Walk-through — install Kubernetes to your Raspberry Pi in 15 minutes | by Alex Ellis | Medium
https://medium.com/@alexellisuk/walk-through-install-kubernetes-to-your-raspberry-pi-in-15-minutes-84a8492dc95a

teamserverless/k8s-on-raspbian: Kubernetes on Raspbian (Raspberry Pi)
https://github.com/teamserverless/k8s-on-raspbian

How to Install Kubernetes on a Raspberry Pi Cluster | by Richard Youngkin | Better Programming | Medium
https://medium.com/better-programming/how-to-install-kubernetes-on-a-raspberry-pi-cluster-49ad9a762d08

---
C:\Users\tsudo\Downloads> .\k3sup.exe install --ip $IP --user pi
Running: k3sup install
Public IP: 192.168.1.68
[INFO]  Using v1.18.6+k3s1 as release
[INFO]  Downloading hash https://github.com/rancher/k3s/releases/download/v1.18.6+k3s1/sha256sum-arm.txt
[INFO]  Downloading binary https://github.com/rancher/k3s/releases/download/v1.18.6+k3s1/k3s-armhf
[INFO]  Verifying binary download
[INFO]  Installing k3s to /usr/local/bin/k3s
[INFO]  Creating /usr/local/bin/kubectl symlink to k3s
[INFO]  Creating /usr/local/bin/crictl symlink to k3s
[INFO]  Creating /usr/local/bin/ctr symlink to k3s
[INFO]  Creating killall script /usr/local/bin/k3s-killall.sh
[INFO]  Creating uninstall script /usr/local/bin/k3s-uninstall.sh
[INFO]  env: Creating environment file /etc/systemd/system/k3s.service.env
[INFO]  systemd: Creating service file /etc/systemd/system/k3s.service
[INFO]  systemd: Enabling k3s unit
Created symlink /etc/systemd/system/multi-user.target.wants/k3s.service → /etc/systemd/system/k3s.service.
[INFO]  systemd: Starting k3s
Result: [INFO]  Using v1.18.6+k3s1 as release
[INFO]  Downloading hash https://github.com/rancher/k3s/releases/download/v1.18.6+k3s1/sha256sum-arm.txt
[INFO]  Downloading binary https://github.com/rancher/k3s/releases/download/v1.18.6+k3s1/k3s-armhf
[INFO]  Verifying binary download
[INFO]  Installing k3s to /usr/local/bin/k3s
[INFO]  Creating /usr/local/bin/kubectl symlink to k3s
[INFO]  Creating /usr/local/bin/crictl symlink to k3s
[INFO]  Creating /usr/local/bin/ctr symlink to k3s
[INFO]  Creating killall script /usr/local/bin/k3s-killall.sh
[INFO]  Creating uninstall script /usr/local/bin/k3s-uninstall.sh
[INFO]  env: Creating environment file /etc/systemd/system/k3s.service.env
[INFO]  systemd: Creating service file /etc/systemd/system/k3s.service
[INFO]  systemd: Enabling k3s unit
[INFO]  systemd: Starting k3s
 Created symlink /etc/systemd/system/multi-user.target.wants/k3s.service → /etc/systemd/system/k3s.service.

apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJWekNCL3FBREFnRUNBZ0VBTUFvR0NDcUdTTTQ5QkFNQ01DTXhJVEFmQmdOVkJBTU1HR3N6Y3kxelpYSjIKWlhJdFkyRkFNVFU1Tnpnd09EWXpNVEFlRncweU1EQTRNVGt3TXpRek5URmFGdzB6TURBNE1UY3dNelF6TlRGYQpNQ014SVRBZkJnTlZCQU1NR0dzemN5MXpaWEoyWlhJdFkyRkFNVFU1Tnpnd09EWXpNVEJaTUJNR0J5cUdTTTQ5CkFnRUdDQ3FHU000OUF3RUhBMElBQk4yUHlOTTI1VFVuRC9zM0pXL21SZGpPY0Q2TDArYmtlR25FWnlQWVN2VUYKb2tjaGlUb3hCaUFTVndtbE9tM1JmaDZYMFd1TENtSFBlSUlsTnd1MklwR2pJekFoTUE0R0ExVWREd0VCL3dRRQpBd0lDcERBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUFvR0NDcUdTTTQ5QkFNQ0EwZ0FNRVVDSVFDZzkvTmZSeG95CmdmWGJOcEtiM0liUWtvUjlFWXBsMzhWY2RwUXh3Mk9vTndJZ1kyVGFHSGhwR3JtOXlMNUlFbVFHT3hLSk5qR1IKc3lLU0NVeXdNWmE0SlFJPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    server: https://127.0.0.1:6443
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    password: 6cb5b0a02d4bf606a42c8885349045c1
    username: admin
Result: apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJWekNCL3FBREFnRUNBZ0VBTUFvR0NDcUdTTTQ5QkFNQ01DTXhJVEFmQmdOVkJBTU1HR3N6Y3kxelpYSjIKWlhJdFkyRkFNVFU1Tnpnd09EWXpNVEFlRncweU1EQTRNVGt3TXpRek5URmFGdzB6TURBNE1UY3dNelF6TlRGYQpNQ014SVRBZkJnTlZCQU1NR0dzemN5MXpaWEoyWlhJdFkyRkFNVFU1Tnpnd09EWXpNVEJaTUJNR0J5cUdTTTQ5CkFnRUdDQ3FHU000OUF3RUhBMElBQk4yUHlOTTI1VFVuRC9zM0pXL21SZGpPY0Q2TDArYmtlR25FWnlQWVN2VUYKb2tjaGlUb3hCaUFTVndtbE9tM1JmaDZYMFd1TENtSFBlSUlsTnd1MklwR2pJekFoTUE0R0ExVWREd0VCL3dRRQpBd0lDcERBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUFvR0NDcUdTTTQ5QkFNQ0EwZ0FNRVVDSVFDZzkvTmZSeG95CmdmWGJOcEtiM0liUWtvUjlFWXBsMzhWY2RwUXh3Mk9vTndJZ1kyVGFHSGhwR3JtOXlMNUlFbVFHT3hLSk5qR1IKc3lLU0NVeXdNWmE0SlFJPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    server: https://127.0.0.1:6443
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    password: 6cb5b0a02d4bf606a42c8885349045c1
    username: admin

Saving file to: C:\Users\tsudo\Downloads\kubeconfig

# Test your cluster with:
export KUBECONFIG=C:\Users\tsudo\Downloads\kubeconfig
kubectl get node -o wide
C:\Users\tsudo\Downloads> export KUBECONFIG=C:\Users\tsudo\Downloads\kubeconfig
export: The term 'export' is not recognized as the name of a cmdlet, function, script file, or operable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
C:\Users\tsudo\Downloads> Set-Variable -Name "KUBECONFIG" -Value "C:\Users\tsudo\Downloads\kubeconfig"
C:\Users\tsudo\Downloads> kubectl get node -o wide
Unable to connect to the server: dial tcp 192.168.99.100:8443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
C:\Users\tsudo\Downloads> kubectl get node -o wide
---
THis turned out to be a problem later...

https://www.bennettnotes.com/post/raspberry-pi-kubernetes-cluster/

May have exhibited this:

https://stackoverflow.com/questions/53811388/error-from-server-serviceunavailable-the-server-is-currently-unable-to-handle


---
NodeRed:
https://dev.to/blakec/exploring-the-helmchart-custom-resource-in-k3s-2l52
---
Other links