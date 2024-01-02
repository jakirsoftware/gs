

// Open the Google Spreadsheet using its URL and get the sheet named "Sheet1"
const app = SpreadsheetApp.openByUrl("Your_Spreadsheet_url_here");
const sheet = app.getSheetByName("Sheet1");

// Define a function to handle HTTP GET requests
function doGet(req){
  // Check if the request includes a "del" parameter, indicating a row deletion request
  if(req.parameter.del){
    // Delete the row with the specified ID (row number)
    sheet.deleteRow(req.parameter.id)
    // Return a text response indicating that the data has been deleted
    return ContentService.createTextOutput("Data Deleted!")
  // Check if the request includes an "update" parameter, indicating an update request
  } else if(req.parameter.update){
    // Update the data in the specified row (ID) and column (2) with the new value (data)
    sheet.getRange(req.parameter.id,2).setValue(req.parameter.data);
    // Return a text response indicating that the data has been updated
    return ContentService.createTextOutput("Data Updated!")
  // If no parameters are included in the request, assume it's a read request
  } else {
    // Get all the data from the sheet (excluding the first row, which contains headers)
    let data = sheet.getDataRange().getValues();
    data.shift();
    // Store the data in an object and return it as a JSON string
    let obj = {
      todo:data
    }
    return ContentService.createTextOutput(JSON.stringify(obj))
  }
}

// Define a function to handle HTTP POST requests
function doPost(req){
  // Parse the data in the POST request
  let data = JSON.parse(req.postData.contents)
  // Append the new data to the sheet (using a formula to automatically generate a unique ID)
  sheet.appendRow(["=row()",data.todo])
  // Return a text response indicating that the data has been received
  return ContentService.createTextOutput("Data Received!")
}

// Define a test function to log all the data in the sheet (for debugging purposes)
function test(){
  Logger.log(sheet.getDataRange().getValues())
}


