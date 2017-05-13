/**
 * Determines color of Gantt Chart Block.
 *
 * @param {Date} start The Start Date.
 * @param {Date} end The End Date.
 * @param {String} status The Date of Gantt Chart Block.
 * @param {Date} blockDate The Date of Gantt Chart Block.
 * @customfunction
 */
// Make this a function that you can use in the individual cell and then just copy to the entire range
function cellGantt(start, end, status, blockDate){

  //------Test Dates--------  
//  start="2/17/2017";
//  end="2/29/2017";
//  status="Not Complete";
//  blockDate="6/1/2017"
//------------------------
  
  //Added waitTime because when making script changes the spreadsheet Times Out b/c too many calls are being made at the same time.
  var waitTime = Math.random()*2000;
  Logger.log(waitTime);
  Utilities.sleep(waitTime);
  //---End of waitTime code---
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]
  
  var blockA1Notation = sheet.getActiveCell().getA1Notation();
  var block = sheet.getRange(blockA1Notation);
  Logger.log("block: %s", blockA1Notation);
  start = new Date(start);
  end = new Date(end);
  blockDate = new Date(blockDate);
  var startMonth = Utilities.formatDate(start, "GMT", "MM");
  Logger.log("StartMonth: %s", startMonth);
  var startYear = Utilities.formatDate(start, "GMT", "YYYY");
  Logger.log("StartYear: %s", startYear);
  var endMonth = Utilities.formatDate(end, "GMT", "MM");
  Logger.log("EndMonth: %s", endMonth);
  var endYear = Utilities.formatDate(end, "GMT", "YYYY");
  Logger.log("EndYear: %s", endYear);
  var blockMonth = Utilities.formatDate(blockDate, "GMT", "MM");
  Logger.log("BlockMonth: %s", blockMonth);
  var blockYear = Utilities.formatDate(blockDate, "GMT", "YYYY");
  Logger.log("BlockYear: %s", blockYear);
//  var timeZone = Session.getScriptTimeZone();
//  Logger.log(timeZone);
  
  if ((startYear <= blockYear) && (endYear >= blockYear)){
    if ((startMonth <= blockMonth) && (endMonth >= blockMonth)){
      if (status == "Completed"){
        Logger.log("Marked Green");
        return 1;
      }
      else if (status == "In Progress"){
        Logger.log("Marked Orange");
        return 2;
      }
      else {
        Logger.log("Marked Blue");
        return 3;  // This covers Status == "Hasn't Started" as well as ANY other status.  Even if Status isn't filled out it will still show blocks filled.
      }
    }
    else {
      Logger.log("Marked White");
      return 4;
    }
  }
  else {
    Logger.log("Marked White");
    return 4;
  }
}