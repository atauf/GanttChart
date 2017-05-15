This is a custom function to be used in Google Sheets.  It will automatically fill in the colors of your Gantt Chart when your spreadsheet is set up with the following columns...START DATE, END DATE, STATUS, BLOCK DATE.


# EXAMPLE Format of Spreadsheet:

| Task | Start Date | End Date | Status | 01Jan17 | 01Feb17 | 01Mar17 | ... |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |
| --- | --- | --- | --- | \* | \* | \* | \* |

## Notes:
- Custom formula will go in each of the cells with a **" * "** (if putting in Cell **E2** it will look something like this... **=cellGanttBetter($B2,$C2,$D2,E$1)**, and then you can just drag copy the cell to the rest of the block cells)
- 01Jan17, 01Feb17, 01Mar17, ect. are **Block Dates**

## Additional Requirements:
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
    
