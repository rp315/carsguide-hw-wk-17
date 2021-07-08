$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "\r\nAs a user I want to search car by make and model",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in result",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - New England",
        "$80,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Sydney",
        "$60,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Hyundai",
        "I30",
        "NSW - Newcastle",
        "$40,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery",
        "VIC - Central Victoria",
        "$90,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "SA - North",
        "$50,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4129798600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 208279000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 518068300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1220114500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 123759600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 237353300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 190886500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 151242900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 138603900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12369407900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 31241900,
  "status": "passed"
});
formatter.after({
  "duration": 729711100,
  "status": "passed"
});
formatter.before({
  "duration": 3858037400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 173470600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2322189900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 51553800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 124633200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 326586100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 122130800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 136527900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 11923833600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 23398400,
  "status": "passed"
});
formatter.after({
  "duration": 728831700,
  "status": "passed"
});
formatter.before({
  "duration": 3730975600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 201560000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1257021400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 60594300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 158027500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 201701700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 209791100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 168564200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12358691700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 24544500,
  "status": "passed"
});
formatter.after({
  "duration": 791829900,
  "status": "passed"
});
formatter.before({
  "duration": 4248467300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"I30\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Hyundai\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 255547200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1339294700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 213696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 159035700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I30",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 155416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 164617800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 149973100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 11509822600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 28671000,
  "status": "passed"
});
formatter.after({
  "duration": 785641300,
  "status": "passed"
});
formatter.before({
  "duration": 10303056700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Discovery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Land Rover\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 215270100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2018631400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 38706500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 159401500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 154696600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 139870900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 141897700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12103132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 25226300,
  "status": "passed"
});
formatter.after({
  "duration": 788447600,
  "status": "passed"
});
formatter.before({
  "duration": 3419827800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on by+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"SA - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Nissan\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iMouseHoverOnBySellTab()"
});
formatter.result({
  "duration": 389517400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1588384500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iNavigateTo(String)"
});
formatter.result({
  "duration": 121210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 178592600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 165394500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - North",
      "offset": 19
    }
  ],
  "location": "BuyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 167823600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 157834400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 12115759100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyStepDefs.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 25246500,
  "status": "passed"
});
formatter.after({
  "duration": 799337500,
  "status": "passed"
});
});