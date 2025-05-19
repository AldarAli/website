nmap_scanning
```bash 
nmap -sV -sT -sC -T4 10.10.11.68
```


```bash
echo "10.10.11.68  planning.htb" | sudo tee -a /etc/hosts
```

subdomain enmuration
```bash
ffuf -w /usr/share/wordlists/seclists/Discovery/DNS/bitquark-subdomains-top100000.txt -u 'http://10.10.11.68' -H "Host:FUZZ.planning.htb" -fs 178
```

```bash
wget https://github.com/nollium/CVE-2024-9264.git
```
ssh -L 8000:127.0.0.1:8000 enzo@planning.htb

```bash
GF_SECURITY_ADMIN_PASSWORD=RioTecRANDEntANT!
GF_SECURITY_ADMIN_USER=enzo

P4ssw0rdS0pRi0T3c



Resources
- [Github-CVE-2024-9264](https://github.com/nollium/CVE-2024-9264).
- [Grafana-security-release](https://grafana.com/blog/2024/10/17/grafana-security-release-critical-severity-fix-for-cve-2024-9264/).
- [ssh-local port forwarding](https://www.ssh.com/academy/ssh/tunneling-example).
