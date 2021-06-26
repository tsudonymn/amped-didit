- new clean RaspiOS 32bit images from the Raspi Imager
- redid 4gb and 8gb to the lite version
- changed hostnames
- followed the flow at:
  - https://blog.alexellis.io/self-hosting-kubernetes-on-your-raspberry-pi/
  - https://github.com/alexellis/k3sup#download-k3sup-tldr
- curl -sLS https://get.k3sup.dev | sh
sudo install k3sup /usr/local/bin/

k3sup --help
  - This didn't work quite right and I had to run a copy as sudo to move k3sup to /usr/local/bin
- Want to run:
  - k3sup join --ip $AGENT_IP --server-ip $SERVER_IP --user $USER
  - k3sup join --ip 192.168.1.85 --server-ip 192.168.1.68 --user pi
  - and k3s failed to start due to the cmemory issue
  - rediscovered the cmemory cmdline.txt issue
  - https://github.com/k3s-io/k3s/issues/170
  - Made the changed to cmdline.txt and rebooted
  - now k3s appears to be up:
---
pi@pi-4gb-k3s-main:~ $ systemctl status k3s
● k3s.service - Lightweight Kubernetes
   Loaded: loaded (/etc/systemd/system/k3s.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2021-06-23 20:07:58 BST; 1h 3min ago
     Docs: https://k3s.io
  Process: 565 ExecStartPre=/bin/sh -xc ! /usr/bin/systemctl is-enabled --quiet nm-cloud-setup.service (code=exited, sta
  Process: 570 ExecStartPre=/sbin/modprobe br_netfilter (code=exited, status=0/SUCCESS)
  Process: 572 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)
 Main PID: 573 (k3s-server)
    Tasks: 108
   Memory: 973.4M
   CGroup: /system.slice/k3s.service
           ├─ 573 /usr/local/bin/k3s server
           ├─ 608 containerd
           ├─1159 /var/lib/rancher/k3s/data/72938ff4ab7db422ac5a191f3432330f0ed83dc6f457d66f573a706337264b90/bin/contain
           ├─1160 /var/lib/rancher/k3s/data/72938ff4ab7db422ac5a191f3432330f0ed83dc6f457d66f573a706337264b90/bin/contain
           ├─1161 /var/lib/rancher/k3s/data/72938ff4ab7db422ac5a191f3432330f0ed83dc6f457d66f573a706337264b90/bin/contain
           ├─1234 /pause
           ├─1242 /pause
           ├─1249 /pause
           ├─1391 /coredns -conf /etc/coredns/Corefile
           ├─1474 /metrics-server
           ├─1552 local-path-provisioner start --config /etc/config/config.json
           ├─1866 /var/lib/rancher/k3s/data/72938ff4ab7db422ac5a191f3432330f0ed83dc6f457d66f573a706337264b90/bin/contain
           ├─1926 /pause
           ├─2068 /var/lib/rancher/k3s/data/72938ff4ab7db422ac5a191f3432330f0ed83dc6f457d66f573a706337264b90/bin/contain
           ├─2089 /pause
           ├─2173 /bin/sh /usr/bin/entry
           ├─2223 /traefik --configfile=/config/traefik.toml
           └─2231 /bin/sh /usr/bin/entry
---
- so trying to execute the k3sup join produces:
---
pi@pi-4gb-k3s-main:~ $ k3sup join --ip 192.168.1.85 --server-ip 192.168.1.68 --user pi
Running: k3sup join
Server IP: 192.168.1.68
Error: unable to connect to (server) 192.168.1.68:22 over ssh: ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain
---
- So I tried ssh-copy-id from 192.168.1.68 to 192.168.1.85
- which succeded and now to retry the join...
- ah it looks like it's trying to ssh to itself... Hmm... I guess I'm not sure how this is intended to work... I guess you are supposed to be running all this from a third machine? Which seems a little odd. And I guess as you are setting up the cluster I can kinda of see it and yet you can install from local so why not join from the main node or the worker node tot he main node instead of having to do so froma third machine?
- Ok so running join from my windows box as a third box works... Kinda lame.
- join worked and now:
---
pi@pi-4gb-k3s-main:~ $ k3s kubectl get nodes
WARN[2021-06-23T21:41:08.920412043+01:00] Unable to read /etc/rancher/k3s/k3s.yaml, please start server with --write-kubeconfig-mode to modify kube config permissions
error: error loading config file "/etc/rancher/k3s/k3s.yaml": open /etc/rancher/k3s/k3s.yaml: permission denied
pi@pi-4gb-k3s-main:~ $ kubectl get nodes
WARN[2021-06-23T21:41:15.989621268+01:00] Unable to read /etc/rancher/k3s/k3s.yaml, please start server with --write-kubeconfig-mode to modify kube config permissions
error: error loading config file "/etc/rancher/k3s/k3s.yaml": open /etc/rancher/k3s/k3s.yaml: permission denied
pi@pi-4gb-k3s-main:~ $ sudo kubectl get nodes
NAME              STATUS   ROLES    AGE     VERSION
pi-8gb-worker1    Ready    <none>   3m33s   v1.19.12+k3s1
pi-4gb-k3s-main   Ready    master   93m     v1.19.12+k3s1
pi@pi-4gb-k3s-main:~ $
---
- I think you could fix this by running the series of commands to make a local kube config file?
- Can't seem to find the commands
- SO next steps find that and then arkade? Or just try and deploy my flask app? Or the super simple fastapi app?