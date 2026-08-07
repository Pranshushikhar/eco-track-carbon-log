var CARBON_LIMIT = 5; // kg CO2 — adjust as needed

function createPDF(userName, userCarbon, rank, total) {
  var doc = DocumentApp.create("TempCert_" + userName);
  var body = doc.getBody();
  
  body.appendParagraph("⚠️ High Carbon Impact Alert").setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph("Name: " + userName);
  body.appendParagraph("Carbon Count: " + userCarbon + " kg CO2");
  body.appendParagraph("Rank: " + rank + " out of " + total);
  body.appendParagraph("");
  body.appendParagraph("Your footprint today is above the target limit of " + CARBON_LIMIT + " kg CO2.");
  body.appendParagraph("Tips to reduce your impact:");
  body.appendParagraph("• Try walking, cycling, or public transport instead of driving.");
  body.appendParagraph("• Switch off unused electrical devices.");
  body.appendParagraph("• Choose a vegetarian meal when possible.");
  
  doc.saveAndClose();
  
  var pdfBlob = DriveApp.getFileById(doc.getId()).getAs("application/pdf");
  DriveApp.getFileById(doc.getId()).setTrashed(true);
  
  return pdfBlob;
}

function onFormSubmit(e) {
  var sheet = e.range.getSheet();
  var row = e.range.getRow();
  
  var userName    = sheet.getRange(row, 2).getValue();
  var userMail    = sheet.getRange(row, 3).getValue();
  var userCarbon  = sheet.getRange(row, 13).getValue();
  
  var lastRow = sheet.getLastRow();
  var carbonRange = sheet.getRange(2, 13, lastRow - 1, 1).getValues();
  
  var allCarbon = [];
  for (var i = 0; i < carbonRange.length; i++) {
    var val = carbonRange[i][0];
    if (val !== "" && !isNaN(val)) {
      allCarbon.push(val);
    }
  }
  allCarbon.sort(function(a, b) { return a - b; });
  var rank = allCarbon.indexOf(userCarbon) + 1;
  var total = allCarbon.length;
  
  var subject = "Your Carbon Count Result 🌱";
  var body = "Hi " + userName + ",\n\n" +
    "Your Carbon Count today: " + userCarbon + " kg CO2\n" +
    "Your Rank: " + rank + " out of " + total + " (lower is better)\n\n" +
    "View the full leaderboard here: [PASTE YOUR DASHBOARD LINK]\n\n" +
    "Thanks for tracking your footprint!";
  
  if (userMail) {
    if (userCarbon > CARBON_LIMIT) {
      var pdf = createPDF(userName, userCarbon, rank, total);
      MailApp.sendEmail(userMail, subject, body, {
        name: "Eco Track Carbon Log",
        attachments: [pdf]
      });
    } else {
      MailApp.sendEmail(userMail, subject, body, {
        name: "Eco Track Carbon Log"
      });
    }
  }
}
