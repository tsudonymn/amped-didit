---
20202308-0108
Don't recall why I needed bytes from a string

Eric and I were trying to get a going to sleep notice for RR
- https://stackoverflow.com/questions/7585435/best-way-to-convert-string-to-bytes-in-python-3
- https://www.base64encoder.io/python/

probably leading from:
https://github.com/allan-silva/py-time-between

Whole bunch of stuff about heroku and clock:
- https://elements.heroku.com/addons/scheduler
- https://devcenter.heroku.com/articles/clock-processes-python
- https://stackanswers.net/questions/how-are-heroku-worker-and-clock-processes-priced
- https://realpython.com/automatically-scale-heroku-dynos/
- https://devcenter.heroku.com/articles/scheduler#defining-tasks
- https://devcenter.heroku.com/articles/scheduled-jobs-custom-clock-processes#simple-job-scheduling
- 
---
(venv) C:\Users\tsudo\dev\reminder-robin>heroku run bash -a salty-bastion-04148
Running bash on ⬢ salty-bastion-04148... up, run.6025 (Free)
~ $ ls
dev.md  LICENSE  Procfile  README.md  requirements.txt  runtime.txt  src  test
~ $ cat Procfile
worker: python src/bot.py~ $ set
BASH=/bin/bash
BASHOPTS=cmdhist:complete_fullquote:expand_aliases:extquote:force_fignore:hostcomplete:interactive_comments:progcomp:promptvars:sourcepath
BASH_ALIASES=()
BASH_ARGC=()
BASH_ARGV=()
BASH_CMDS=()
BASH_LINENO=()
BASH_SOURCE=()
BASH_VERSINFO=([0]="4" [1]="4" [2]="20" [3]="1" [4]="release" [5]="x86_64-pc-linux-gnu")
BASH_VERSION='4.4.20(1)-release'
BOT_NAME=coco_local
COLUMNS=235
DIRSTACK=()
DISCORD_GUILD='Platform Enablement'
DISCORD_TOKEN=NzM2MjcyNzIxOTk4MTE4OTgy.XxsZaA.HXkMYkKNu0NLn7CbobCH8shMS1U
DYNO=run.6025
DYNO_RAM=512
EUID=6038
FORWARDED_ALLOW_IPS='*'
GROUPS=()
GUNICORN_CMD_ARGS='--access-logfile -'
HISTFILE=/app/.bash_history
HISTFILESIZE=500
HISTSIZE=500
HOME=/app
HOSTNAME=9fb853c7-4026-4cde-8959-47fb46b985f9
HOSTTYPE=x86_64
IFS=$' \t\n'
LANG=en_US.UTF-8
LD_LIBRARY_PATH=/app/.heroku/vendor/lib:/app/.heroku/python/lib:
LIBRARY_PATH=/app/.heroku/vendor/lib:/app/.heroku/python/lib:
LINES=13
MACHTYPE=x86_64-pc-linux-gnu
MAILCHECK=60
OPTERR=1
OPTIND=1
OSTYPE=linux-gnu
PAPERTRAIL_API_TOKEN=JaLEbsGNvtpwKjgvv2a8
PATH=/app/.heroku/python/bin:/usr/local/bin:/usr/bin:/bin
PIPESTATUS=([0]="0")
PORT=24163
PPID=1
PS1='\[\033[01;34m\]\w\[\033[00m\] \[\033[01;32m\]$ \[\033[00m\]'
PS2='> '
PS4='+ '
PWD=/app
PYTHONHASHSEED=random
PYTHONHOME=/app/.heroku/python
PYTHONPATH=/app
PYTHONUNBUFFERED=true
SHELL=/bin/bash
SHELLOPTS=braceexpand:emacs:hashall:histexpand:history:interactive-comments:monitor
SHLVL=2
TERM=dumb
UID=6038
WEB_CONCURRENCY=2
_=Procfile
~ $ python --version
Python 3.8.5
~ $ python bot.py
python: can't open file 'bot.py': [Errno 2] No such file or directory
~ $ ls
dev.md  LICENSE  Procfile  README.md  requirements.txt  runtime.txt  src  test
~ $ python src/bot.py
WARNING:discord.client:PyNaCl is not installed, voice will NOT be supported
Starting bot: coco_local
INFO:root:Starting bot: coco_local
Entering guild: Platform Enablement
INFO:root:Entering guild: Platform Enablement
INFO:discord.client:logging in using static token
INFO:discord.gateway:Created websocket connected to wss://gateway.discord.gg?encoding=json&v=6&compress=zlib-stream
INFO:discord.gateway:Shard ID None has sent the IDENTIFY payload.
INFO:discord.gateway:Shard ID None has connected to Gateway: ["gateway-prd-main-gpdl",{"micros":36990,"calls":["discord-sessions-prd-2-58",{"micros":34661,"calls":["start_session",{"micros":32324,"calls":["api-prd-main-mv2z",{"micros":
29829,"calls":["get_user",{"micros":2498},"add_authorized_ip",{"micros":1552},"get_guilds",{"micros":1436},"coros_wait",{"micros":1}]}]},"guilds_connect",{"micros":2,"calls":[]},"presence_connect",{"micros":189,"calls":[]}]}]}] (Sessio
n ID: 4b4cf1c95c0db51db952a189d73b1791).
^CINFO:discord.client:Cleaning up tasks.
INFO:discord.client:Cleaning up after 4 tasks.
INFO:discord.client:All tasks finished cancelling.
INFO:discord.client:Closing the event loop.
~ $ exit
exit
---
env vars

https://www.askpython.com/python/environment-variables-in-python