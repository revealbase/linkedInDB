# linkedInDB
Instruction for moving from raw LinkedIn data to individual tables to be imported into a relational database.

Step 1: Unzip the sample JSON file by running unzip.bat in the mongoimport folder [unzip.bat](/mongoimport/unzip.bat)

Step 2: Import the sample JSON file into Mongodb by running mongoimport.bat in the mongoimport folder [mongoimport.bat](/mongoimport/mongoimport.bat)

Step 3: Run the first query in Mongodb for the intermediary collection "step1" [step1.js](/mongodb_queries/step1.js)
