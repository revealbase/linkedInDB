# linkedInDB
Instructions for moving from raw LinkedIn data to individual tables to be imported into a relational database.

Step 1: Unzip the sample JSON file by running [unzip.bat](/mongoImport/unzip.bat)

Step 2: Import the sample JSON file into Mongodb by running [mongoImport.bat](/mongoimport/mongoImport.bat)

Step 3: Run the first query in Mongodb for the intermediary collection "step1" [step1.js](/mongodb_Queries/step1.js)

Step 4: Create individual collections for each table by running [step2.js](/mongodb_Queries/step2.js)

Step 5: Export the tables to csv files by running [mongoexport.bat](/mongoexport/mongoexport.bat)
