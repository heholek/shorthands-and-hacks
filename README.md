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
```

### Benchmarking URL's

#### Installing Siege

sudo apt-get update && sudo apt-get upgrade --show-upgraded
wget http://download.joedog.org/siege/siege-latest.tar.gz
tar -zxvf siege-latest.tar.gz
cd siege-*/
sudo apt-get install build-essential
./configure
make
sudo make install

#### Running benchmark with multi-target

siege -c8 -t50s -f urls.txt

#### Sniffing requests

sudo apt-get install dsniff 
sudo urlsnarf -i eth0
