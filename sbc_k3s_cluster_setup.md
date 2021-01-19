- installed armbian on Rock64
- installed k3s on local win laptop
- downloaded k3sup win exe and added to path
- tried to run
  - k3sup install --ip 192.168.1.75 --user root
  - got:
```
Running: k3sup install
2021/01/06 00:27:07 192.168.1.75
Public IP: 192.168.1.75
Error: unable to connect to 192.168.1.75:22 over ssh: ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain
```
- generated keys for user and root on Rock64
- 