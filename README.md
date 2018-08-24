# Shorthands and hacks

List of hacks - processing csv, importing big files into db and similar

### CLI  

```bash
# remove specific items from list
cat items.csv | grep -v "^\"" > items_new

# print only 1000 records
head -n 1000 out.csv
```
