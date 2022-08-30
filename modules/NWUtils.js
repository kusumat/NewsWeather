isHelpClicked = false;
var NWContants = {
    SDESCLENGTH : 100,
    TITLELENGTH : 50,
    CATEGORIES: {
        "BUSINESS": "Business",
        "ENTERTAINMENT": "Entertainment",
        "GENERAL": "General",
        "HEALTH": "Health",
        "SCIENCE": "science",
        "SPORTS": "Sports",
        "TECHNOLOGY": "Technology",
        "TOPSTORIES" : "Top-Stories"
    },
  CATEGORYID : {
    "business" : "business",
    "entertainment": "entertainment",
    "general" : "general",
    "health" : "health",
    "science" : "science",
    "sports" : "sports",
    "technology" : "technology",
    "top-stories" : ""
  },
    SERVICES: {
        NEWS: {
            "SERVICE_NAME": "NewsSampleService",
            "OPERATION_NAME": "CategorizedNews"
        },
        TOPSTORIESANDWEATHER: {
            "SERVICE_NAME": "TopStoriesandWeatherSample",
            "OPERATION_NAME": "getStoriesAndWeather"
        }
    }
};

var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function showLoadingScreen(text) {
    voltmx.application.showLoadingScreen("frmLoading",
        text,
        constants.LOADING_SCREEN_POSITION_ONLY_CENTER,
        false,
        true,
        null);
}

function dismissLoadingScreen() {
    voltmx.application.dismissLoadingScreen();
}