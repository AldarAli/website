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
