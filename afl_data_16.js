var afl_data = {
    repeater: null,
    dates: [
        ["R1", "March 22, 2018 19:25:00 GMT+1100"],
        ["R2", "March 29, 2018 19:20:00 GMT+1030"],
        ["R3", "April 6, 2018 19:50:00 GMT+1000"],
        ["R4", "April 13, 2018 19:20:00 GMT+0930"],
        ["R5", "April 20, 2018 19:50:00 GMT+1000"],
        ["R6", "April 27, 2018 19:50:00 GMT+1000"],
        ["R7", "May 4, 2018 19:50:00 GMT+1000"],
        ["R8", "May 11, 2018 19:50:00 GMT+1000"],
        ["R9", "May 18, 2018 19:20:00 GMT+0930"],
        ["R10", "May 25, 2018 19:50:00 GMT+1000"],
        ["R11", "June 2, 2018 13:45:00 GMT+1000"],
        ["B1", "June 9, 2018 13:45:00 GMT+1000"],
        ["B2", "June 16, 2018 16:35:00 GMT+1000"],
        ["R15", "June 28, 2018 19:20:00 GMT+1000"],
        ["R16", "July 5, 2018 19:20:00 GMT+1000"],
        ["R17", "July 12, 2018 19:20:00 GMT+930"],
        ["R18", "July 20, 2018 19:50:00 GMT+1000"],
        ["R19", "July 27, 2018 19:50:00 GMT+1000"],
        ["F1", "August 3, 2018 19:50:00 GMT+1000"],
        ["F2", "August 10, 2017 19:50:00 GMT+1000"],
        ["F3", "August 17, 2017 19:50:00 GMT+1000"],
        ["F4", "August 24, 2017 19:50:00 GMT+1000"]
    ],
    fixtures: [
        ["R1", "RIC", "CAR", "MCG - Thursday, March 22 - 7:25 PM"],
        ["R1", "ESS", "ADE", "ES - Friday, March 23 - 7:50 PM"],
        ["R1", "STK", "BRI", "ES - Saturday, March 24 - 3:35 PM"],
        ["R1", "PTA", "FRE", "AO - Saturday, March 24 - 4:05 PM"],
        ["R1", "GCS", "NTH", "CS - Saturday, March 24 - 6:25 PM"],
        ["R1", "HAW", "COL", "MCG - Saturday, March 24 - 7:25 PM"],
        ["R1", "GWS", "WBD", "UNSW - Sunday, March 25 - 1:10 PM"],
        ["R1", "MEL", "GEE", "MCG - Sunday, March 25 - 3:20 PM"],
        ["R1", "WCE", "SYD", "OS - Sunday, March 25 - 4:20 PM"],
        ["R2", "ADE", "RIC", "AO - Thursday, March 29 - 7:20 PM"],
        ["R2", "NTH", "STK", "ES - Friday, March 30 - 4:20 PM"],
        ["R2", "CAR", "GCS", "ES - Saturday, March 31 - 1:45 PM"],
        ["R2", "COL", "GWS", "MCG - Saturday, March 31 - 4:35 PM"],
        ["R2", "BRI", "MEL", "G - Saturday, March 31 - 6:25 PM"],
        ["R2", "FRE", "ESS", "OS - Saturday, March 31 - 5:10 PM"],
        ["R2", "WBD", "WCE", "ES - Sunday, April 1 - 3:20 PM"],
        ["R2", "SYD", "PTA", "SCG - Sunday, April 1 - 4:40 PM"],
        ["R2", "GEE", "HAW", "MCG - Monday, April 2 - 3:20 PM"],
        ["R3", "CAR", "COL", "MCG - Friday, April 6 - 7:50 PM"],
        ["R3", "PTA", "BRI", "AO - Saturday, April 7 - 1:15 PM"],
        ["R3", "MEL", "NTH", "MCG - Saturday, April 7 - 2:10 PM"],
        ["R3", "GCS", "FRE", "OS - Saturday, April 7 - 2:35 PM"],
        ["R3", "SYD", "GWS", "SCG - Saturday, April 7 - 7:25 PM"],
        ["R3", "STK", "ADE", "ES - Saturday, April 7 - 7:25 PM"],
        ["R3", "RIC", "HAW", "MCG - Sunday, April 8 - 1:10 PM"],
        ["R3", "WBD", "ESS", "ES - Sunday, April 8 - 3:20 PM"],
        ["R3", "WCE", "GEE", "OS - Sunday, April 8 - 2:40 PM"],
        ["R4", "ADE", "COL", "AO - Friday, April 13 - 7:20 PM"],
        ["R4", "GWS", "FRE", "UNSW - Saturday, April 14 - 1:45 PM"],
        ["R4", "RIC", "BRI", "MCG - Saturday, April 14 - 2:10 PM"],
        ["R4", "WBD", "SYD", "ES - Saturday, April 14 - 4:35 PM"],
        ["R4", "NTH", "CAR", "BA - Saturday, April 14 - 7:25 PM"],
        ["R4", "WCE", "GCS", "OS - Saturday, April 14 - 6:10 PM"],
        ["R4", "ESS", "PTA", "ES - Sunday, April 15 - 1:10 PM"],
        ["R4", "HAW", "MEL", "MCG - Sunday, April 15 - 3:20 PM"],
        ["R4", "GEE", "STK", "GS - Sunday, April 15 - 4:40 PM"],
        ["R5", "SYD", "ADE", "SCG - Friday, April 20 - 7:50 PM"],
        ["R5", "STK", "GWS", "ES - Saturday, April 21 - 1:45 PM"],
        ["R5", "CAR", "WCE", "MCG - Saturday, April 21 - 4:35 PM"],
        ["R5", "PTA", "GEE", "AO - Saturday, April 21 - 7:10 PM"],
        ["R5", "FRE", "WBD", "OS - Saturday, April 21 - 6:10 PM"],
        ["R5", "NTH", "HAW", "ES - Sunday, April 22 - 3:20 PM"],
        ["R5", "BRI", "GCS", "G - Sunday, April 22 - 4:40 PM"],
        ["R5", "MEL", "RIC", "MCG - Tuesday, April 24 - 7:25 PM"],
        ["R5", "COL", "ESS", "MCG - Wednesday, April 25 - 3:20 PM"],
        ["R6", "WBD", "CAR", "ES - Friday, April 27 - 7:50 PM"],
        ["R6", "GEE", "SYD", "GS - Saturday, April 28 - 1:45 PM"],
        ["R6", "NTH", "PTA", "ES - Saturday, April 28 - 2:10 PM"],
        ["R6", "GWS", "BRI", "SPO - Saturday, April 28 - 4:35 PM"],
        ["R6", "HAW", "STK", "US - Saturday, April 28 - 7:25 PM"],
        ["R6", "ADE", "GCS", "AO - Saturday, April 28 - 7:10 PM"],
        ["R6", "ESS", "MEL", "ES - Sunday, April 29 - 1:10 PM"],
        ["R6", "COL", "RIC", "MCG - Sunday, April 29 - 3:20 PM"],
        ["R6", "FRE", "WCE", "OS - Sunday, April 29 - 2:40 PM"],
        ["R7", "GEE", "GWS", "GS - Friday, May 4 - 7:50 PM"],
        ["R7", "WBD", "GCS", "MARS - Saturday, May 5 - 1:45 PM"],
        ["R7", "ESS", "HAW", "MCG - Saturday, May 5 - 2:10 PM"],
        ["R7", "WCE", "PTA", "OS - Saturday, May 5 - 2:35 PM"],
        ["R7", "SYD", "NTH", "SCG - Saturday, May 5 - 7:25 PM"],
        ["R7", "ADE", "CAR", "AO - Saturday, May 5 - 7:10 PM"],
        ["R7", "RIC", "FRE", "MCG - Sunday, May 6 - 1:10 PM"],
        ["R7", "STK", "MEL", "ES - Sunday, May 6 - 3:20 PM"],
        ["R7", "BRI", "COL", "G - Sunday, May 6 - 4:40 PM"],
        ["R8", "HAW", "SYD", "MCG - Friday, May 11 - 7:50 PM"],
        ["R8", "GWS", "WCE", "SPO - Saturday, May 12 - 1:45 PM"],
        ["R8", "CAR", "ESS", "MCG - Saturday, May 12 - 2:10 PM"],
        ["R8", "GCS", "MEL", "G - Saturday, May 12 - 4:35 PM"],
        ["R8", "PTA", "ADE", "AO - Saturday, May 12 - 4:40 PM"],
        ["R8", "WBD", "BRI", "ES - Saturday, May 12 - 7:25 PM"],
        ["R8", "FRE", "STK", "OS - Sunday, May 12 - 6:10 PM"],
        ["R8", "NTH", "RIC", "ES - Sunday, May 13 - 1:10 PM"],
        ["R8", "COL", "GEE", "MCG - Sunday, May 13 - 3:20 PM"],
        ["R9", "ADE", "WBD", "AO - Friday, May 18 - 7:20 PM"],
        ["R9", "NTH", "GWS", "BA - Saturday, May 19 - 1:45 PM"],
        ["R9", "GCS", "PTA", "AAJS - Satuday, May 19 - 1:15 PM"],
        ["R9", "ESS", "GEE", "MCG - Saturday, May 19 - 4:35 PM"],
        ["R9", "SYD", "FRE", "SCG - Saturday, May 19 - 7:25 PM"],
        ["R9", "STK", "COL", "ES - Saturday, May 19 - 7:25 PM"],
        ["R9", "CAR", "MEL", "MCG - Sunday, May 20 - 1:10 PM"],
        ["R9", "BRI", "HAW", "G - Sunday, May 20 - 3:20 PM"],
        ["R9", "WCE", "RIC", "OS - Sunday, May 20 - 2:40 PM"],
        ["R10", "COL", "WBD", "MCG - Friday, May 25 - 7:50 PM"],
        ["R10", "RIC", "STK", "MCG - Saturday, May 26 - 1:45 PM"],
        ["R10", "BRI", "SYD", "G - Saturday, May 26 - 4:35 PM"],
        ["R10", "GEE", "CAR", "GS - Saturday, May 26 - 7:25 PM"],
        ["R10", "GWS", "ESS", "SPO - Saturday, May 26 - 7:25 PM"],
        ["R10", "HAW", "WCE", "ES - Sunday, May 27 - 1:10 PM"],
        ["R10", "MEL", "ADE", "TP - Sunday, May 27 - 2:50 PM"],
        ["R10", "FRE", "NTH", "OS - Sunday, May 27 - 2:40 PM"],
        ["R10", "SYD", "CAR", "SCG - Friday, June 1 - 7:50 PM"],
        ["R11", "WBD", "MEL", "ES - Saturday, June 2 - 1:45 PM"],
        ["R11", "HAW", "PTA", "US - Saturday, June 2 - 2:10 PM"],
        ["R11", "GCS", "GEE", "MS - Saturday, June 2 - 4:35 PM"],
        ["R11", "ESS", "RIC", "MCG - Saturday, June 2 - 7:25 PM"],
        ["R11", "WCE", "STK", "OS - Saturday, June 2 - 6:10 PM"],
        ["R11", "NTH", "BRI", "ES - Sunday, June 3 - 1:10 PM"],
        ["R11", "COL", "FRE", "MCG - Sunday, June 3 - 3:20 PM"],
        ["R11", "ADE", "GWS", "AO - Sunday, June 3 - 4:10 PM"],
        ["R11", "PTA", "RIC", "AO - Friday, June 8 - 7:20 PM"],
        ["B1", "GEE", "NTH", "GS - Saturday, June 9 - 1:45 PM"],
        ["B1", "GWS", "GCS", "SPO - Saturday, June 9 - 4:35 PM"],
        ["B1", "STK", "SYD", "ES - Saturday, June 9 - 7:25 PM"],
        ["B1", "BRI", "ESS", "G - Sunday, June 10 - 1:10 PM"],
        ["B1", "FRE", "ADE", "OS - Sunday, June 10 - 2:40 PM"],
        ["B1", "MEL", "COL", "MCG - Monday, June 11 - 3:20 PM"],
        ["B1", "PTA", "WBD", "AO - Thursday, June 14 - 7:20 PM"],
        ["B1", "SYD", "WCE", "SCG - Friday, June 15 - 7:50 PM"],
        ["B1", "CAR", "FRE", "ES - Saturday, June 16 - 1:45 PM"],
        ["B2", "GCS", "STK", "MS - Saturday, June 16 - 4:35 PM"],
        ["B2", "HAW", "ADE", "MCG - Saturday, June 16 - 7:25 PM"],
        ["B2", "GEE", "RIC", "MCG - Sunday, June 17 - 3:20 PM"],
        ["B2", "WCE", "ESS", "OS - Thursday, June 21 - 6:10 PM"],
        ["B2", "PTA", "MEL", "AO - Friday, June 22 - 7:20 PM"],
        ["B2", "HAW", "GCS", "US - Saturday, June 23 - 1:45 PM"],
        ["B2", "BRI", "GWS", "G - Saturday, June 23 - 4:35 PM"],
        ["B2", "WBD", "NTH", "ES - Saturday, June 23 - 7:25 PM"],
        ["B2", "COL", "CAR", "MCG - Sunday, June 24 - 3:20 PM"],
        ["R15", "RIC", "SYD", "ES - Thursday, June 28 - 7:20 PM"],
        ["R15", "WBD", "GEE", "ES - Friday, June 29 - 7:50 PM"],
        ["R15", "CAR", "PTA", "MCG - Saturday, June 30 - 1:45 PM"],
        ["R15", "ADE", "WCE", "AO - Saturday, June 30 - 4:05 PM"],
        ["R15", "GCS", "COL", "MS - Saturday, June 30 - 7:25 PM"],
        ["R15", "GWS", "HAW", "SPO - Saturday, June 30 - 7:25 PM"],
        ["R15", "MEL", "STK", "MCG - Sunday, July 1 - 1:10 PM"],
        ["R15", "ESS", "NTH", "ES - Sunday, July 1 - 3:20 PM"],
        ["R15", "FRE", "BRI", "OS - Sunday, July 1 - 2:40 PM"],
        ["R16", "SYD", "GEE", "SCG - Thursday, July 5 - 7:20 PM"],
        ["R16", "RIC", "ADE", "MCG - Friday, July 6 - 7:50 PM"],
        ["R16", "BRI", "CAR", "G - Saturday, July 7 - 1:45 PM"],
        ["R16", "PTA", "STK", "AO - Saturday, July 7 - 4:05 PM"],
        ["R16", "WBD", "HAW", "ES - Saturday, July 7 - 7:25 PM"],
        ["R16", "MEL", "FRE", "TIO - Saturday, July 7 - 7:10 PM"],
        ["R16", "NTH", "GCS", "ES - Sunday, July 8 - 1:10 PM"],
        ["R16", "ESS", "COL", "MCG - Sunday, July 8 - 3:20 PM"],
        ["R16", "WCE", "GWS", "OS - Sunday, July 8 - 2:40 PM"],
        ["R17", "ADE", "GEE", "AO - Thursday, July 12 - 7:20 PM"],
        ["R17", "STK", "CAR", "ES - Friday, July 13 - 7:50 PM"],
        ["R17", "HAW", "BRI", "US - Saturday, July 14 - 1:45 PM"],
        ["R17", "MEL", "WBD", "MCG - Saturday, July 14 - 4:05 PM"],
        ["R17", "GCS", "ESS", "MS - Saturday, July 14 - 7:25 PM"],
        ["R17", "GWS", "RIC", "SPO - Saturday, July 14 - 7:25 PM"],
        ["R17", "COL", "WCE", "MCG - Sunday, July 15 - 1:10 PM"],
        ["R17", "NTH", "SYD", "ES - Sunday, July 15 - 3:20 PM"],
        ["R17", "FRE", "PTA", "OS - Sunday, July 15 - 2:40 PM"],
        ["R18", "STK", "RIC", "ES - Friday, July 20 - 7:50 PM"],
        ["R18", "COL", "NTH", "MCG - Saturday, July 21 - 1:45 PM"],
        ["R18", "SYD", "GCS", "SCG - Saturday, July 21 - 2:10 PM"],
        ["R18", "ESS", "FRE", "ES - Saturday, July 21 - 4:35 PM"],
        ["R18", "BRI", "ADE", "G - Saturday, July 21 - 7:25 PM"],
        ["R18", "GEE", "MEL", "GS - Saturday, July 21 - 7:25 PM"],
        ["R18", "CAR", "HAW", "ES - Sunday, July 22 - 1:10 PM"],
        ["R18", "WCE", "WBD", "OS - Sunday, July 22 - 1:20 PM"],
        ["R18", "PTA", "GWS", "AO - Sunday, July 2 - 4:10 PM"],
        ["R19", "ESS", "SYD", "ES - Friday, July 27 - 7:50 PM"],
        ["R19", "RIC", "COL", "MCG - Saturday, July 28 - 1:45 PM"],
        ["R19", "GEE", "BRI", "GS - Saturday, July 28 - 2:10 PM"],
        ["R19", "GWS", "STK", "SPO - Saturday, July 28 - 4:35 PM"],
        ["R19", "GCS", "CAR", "MS - Saturday, July 28 - 7:25 PM"],
        ["R19", "ADE", "MEL", "AO - Saturday, July 28 - 7:10 PM"],
        ["R19", "NTH", "WCE", "BA - Sunday, July 29 - 1:10 PM"],
        ["R19", "WBD", "PTA", "MARS - Sunday, July 29 - 3:20 PM"],
        ["R19", "FRE", "HAW", "OS - Sunday, July 29 - 2:40 PM"],
        ["F1", "RIC", "GEE", ""],
        ["F1", "HAW", "ESS", ""],
        ["F1", "BRI", "NTH", ""],
        ["F1", "ADE", "PTA", ""],
        ["F1", "STK", "WBD", ""],
        ["F1", "SYD", "COL", ""],
        ["F1", "CAR", "GWS", ""],
        ["F1", "MEL", "GCS", ""],
        ["F1", "WCE", "FRE", ""]
    ]
}
