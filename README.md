# gthsManageNode

## Usage

### Main

```bash
gthsManage -h
Usage: gthsManage <cmd> [options]

Commands:
  gthsManage config            Get / Set config
  gthsManage isdeployed        Check if deployed
  gthsManage isrebootrequired  Check if reboot required
  gthsManage reboot            Reboot the noticeboard
  gthsManage update            Update packages
  gthsManage generatesshkey    Generate an SSH key
  gthsManage getlogs           Get noticeboard logs
  gthsManage deploy            Deploy the noticeboard.

Options:
  -h, --help     Show help                                             [boolean]
  --version, -v  display version                                       [boolean]
```

### Config

```bash
gthsManage config -h
Get / Set config

Options:
  -h, --help     Show help                                             [boolean]
  --version, -v  display version                                       [boolean]
  --set, -s      Set config
  --get, -g      Get config
```


```bash
gthsManage deploy -h
gthsManage deploy

Deploy the noticeboard.

Options:
  -h, --help     Show help                                             [boolean]
  --version, -v  display version                                       [boolean]
  --fresh, -f    Only use if Chrome isn't already open
```
