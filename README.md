# Shorthands and hacks

List of hacks - processing csv, importing big files into db and similar

### CLI  

```bash
# remove specific items from list
cat items.csv | grep -v "^\"" > items_new

# print only 1000 records
head -n 1000 out.csv

# get first column of csv
cat list.csv | cut -d, -f1

# intersection between two files
grep -Fx -f a.csv b.csv

# common lines in two files
sort a.csv b.csv | uniq -d
```

### Benchmarking URL's

#### Installing Siege

```bash
sudo apt-get update && sudo apt-get upgrade --show-upgraded
wget http://download.joedog.org/siege/siege-latest.tar.gz
tar -zxvf siege-latest.tar.gz
cd siege-*/
sudo apt-get install build-essential
./configure
make
sudo make install
```

#### Running benchmark with multi-target

```bash
siege -c8 -t50s -f urls.txt
```

#### Sniffing requests

```bash
sudo apt-get install dsniff 
sudo urlsnarf -i eth0
```
