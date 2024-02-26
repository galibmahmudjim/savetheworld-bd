import csv
from collections import defaultdict

# Read the provided CSV data
data = []
with open('global-plastics-production.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        data.append(row)

# Create a dictionary to store the converted data
converted_data = []

# Process the data and convert it into the desired format
for entry in data:
    year = int(entry['Year'])
    name = entry['Entity']
    plastic_production = int(entry['Annual plastic production between 1950 and 2019'])

    converted_data.append({'Year': year, 'Name': name, 'plastic_production': plastic_production})

# Print the result
for i in converted_data:
      print(i)
