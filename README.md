This is a custom function to be used in Google Sheets.  It will automatically fill in the colors of your Gantt Chart when your spreadsheet is set up with the following columns...START DATE, END DATE, STATUS, BLOCK DATE.


__**EXAMPLE Format of Spreadsheet:**__

| Task | Start Date | End Date | Status | 01Jan17 | 01Feb17 | 01Mar17 | ... |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |

__**Notes:**__
- Custom formula will go in each of the cells with a *
- 01Jan17, 01Feb17, 01Mar17, ect. are **Block Dates**

__**Additional Requirements:**__
- **STATUS** blocks must be one of the following (case sensitive):
    1) Completed
    2) In Progress
    3) Hasn't Started (this one can actually be anything you want because it is the **else** option in the **if statement**
- All **DATES** must be formatted as Dates in your spreadsheet
- Set up **4 Conditional Formatting Rules** in the cells that are under the **Block Dates** (these are the cells you want colored)
    1) if equal to 1 --> Font = Green, Background = Green
    2) if equal to 2 --> Font = Orange, Background = Orange
    3) if equal to 3 --> Font = Blue, Background = Blue
    4) if equal to 4 --> Font = White, Background = White
    
