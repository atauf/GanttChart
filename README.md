This is a custom function to be used in Google Sheets.  It will automatically fill in the colors of your Gantt Chart given when your spreadsheet is set up with the following columns...START DATE, END DATE, STATUS, BLOCK DATE.


EXAMPLE Format of Spreadsheet:

| Task | Start | DateEnd | DateStatus | 01Jan17 | 01Feb17 | 01Mar17 | ... |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |

Notes:
- Custom formula will go in each of the cells with a *
- 01Jan17, 01Feb17, 01Mar17, ect. are ***Block Dates***
