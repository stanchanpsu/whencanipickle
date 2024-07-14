let citiesData = [
  {
    city: "New York",
    latitude: 40.7127837,
    longitude: -74.0059413,
  },
  {
    city: "Los Angeles",
    latitude: 34.0522342,
    longitude: -118.2436849,
  },
  {
    city: "Chicago",
    latitude: 41.8781136,
    longitude: -87.6297982,
  },
  {
    city: "Houston",
    latitude: 29.7604267,
    longitude: -95.3698028,
  },
  {
    city: "Philadelphia",
    latitude: 39.9525839,
    longitude: -75.1652215,
  },
  {
    city: "Phoenix",
    latitude: 33.4483771,
    longitude: -112.0740373,
  },
  {
    city: "San Antonio",
    latitude: 29.4241219,
    longitude: -98.49362819999999,
  },
  {
    city: "San Diego",
    latitude: 32.715738,
    longitude: -117.1610838,
  },
  {
    city: "Dallas",
    latitude: 32.7766642,
    longitude: -96.79698789999999,
  },
  {
    city: "San Jose",
    latitude: 37.3382082,
    longitude: -121.8863286,
  },
  {
    city: "Austin",
    latitude: 30.267153,
    longitude: -97.7430608,
  },
  {
    city: "Indianapolis",
    latitude: 39.768403,
    longitude: -86.158068,
  },
  {
    city: "Jacksonville",
    latitude: 30.3321838,
    longitude: -81.65565099999999,
  },
  {
    city: "San Francisco",
    latitude: 37.7749295,
    longitude: -122.4194155,
  },
  {
    city: "Columbus",
    latitude: 39.9611755,
    longitude: -82.99879419999999,
  },
  {
    city: "Charlotte",
    latitude: 35.2270869,
    longitude: -80.8431267,
  },
  {
    city: "Fort Worth",
    latitude: 32.7554883,
    longitude: -97.3307658,
  },
  {
    city: "Detroit",
    latitude: 42.331427,
    longitude: -83.0457538,
  },
  {
    city: "El Paso",
    latitude: 31.7775757,
    longitude: -106.4424559,
  },
  {
    city: "Memphis",
    latitude: 35.1495343,
    longitude: -90.0489801,
  },
  {
    city: "Seattle",
    latitude: 47.6062095,
    longitude: -122.3320708,
  },
  {
    city: "Denver",
    latitude: 39.7392358,
    longitude: -104.990251,
  },
  {
    city: "Washington",
    latitude: 38.9071923,
    longitude: -77.0368707,
  },
  {
    city: "Boston",
    latitude: 42.3600825,
    longitude: -71.0588801,
  },
  {
    city: "Nashville-Davidson",
    latitude: 36.1626638,
    longitude: -86.7816016,
  },
  {
    city: "Baltimore",
    latitude: 39.2903848,
    longitude: -76.6121893,
  },
  {
    city: "Oklahoma City",
    latitude: 35.4675602,
    longitude: -97.5164276,
  },
  {
    city: "Louisville/Jefferson County",
    latitude: 38.2526647,
    longitude: -85.7584557,
  },
  {
    city: "Portland",
    latitude: 45.5230622,
    longitude: -122.6764816,
  },
  {
    city: "Las Vegas",
    latitude: 36.1699412,
    longitude: -115.1398296,
  },
  {
    city: "Milwaukee",
    latitude: 43.0389025,
    longitude: -87.9064736,
  },
  {
    city: "Albuquerque",
    latitude: 35.0853336,
    longitude: -106.6055534,
  },
  {
    city: "Tucson",
    latitude: 32.2217429,
    longitude: -110.926479,
  },
  {
    city: "Fresno",
    latitude: 36.7468422,
    longitude: -119.7725868,
  },
  {
    city: "Sacramento",
    latitude: 38.5815719,
    longitude: -121.4943996,
  },
  {
    city: "Long Beach",
    latitude: 33.7700504,
    longitude: -118.1937395,
  },
  {
    city: "Kansas City",
    latitude: 39.0997265,
    longitude: -94.5785667,
  },
  {
    city: "Mesa",
    latitude: 33.4151843,
    longitude: -111.8314724,
  },
  {
    city: "Virginia Beach",
    latitude: 36.8529263,
    longitude: -75.97798499999999,
  },
  {
    city: "Atlanta",
    latitude: 33.7489954,
    longitude: -84.3879824,
  },
  {
    city: "Colorado Springs",
    latitude: 38.8338816,
    longitude: -104.8213634,
  },
  {
    city: "Omaha",
    latitude: 41.2523634,
    longitude: -95.99798829999999,
  },
  {
    city: "Raleigh",
    latitude: 35.7795897,
    longitude: -78.6381787,
  },
  {
    city: "Miami",
    latitude: 25.7616798,
    longitude: -80.1917902,
  },
  {
    city: "Oakland",
    latitude: 37.8043637,
    longitude: -122.2711137,
  },
  {
    city: "Minneapolis",
    latitude: 44.977753,
    longitude: -93.2650108,
  },
  {
    city: "Tulsa",
    latitude: 36.1539816,
    longitude: -95.99277500000001,
  },
  {
    city: "Cleveland",
    latitude: 41.49932,
    longitude: -81.6943605,
  },
  {
    city: "Wichita",
    latitude: 37.688889,
    longitude: -97.336111,
  },
  {
    city: "Arlington",
    latitude: 32.735687,
    longitude: -97.10806559999999,
  },
  {
    city: "New Orleans",
    latitude: 29.95106579999999,
    longitude: -90.0715323,
  },
  {
    city: "Bakersfield",
    latitude: 35.3732921,
    longitude: -119.0187125,
  },
  {
    city: "Tampa",
    latitude: 27.950575,
    longitude: -82.4571776,
  },
  {
    city: "Honolulu",
    latitude: 21.3069444,
    longitude: -157.8583333,
  },
  {
    city: "Aurora",
    latitude: 39.7294319,
    longitude: -104.8319195,
  },
  {
    city: "Anaheim",
    latitude: 33.8352932,
    longitude: -117.9145036,
  },
  {
    city: "Santa Ana",
    latitude: 33.7455731,
    longitude: -117.8678338,
  },
  {
    city: "St. Louis",
    latitude: 38.6270025,
    longitude: -90.19940419999999,
  },
  {
    city: "Riverside",
    latitude: 33.9533487,
    longitude: -117.3961564,
  },
  {
    city: "Corpus Christi",
    latitude: 27.8005828,
    longitude: -97.39638099999999,
  },
  {
    city: "Lexington-Fayette",
    latitude: 38.0405837,
    longitude: -84.5037164,
  },
  {
    city: "Pittsburgh",
    latitude: 40.44062479999999,
    longitude: -79.9958864,
  },
  {
    city: "Anchorage",
    latitude: 61.2180556,
    longitude: -149.9002778,
  },
  {
    city: "Stockton",
    latitude: 37.9577016,
    longitude: -121.2907796,
  },
  {
    city: "Cincinnati",
    latitude: 39.1031182,
    longitude: -84.5120196,
  },
  {
    city: "St. Paul",
    latitude: 44.9537029,
    longitude: -93.0899578,
  },
  {
    city: "Toledo",
    latitude: 41.6639383,
    longitude: -83.55521200000001,
  },
  {
    city: "Greensboro",
    latitude: 36.0726354,
    longitude: -79.7919754,
  },
  {
    city: "Newark",
    latitude: 40.735657,
    longitude: -74.1723667,
  },
  {
    city: "Plano",
    latitude: 33.0198431,
    longitude: -96.6988856,
  },
  {
    city: "Henderson",
    latitude: 36.0395247,
    longitude: -114.9817213,
  },
  {
    city: "Lincoln",
    latitude: 40.8257625,
    longitude: -96.6851982,
  },
  {
    city: "Buffalo",
    latitude: 42.88644679999999,
    longitude: -78.8783689,
  },
  {
    city: "Jersey City",
    latitude: 40.72815749999999,
    longitude: -74.0776417,
  },
  {
    city: "Chula Vista",
    latitude: 32.6400541,
    longitude: -117.0841955,
  },
  {
    city: "Fort Wayne",
    latitude: 41.079273,
    longitude: -85.1393513,
  },
  {
    city: "Orlando",
    latitude: 28.5383355,
    longitude: -81.3792365,
  },
  {
    city: "St. Petersburg",
    latitude: 27.773056,
    longitude: -82.64,
  },
  {
    city: "Chandler",
    latitude: 33.3061605,
    longitude: -111.8412502,
  },
  {
    city: "Laredo",
    latitude: 27.5305671,
    longitude: -99.48032409999999,
  },
  {
    city: "Norfolk",
    latitude: 36.8507689,
    longitude: -76.28587259999999,
  },
  {
    city: "Durham",
    latitude: 35.9940329,
    longitude: -78.898619,
  },
  {
    city: "Madison",
    latitude: 43.0730517,
    longitude: -89.4012302,
  },
  {
    city: "Lubbock",
    latitude: 33.5778631,
    longitude: -101.8551665,
  },
  {
    city: "Irvine",
    latitude: 33.6839473,
    longitude: -117.7946942,
  },
  {
    city: "Winston-Salem",
    latitude: 36.09985959999999,
    longitude: -80.244216,
  },
  {
    city: "Glendale",
    latitude: 33.5386523,
    longitude: -112.1859866,
  },
  {
    city: "Garland",
    latitude: 32.912624,
    longitude: -96.63888329999999,
  },
  {
    city: "Hialeah",
    latitude: 25.8575963,
    longitude: -80.2781057,
  },
  {
    city: "Reno",
    latitude: 39.5296329,
    longitude: -119.8138027,
  },
  {
    city: "Chesapeake",
    latitude: 36.7682088,
    longitude: -76.2874927,
  },
  {
    city: "Gilbert",
    latitude: 33.3528264,
    longitude: -111.789027,
  },
  {
    city: "Baton Rouge",
    latitude: 30.4582829,
    longitude: -91.1403196,
  },
  {
    city: "Irving",
    latitude: 32.8140177,
    longitude: -96.9488945,
  },
  {
    city: "Scottsdale",
    latitude: 33.4941704,
    longitude: -111.9260519,
  },
  {
    city: "North Las Vegas",
    latitude: 36.1988592,
    longitude: -115.1175013,
  },
  {
    city: "Fremont",
    latitude: 37.5482697,
    longitude: -121.9885719,
  },
  {
    city: "Boise City",
    latitude: 43.6187102,
    longitude: -116.2146068,
  },
  {
    city: "Richmond",
    latitude: 37.5407246,
    longitude: -77.4360481,
  },
  {
    city: "San Bernardino",
    latitude: 34.1083449,
    longitude: -117.2897652,
  },
  {
    city: "Birmingham",
    latitude: 33.5206608,
    longitude: -86.80248999999999,
  },
  {
    city: "Spokane",
    latitude: 47.6587802,
    longitude: -117.4260466,
  },
  {
    city: "Rochester",
    latitude: 43.16103,
    longitude: -77.6109219,
  },
  {
    city: "Des Moines",
    latitude: 41.6005448,
    longitude: -93.6091064,
  },
  {
    city: "Modesto",
    latitude: 37.63909719999999,
    longitude: -120.9968782,
  },
  {
    city: "Fayetteville",
    latitude: 35.0526641,
    longitude: -78.87835849999999,
  },
  {
    city: "Tacoma",
    latitude: 47.2528768,
    longitude: -122.4442906,
  },
  {
    city: "Oxnard",
    latitude: 34.1975048,
    longitude: -119.1770516,
  },
  {
    city: "Fontana",
    latitude: 34.0922335,
    longitude: -117.435048,
  },
  {
    city: "Columbus",
    latitude: 32.4609764,
    longitude: -84.9877094,
  },
  {
    city: "Montgomery",
    latitude: 32.3668052,
    longitude: -86.2999689,
  },
  {
    city: "Moreno Valley",
    latitude: 33.9424658,
    longitude: -117.2296717,
  },
  {
    city: "Shreveport",
    latitude: 32.5251516,
    longitude: -93.7501789,
  },
  {
    city: "Aurora",
    latitude: 41.7605849,
    longitude: -88.32007150000001,
  },
  {
    city: "Yonkers",
    latitude: 40.9312099,
    longitude: -73.89874689999999,
  },
  {
    city: "Akron",
    latitude: 41.0814447,
    longitude: -81.51900529999999,
  },
  {
    city: "Huntington Beach",
    latitude: 33.660297,
    longitude: -117.9992265,
  },
  {
    city: "Little Rock",
    latitude: 34.7464809,
    longitude: -92.28959479999999,
  },
  {
    city: "Augusta-Richmond County",
    latitude: 33.4734978,
    longitude: -82.0105148,
  },
  {
    city: "Amarillo",
    latitude: 35.2219971,
    longitude: -101.8312969,
  },
  {
    city: "Glendale",
    latitude: 34.1425078,
    longitude: -118.255075,
  },
  {
    city: "Mobile",
    latitude: 30.6953657,
    longitude: -88.0398912,
  },
  {
    city: "Grand Rapids",
    latitude: 42.9633599,
    longitude: -85.6680863,
  },
  {
    city: "Salt Lake City",
    latitude: 40.7607793,
    longitude: -111.8910474,
  },
  {
    city: "Tallahassee",
    latitude: 30.4382559,
    longitude: -84.28073289999999,
  },
  {
    city: "Huntsville",
    latitude: 34.7303688,
    longitude: -86.5861037,
  },
  {
    city: "Grand Prairie",
    latitude: 32.7459645,
    longitude: -96.99778459999999,
  },
  {
    city: "Knoxville",
    latitude: 35.9606384,
    longitude: -83.9207392,
  },
  {
    city: "Worcester",
    latitude: 42.2625932,
    longitude: -71.8022934,
  },
  {
    city: "Newport News",
    latitude: 37.0870821,
    longitude: -76.4730122,
  },
  {
    city: "Brownsville",
    latitude: 25.9017472,
    longitude: -97.4974838,
  },
  {
    city: "Overland Park",
    latitude: 38.9822282,
    longitude: -94.6707917,
  },
  {
    city: "Santa Clarita",
    latitude: 34.3916641,
    longitude: -118.542586,
  },
  {
    city: "Providence",
    latitude: 41.8239891,
    longitude: -71.4128343,
  },
  {
    city: "Garden Grove",
    latitude: 33.7739053,
    longitude: -117.9414477,
  },
  {
    city: "Chattanooga",
    latitude: 35.0456297,
    longitude: -85.3096801,
  },
  {
    city: "Oceanside",
    latitude: 33.1958696,
    longitude: -117.3794834,
  },
  {
    city: "Jackson",
    latitude: 32.2987573,
    longitude: -90.1848103,
  },
  {
    city: "Fort Lauderdale",
    latitude: 26.1224386,
    longitude: -80.13731740000001,
  },
  {
    city: "Santa Rosa",
    latitude: 38.440429,
    longitude: -122.7140548,
  },
  {
    city: "Rancho Cucamonga",
    latitude: 34.10639889999999,
    longitude: -117.5931084,
  },
  {
    city: "Port St. Lucie",
    latitude: 27.2730492,
    longitude: -80.3582261,
  },
  {
    city: "Tempe",
    latitude: 33.4255104,
    longitude: -111.9400054,
  },
  {
    city: "Ontario",
    latitude: 34.0633443,
    longitude: -117.6508876,
  },
  {
    city: "Vancouver",
    latitude: 45.6387281,
    longitude: -122.6614861,
  },
  {
    city: "Cape Coral",
    latitude: 26.5628537,
    longitude: -81.9495331,
  },
  {
    city: "Sioux Falls",
    latitude: 43.5445959,
    longitude: -96.73110340000001,
  },
  {
    city: "Springfield",
    latitude: 37.2089572,
    longitude: -93.29229889999999,
  },
  {
    city: "Peoria",
    latitude: 33.5805955,
    longitude: -112.2373779,
  },
  {
    city: "Pembroke Pines",
    latitude: 26.007765,
    longitude: -80.2962555,
  },
  {
    city: "Elk Grove",
    latitude: 38.4087993,
    longitude: -121.3716178,
  },
  {
    city: "Salem",
    latitude: 44.9428975,
    longitude: -123.0350963,
  },
  {
    city: "Lancaster",
    latitude: 34.6867846,
    longitude: -118.1541632,
  },
  {
    city: "Corona",
    latitude: 33.8752935,
    longitude: -117.5664384,
  },
  {
    city: "Eugene",
    latitude: 44.0520691,
    longitude: -123.0867536,
  },
  {
    city: "Palmdale",
    latitude: 34.5794343,
    longitude: -118.1164613,
  },
  {
    city: "Salinas",
    latitude: 36.6777372,
    longitude: -121.6555013,
  },
  {
    city: "Springfield",
    latitude: 42.1014831,
    longitude: -72.589811,
  },
  {
    city: "Pasadena",
    latitude: 29.6910625,
    longitude: -95.2091006,
  },
  {
    city: "Fort Collins",
    latitude: 40.5852602,
    longitude: -105.084423,
  },
  {
    city: "Hayward",
    latitude: 37.6688205,
    longitude: -122.0807964,
  },
  {
    city: "Pomona",
    latitude: 34.055103,
    longitude: -117.7499909,
  },
  {
    city: "Cary",
    latitude: 35.79154,
    longitude: -78.7811169,
  },
  {
    city: "Rockford",
    latitude: 42.2711311,
    longitude: -89.0939952,
  },
  {
    city: "Alexandria",
    latitude: 38.8048355,
    longitude: -77.0469214,
  },
  {
    city: "Escondido",
    latitude: 33.1192068,
    longitude: -117.086421,
  },
  {
    city: "McKinney",
    latitude: 33.1972465,
    longitude: -96.6397822,
  },
  {
    city: "Kansas City",
    latitude: 39.114053,
    longitude: -94.6274636,
  },
  {
    city: "Joliet",
    latitude: 41.525031,
    longitude: -88.0817251,
  },
  {
    city: "Sunnyvale",
    latitude: 37.36883,
    longitude: -122.0363496,
  },
  {
    city: "Torrance",
    latitude: 33.8358492,
    longitude: -118.3406288,
  },
  {
    city: "Bridgeport",
    latitude: 41.1865478,
    longitude: -73.19517669999999,
  },
  {
    city: "Lakewood",
    latitude: 39.7047095,
    longitude: -105.0813734,
  },
  {
    city: "Hollywood",
    latitude: 26.0112014,
    longitude: -80.1494901,
  },
  {
    city: "Paterson",
    latitude: 40.9167654,
    longitude: -74.17181099999999,
  },
  {
    city: "Naperville",
    latitude: 41.7508391,
    longitude: -88.1535352,
  },
  {
    city: "Syracuse",
    latitude: 43.0481221,
    longitude: -76.14742439999999,
  },
  {
    city: "Mesquite",
    latitude: 32.76679550000001,
    longitude: -96.5991593,
  },
  {
    city: "Dayton",
    latitude: 39.7589478,
    longitude: -84.1916069,
  },
  {
    city: "Savannah",
    latitude: 32.0835407,
    longitude: -81.09983419999999,
  },
  {
    city: "Clarksville",
    latitude: 36.5297706,
    longitude: -87.3594528,
  },
  {
    city: "Orange",
    latitude: 33.7877944,
    longitude: -117.8531119,
  },
  {
    city: "Pasadena",
    latitude: 34.1477849,
    longitude: -118.1445155,
  },
  {
    city: "Fullerton",
    latitude: 33.8703596,
    longitude: -117.9242966,
  },
  {
    city: "Killeen",
    latitude: 31.1171194,
    longitude: -97.72779589999999,
  },
  {
    city: "Frisco",
    latitude: 33.1506744,
    longitude: -96.82361159999999,
  },
  {
    city: "Hampton",
    latitude: 37.0298687,
    longitude: -76.34522179999999,
  },
  {
    city: "McAllen",
    latitude: 26.2034071,
    longitude: -98.23001239999999,
  },
  {
    city: "Warren",
    latitude: 42.5144566,
    longitude: -83.01465259999999,
  },
  {
    city: "Bellevue",
    latitude: 47.610377,
    longitude: -122.2006786,
  },
  {
    city: "West Valley City",
    latitude: 40.6916132,
    longitude: -112.0010501,
  },
  {
    city: "Columbia",
    latitude: 34.0007104,
    longitude: -81.0348144,
  },
  {
    city: "Olathe",
    latitude: 38.8813958,
    longitude: -94.81912849999999,
  },
  {
    city: "Sterling Heights",
    latitude: 42.5803122,
    longitude: -83.0302033,
  },
  {
    city: "New Haven",
    latitude: 41.308274,
    longitude: -72.9278835,
  },
  {
    city: "Miramar",
    latitude: 25.9860762,
    longitude: -80.30356019999999,
  },
  {
    city: "Waco",
    latitude: 31.549333,
    longitude: -97.1466695,
  },
  {
    city: "Thousand Oaks",
    latitude: 34.1705609,
    longitude: -118.8375937,
  },
  {
    city: "Cedar Rapids",
    latitude: 41.9778795,
    longitude: -91.6656232,
  },
  {
    city: "Charleston",
    latitude: 32.7764749,
    longitude: -79.93105120000001,
  },
  {
    city: "Visalia",
    latitude: 36.3302284,
    longitude: -119.2920585,
  },
  {
    city: "Topeka",
    latitude: 39.0558235,
    longitude: -95.68901849999999,
  },
  {
    city: "Elizabeth",
    latitude: 40.6639916,
    longitude: -74.2107006,
  },
  {
    city: "Gainesville",
    latitude: 29.6516344,
    longitude: -82.32482619999999,
  },
  {
    city: "Thornton",
    latitude: 39.8680412,
    longitude: -104.9719243,
  },
  {
    city: "Roseville",
    latitude: 38.7521235,
    longitude: -121.2880059,
  },
  {
    city: "Carrollton",
    latitude: 32.9756415,
    longitude: -96.8899636,
  },
  {
    city: "Coral Springs",
    latitude: 26.271192,
    longitude: -80.2706044,
  },
  {
    city: "Stamford",
    latitude: 41.0534302,
    longitude: -73.5387341,
  },
  {
    city: "Simi Valley",
    latitude: 34.2694474,
    longitude: -118.781482,
  },
  {
    city: "Concord",
    latitude: 37.9779776,
    longitude: -122.0310733,
  },
  {
    city: "Hartford",
    latitude: 41.76371109999999,
    longitude: -72.6850932,
  },
  {
    city: "Kent",
    latitude: 47.3809335,
    longitude: -122.2348431,
  },
  {
    city: "Lafayette",
    latitude: 30.2240897,
    longitude: -92.0198427,
  },
  {
    city: "Midland",
    latitude: 31.9973456,
    longitude: -102.0779146,
  },
  {
    city: "Surprise",
    latitude: 33.6292337,
    longitude: -112.3679279,
  },
  {
    city: "Denton",
    latitude: 33.2148412,
    longitude: -97.13306829999999,
  },
  {
    city: "Victorville",
    latitude: 34.5362184,
    longitude: -117.2927641,
  },
  {
    city: "Evansville",
    latitude: 37.9715592,
    longitude: -87.5710898,
  },
  {
    city: "Santa Clara",
    latitude: 37.3541079,
    longitude: -121.9552356,
  },
  {
    city: "Abilene",
    latitude: 32.4487364,
    longitude: -99.73314390000002,
  },
  {
    city: "Athens-Clarke County",
    latitude: 33.9519347,
    longitude: -83.357567,
  },
  {
    city: "Vallejo",
    latitude: 38.1040864,
    longitude: -122.2566367,
  },
  {
    city: "Allentown",
    latitude: 40.6084305,
    longitude: -75.4901833,
  },
  {
    city: "Norman",
    latitude: 35.2225668,
    longitude: -97.4394777,
  },
  {
    city: "Beaumont",
    latitude: 30.080174,
    longitude: -94.1265562,
  },
  {
    city: "Independence",
    latitude: 39.0911161,
    longitude: -94.41550679999999,
  },
  {
    city: "Murfreesboro",
    latitude: 35.8456213,
    longitude: -86.39027,
  },
  {
    city: "Ann Arbor",
    latitude: 42.2808256,
    longitude: -83.7430378,
  },
  {
    city: "Springfield",
    latitude: 39.78172130000001,
    longitude: -89.6501481,
  },
  {
    city: "Berkeley",
    latitude: 37.8715926,
    longitude: -122.272747,
  },
  {
    city: "Peoria",
    latitude: 40.6936488,
    longitude: -89.5889864,
  },
  {
    city: "Provo",
    latitude: 40.2338438,
    longitude: -111.6585337,
  },
  {
    city: "El Monte",
    latitude: 34.0686206,
    longitude: -118.0275667,
  },
  {
    city: "Columbia",
    latitude: 38.9517053,
    longitude: -92.3340724,
  },
  {
    city: "Lansing",
    latitude: 42.732535,
    longitude: -84.5555347,
  },
  {
    city: "Fargo",
    latitude: 46.8771863,
    longitude: -96.7898034,
  },
  {
    city: "Downey",
    latitude: 33.9401088,
    longitude: -118.1331593,
  },
  {
    city: "Costa Mesa",
    latitude: 33.6411316,
    longitude: -117.9186689,
  },
  {
    city: "Wilmington",
    latitude: 34.2257255,
    longitude: -77.9447102,
  },
  {
    city: "Arvada",
    latitude: 39.8027644,
    longitude: -105.0874842,
  },
  {
    city: "Inglewood",
    latitude: 33.9616801,
    longitude: -118.3531311,
  },
  {
    city: "Miami Gardens",
    latitude: 25.9420377,
    longitude: -80.2456045,
  },
  {
    city: "Carlsbad",
    latitude: 33.1580933,
    longitude: -117.3505939,
  },
  {
    city: "Westminster",
    latitude: 39.8366528,
    longitude: -105.0372046,
  },
  {
    city: "Rochester",
    latitude: 44.0121221,
    longitude: -92.4801989,
  },
  {
    city: "Odessa",
    latitude: 31.8456816,
    longitude: -102.3676431,
  },
  {
    city: "Manchester",
    latitude: 42.9956397,
    longitude: -71.4547891,
  },
  {
    city: "Elgin",
    latitude: 42.0354084,
    longitude: -88.2825668,
  },
  {
    city: "West Jordan",
    latitude: 40.6096698,
    longitude: -111.9391031,
  },
  {
    city: "Round Rock",
    latitude: 30.5082551,
    longitude: -97.678896,
  },
  {
    city: "Clearwater",
    latitude: 27.9658533,
    longitude: -82.8001026,
  },
  {
    city: "Waterbury",
    latitude: 41.5581525,
    longitude: -73.0514965,
  },
  {
    city: "Gresham",
    latitude: 45.5001357,
    longitude: -122.4302013,
  },
  {
    city: "Fairfield",
    latitude: 38.24935809999999,
    longitude: -122.0399663,
  },
  {
    city: "Billings",
    latitude: 45.7832856,
    longitude: -108.5006904,
  },
  {
    city: "Lowell",
    latitude: 42.6334247,
    longitude: -71.31617179999999,
  },
  {
    city: "San Buenaventura (Ventura)",
    latitude: 34.274646,
    longitude: -119.2290316,
  },
  {
    city: "Pueblo",
    latitude: 38.2544472,
    longitude: -104.6091409,
  },
  {
    city: "High Point",
    latitude: 35.9556923,
    longitude: -80.0053176,
  },
  {
    city: "West Covina",
    latitude: 34.0686208,
    longitude: -117.9389526,
  },
  {
    city: "Richmond",
    latitude: 37.9357576,
    longitude: -122.3477486,
  },
  {
    city: "Murrieta",
    latitude: 33.5539143,
    longitude: -117.2139232,
  },
  {
    city: "Cambridge",
    latitude: 42.3736158,
    longitude: -71.10973349999999,
  },
  {
    city: "Antioch",
    latitude: 38.0049214,
    longitude: -121.805789,
  },
  {
    city: "Temecula",
    latitude: 33.4936391,
    longitude: -117.1483648,
  },
  {
    city: "Norwalk",
    latitude: 33.9022367,
    longitude: -118.081733,
  },
  {
    city: "Centennial",
    latitude: 39.5807452,
    longitude: -104.8771726,
  },
  {
    city: "Everett",
    latitude: 47.9789848,
    longitude: -122.2020794,
  },
  {
    city: "Palm Bay",
    latitude: 28.0344621,
    longitude: -80.5886646,
  },
  {
    city: "Wichita Falls",
    latitude: 33.9137085,
    longitude: -98.4933873,
  },
  {
    city: "Green Bay",
    latitude: 44.51915899999999,
    longitude: -88.019826,
  },
  {
    city: "Daly City",
    latitude: 37.6879241,
    longitude: -122.4702079,
  },
  {
    city: "Burbank",
    latitude: 34.1808392,
    longitude: -118.3089661,
  },
  {
    city: "Richardson",
    latitude: 32.9483335,
    longitude: -96.7298519,
  },
  {
    city: "Pompano Beach",
    latitude: 26.2378597,
    longitude: -80.1247667,
  },
  {
    city: "North Charleston",
    latitude: 32.8546197,
    longitude: -79.9748103,
  },
  {
    city: "Broken Arrow",
    latitude: 36.060949,
    longitude: -95.7974526,
  },
  {
    city: "Boulder",
    latitude: 40.0149856,
    longitude: -105.2705456,
  },
  {
    city: "West Palm Beach",
    latitude: 26.7153424,
    longitude: -80.0533746,
  },
  {
    city: "Santa Maria",
    latitude: 34.9530337,
    longitude: -120.4357191,
  },
  {
    city: "El Cajon",
    latitude: 32.7947731,
    longitude: -116.9625269,
  },
  {
    city: "Davenport",
    latitude: 41.5236437,
    longitude: -90.5776367,
  },
  {
    city: "Rialto",
    latitude: 34.1064001,
    longitude: -117.3703235,
  },
  {
    city: "Las Cruces",
    latitude: 32.3199396,
    longitude: -106.7636538,
  },
  {
    city: "San Mateo",
    latitude: 37.5629917,
    longitude: -122.3255254,
  },
  {
    city: "Lewisville",
    latitude: 33.046233,
    longitude: -96.994174,
  },
  {
    city: "South Bend",
    latitude: 41.6763545,
    longitude: -86.25198979999999,
  },
  {
    city: "Lakeland",
    latitude: 28.0394654,
    longitude: -81.9498042,
  },
  {
    city: "Erie",
    latitude: 42.12922409999999,
    longitude: -80.085059,
  },
  {
    city: "Tyler",
    latitude: 32.3512601,
    longitude: -95.30106239999999,
  },
  {
    city: "Pearland",
    latitude: 29.5635666,
    longitude: -95.2860474,
  },
  {
    city: "College Station",
    latitude: 30.627977,
    longitude: -96.3344068,
  },
  {
    city: "Kenosha",
    latitude: 42.5847425,
    longitude: -87.82118539999999,
  },
  {
    city: "Sandy Springs",
    latitude: 33.9304352,
    longitude: -84.3733147,
  },
  {
    city: "Clovis",
    latitude: 36.8252277,
    longitude: -119.7029194,
  },
  {
    city: "Flint",
    latitude: 43.0125274,
    longitude: -83.6874562,
  },
  {
    city: "Roanoke",
    latitude: 37.2709704,
    longitude: -79.9414266,
  },
  {
    city: "Albany",
    latitude: 42.6525793,
    longitude: -73.7562317,
  },
  {
    city: "Jurupa Valley",
    latitude: 33.9971974,
    longitude: -117.4854802,
  },
  {
    city: "Compton",
    latitude: 33.8958492,
    longitude: -118.2200712,
  },
  {
    city: "San Angelo",
    latitude: 31.4637723,
    longitude: -100.4370375,
  },
  {
    city: "Hillsboro",
    latitude: 45.5228939,
    longitude: -122.989827,
  },
  {
    city: "Lawton",
    latitude: 34.6035669,
    longitude: -98.39592909999999,
  },
  {
    city: "Renton",
    latitude: 47.48287759999999,
    longitude: -122.2170661,
  },
  {
    city: "Vista",
    latitude: 33.2000368,
    longitude: -117.2425355,
  },
  {
    city: "Davie",
    latitude: 26.0764783,
    longitude: -80.25211569999999,
  },
  {
    city: "Greeley",
    latitude: 40.4233142,
    longitude: -104.7091322,
  },
  {
    city: "Mission Viejo",
    latitude: 33.6000232,
    longitude: -117.6719953,
  },
  {
    city: "Portsmouth",
    latitude: 36.8354258,
    longitude: -76.2982742,
  },
  {
    city: "Dearborn",
    latitude: 42.3222599,
    longitude: -83.17631449999999,
  },
  {
    city: "South Gate",
    latitude: 33.954737,
    longitude: -118.2120161,
  },
  {
    city: "Tuscaloosa",
    latitude: 33.2098407,
    longitude: -87.56917349999999,
  },
  {
    city: "Livonia",
    latitude: 42.36837,
    longitude: -83.35270969999999,
  },
  {
    city: "New Bedford",
    latitude: 41.6362152,
    longitude: -70.93420499999999,
  },
  {
    city: "Vacaville",
    latitude: 38.3565773,
    longitude: -121.9877444,
  },
  {
    city: "Brockton",
    latitude: 42.0834335,
    longitude: -71.0183787,
  },
  {
    city: "Roswell",
    latitude: 34.0232431,
    longitude: -84.3615555,
  },
  {
    city: "Beaverton",
    latitude: 45.48706199999999,
    longitude: -122.8037102,
  },
  {
    city: "Quincy",
    latitude: 42.2528772,
    longitude: -71.0022705,
  },
  {
    city: "Sparks",
    latitude: 39.5349112,
    longitude: -119.7526886,
  },
  {
    city: "Yakima",
    latitude: 46.6020711,
    longitude: -120.5058987,
  },
  {
    city: "Lee's Summit",
    latitude: 38.9108408,
    longitude: -94.3821724,
  },
  {
    city: "Federal Way",
    latitude: 47.3223221,
    longitude: -122.3126222,
  },
  {
    city: "Carson",
    latitude: 33.8316745,
    longitude: -118.281693,
  },
  {
    city: "Santa Monica",
    latitude: 34.0194543,
    longitude: -118.4911912,
  },
  {
    city: "Hesperia",
    latitude: 34.4263886,
    longitude: -117.3008784,
  },
  {
    city: "Allen",
    latitude: 33.1031744,
    longitude: -96.67055030000002,
  },
  {
    city: "Rio Rancho",
    latitude: 35.2327544,
    longitude: -106.6630437,
  },
  {
    city: "Yuma",
    latitude: 32.6926512,
    longitude: -114.6276916,
  },
  {
    city: "Westminster",
    latitude: 33.7513419,
    longitude: -117.9939921,
  },
  {
    city: "Orem",
    latitude: 40.2968979,
    longitude: -111.6946475,
  },
  {
    city: "Lynn",
    latitude: 42.46676300000001,
    longitude: -70.9494938,
  },
  {
    city: "Redding",
    latitude: 40.5865396,
    longitude: -122.3916754,
  },
  {
    city: "Spokane Valley",
    latitude: 47.6732281,
    longitude: -117.2393748,
  },
  {
    city: "Miami Beach",
    latitude: 25.790654,
    longitude: -80.1300455,
  },
  {
    city: "League City",
    latitude: 29.5074538,
    longitude: -95.0949303,
  },
  {
    city: "Lawrence",
    latitude: 38.9716689,
    longitude: -95.2352501,
  },
  {
    city: "Santa Barbara",
    latitude: 34.4208305,
    longitude: -119.6981901,
  },
  {
    city: "Plantation",
    latitude: 26.1275862,
    longitude: -80.23310359999999,
  },
  {
    city: "Sandy",
    latitude: 40.5649781,
    longitude: -111.8389726,
  },
  {
    city: "Sunrise",
    latitude: 26.1669711,
    longitude: -80.25659499999999,
  },
  {
    city: "Macon",
    latitude: 32.8406946,
    longitude: -83.6324022,
  },
  {
    city: "Longmont",
    latitude: 40.1672068,
    longitude: -105.1019275,
  },
  {
    city: "Boca Raton",
    latitude: 26.3683064,
    longitude: -80.1289321,
  },
  {
    city: "San Marcos",
    latitude: 33.1433723,
    longitude: -117.1661449,
  },
  {
    city: "Greenville",
    latitude: 35.612661,
    longitude: -77.3663538,
  },
  {
    city: "Waukegan",
    latitude: 42.3636331,
    longitude: -87.84479379999999,
  },
  {
    city: "Fall River",
    latitude: 41.7014912,
    longitude: -71.1550451,
  },
  {
    city: "Chico",
    latitude: 39.7284944,
    longitude: -121.8374777,
  },
  {
    city: "Newton",
    latitude: 42.3370413,
    longitude: -71.20922139999999,
  },
  {
    city: "San Leandro",
    latitude: 37.7249296,
    longitude: -122.1560768,
  },
  {
    city: "Reading",
    latitude: 40.3356483,
    longitude: -75.9268747,
  },
  {
    city: "Norwalk",
    latitude: 41.11774399999999,
    longitude: -73.4081575,
  },
  {
    city: "Fort Smith",
    latitude: 35.3859242,
    longitude: -94.39854749999999,
  },
  {
    city: "Newport Beach",
    latitude: 33.6189101,
    longitude: -117.9289469,
  },
  {
    city: "Asheville",
    latitude: 35.5950581,
    longitude: -82.5514869,
  },
  {
    city: "Nashua",
    latitude: 42.7653662,
    longitude: -71.46756599999999,
  },
  {
    city: "Edmond",
    latitude: 35.6528323,
    longitude: -97.47809540000002,
  },
  {
    city: "Whittier",
    latitude: 33.9791793,
    longitude: -118.032844,
  },
  {
    city: "Nampa",
    latitude: 43.5407172,
    longitude: -116.5634624,
  },
  {
    city: "Bloomington",
    latitude: 44.840798,
    longitude: -93.2982799,
  },
  {
    city: "Deltona",
    latitude: 28.9005446,
    longitude: -81.26367379999999,
  },
  {
    city: "Hawthorne",
    latitude: 33.9164032,
    longitude: -118.3525748,
  },
  {
    city: "Duluth",
    latitude: 46.78667189999999,
    longitude: -92.1004852,
  },
  {
    city: "Carmel",
    latitude: 39.978371,
    longitude: -86.1180435,
  },
  {
    city: "Suffolk",
    latitude: 36.7282054,
    longitude: -76.5835621,
  },
  {
    city: "Clifton",
    latitude: 40.8584328,
    longitude: -74.16375529999999,
  },
  {
    city: "Citrus Heights",
    latitude: 38.7071247,
    longitude: -121.2810611,
  },
  {
    city: "Livermore",
    latitude: 37.6818745,
    longitude: -121.7680088,
  },
  {
    city: "Tracy",
    latitude: 37.7396513,
    longitude: -121.4252227,
  },
  {
    city: "Alhambra",
    latitude: 34.095287,
    longitude: -118.1270146,
  },
  {
    city: "Kirkland",
    latitude: 47.6814875,
    longitude: -122.2087353,
  },
  {
    city: "Trenton",
    latitude: 40.2170534,
    longitude: -74.7429384,
  },
  {
    city: "Ogden",
    latitude: 41.223,
    longitude: -111.9738304,
  },
  {
    city: "Hoover",
    latitude: 33.4053867,
    longitude: -86.8113781,
  },
  {
    city: "Cicero",
    latitude: 41.8455877,
    longitude: -87.7539448,
  },
  {
    city: "Fishers",
    latitude: 39.9567548,
    longitude: -86.01335,
  },
  {
    city: "Sugar Land",
    latitude: 29.6196787,
    longitude: -95.6349463,
  },
  {
    city: "Danbury",
    latitude: 41.394817,
    longitude: -73.4540111,
  },
  {
    city: "Meridian",
    latitude: 43.6121087,
    longitude: -116.3915131,
  },
  {
    city: "Indio",
    latitude: 33.7205771,
    longitude: -116.2155619,
  },
  {
    city: "Concord",
    latitude: 35.4087517,
    longitude: -80.579511,
  },
  {
    city: "Menifee",
    latitude: 33.6971468,
    longitude: -117.185294,
  },
  {
    city: "Champaign",
    latitude: 40.1164204,
    longitude: -88.2433829,
  },
  {
    city: "Buena Park",
    latitude: 33.8675143,
    longitude: -117.9981181,
  },
  {
    city: "Troy",
    latitude: 42.6064095,
    longitude: -83.1497751,
  },
  {
    city: "O'Fallon",
    latitude: 38.8106075,
    longitude: -90.69984769999999,
  },
  {
    city: "Johns Creek",
    latitude: 34.0289259,
    longitude: -84.198579,
  },
  {
    city: "Bellingham",
    latitude: 48.74908,
    longitude: -122.4781473,
  },
  {
    city: "Westland",
    latitude: 42.32420399999999,
    longitude: -83.400211,
  },
  {
    city: "Bloomington",
    latitude: 39.165325,
    longitude: -86.52638569999999,
  },
  {
    city: "Sioux City",
    latitude: 42.4999942,
    longitude: -96.40030689999999,
  },
  {
    city: "Warwick",
    latitude: 41.7001009,
    longitude: -71.4161671,
  },
  {
    city: "Hemet",
    latitude: 33.7475203,
    longitude: -116.9719684,
  },
  {
    city: "Longview",
    latitude: 32.5007037,
    longitude: -94.74048909999999,
  },
  {
    city: "Farmington Hills",
    latitude: 42.4989936,
    longitude: -83.3677168,
  },
  {
    city: "Bend",
    latitude: 44.0581728,
    longitude: -121.3153096,
  },
  {
    city: "Lakewood",
    latitude: 33.8536269,
    longitude: -118.1339563,
  },
  {
    city: "Merced",
    latitude: 37.3021632,
    longitude: -120.4829677,
  },
  {
    city: "Mission",
    latitude: 26.2159066,
    longitude: -98.32529319999999,
  },
  {
    city: "Chino",
    latitude: 34.0122346,
    longitude: -117.688944,
  },
  {
    city: "Redwood City",
    latitude: 37.48521520000001,
    longitude: -122.2363548,
  },
  {
    city: "Edinburg",
    latitude: 26.3017374,
    longitude: -98.1633432,
  },
  {
    city: "Cranston",
    latitude: 41.7798226,
    longitude: -71.4372796,
  },
  {
    city: "Parma",
    latitude: 41.4047742,
    longitude: -81.7229086,
  },
  {
    city: "New Rochelle",
    latitude: 40.9114882,
    longitude: -73.7823549,
  },
  {
    city: "Lake Forest",
    latitude: 33.6469661,
    longitude: -117.689218,
  },
  {
    city: "Napa",
    latitude: 38.2975381,
    longitude: -122.286865,
  },
  {
    city: "Hammond",
    latitude: 41.5833688,
    longitude: -87.5000412,
  },
  {
    city: "Fayetteville",
    latitude: 36.0625795,
    longitude: -94.1574263,
  },
  {
    city: "Bloomington",
    latitude: 40.4842027,
    longitude: -88.99368729999999,
  },
  {
    city: "Avondale",
    latitude: 33.4355977,
    longitude: -112.3496021,
  },
  {
    city: "Somerville",
    latitude: 42.3875968,
    longitude: -71.0994968,
  },
  {
    city: "Palm Coast",
    latitude: 29.5844524,
    longitude: -81.20786989999999,
  },
  {
    city: "Bryan",
    latitude: 30.6743643,
    longitude: -96.3699632,
  },
  {
    city: "Gary",
    latitude: 41.5933696,
    longitude: -87.3464271,
  },
  {
    city: "Largo",
    latitude: 27.9094665,
    longitude: -82.7873244,
  },
  {
    city: "Brooklyn Park",
    latitude: 45.0941315,
    longitude: -93.3563405,
  },
  {
    city: "Tustin",
    latitude: 33.7458511,
    longitude: -117.826166,
  },
  {
    city: "Racine",
    latitude: 42.7261309,
    longitude: -87.78285230000002,
  },
  {
    city: "Deerfield Beach",
    latitude: 26.3184123,
    longitude: -80.09976569999999,
  },
  {
    city: "Lynchburg",
    latitude: 37.4137536,
    longitude: -79.14224639999999,
  },
  {
    city: "Mountain View",
    latitude: 37.3860517,
    longitude: -122.0838511,
  },
  {
    city: "Medford",
    latitude: 42.3265152,
    longitude: -122.8755949,
  },
  {
    city: "Lawrence",
    latitude: 42.7070354,
    longitude: -71.1631137,
  },
  {
    city: "Bellflower",
    latitude: 33.8816818,
    longitude: -118.1170117,
  },
  {
    city: "Melbourne",
    latitude: 28.0836269,
    longitude: -80.60810889999999,
  },
  {
    city: "St. Joseph",
    latitude: 39.7674578,
    longitude: -94.84668099999999,
  },
  {
    city: "Camden",
    latitude: 39.9259463,
    longitude: -75.1196199,
  },
  {
    city: "St. George",
    latitude: 37.0965278,
    longitude: -113.5684164,
  },
  {
    city: "Kennewick",
    latitude: 46.2112458,
    longitude: -119.1372338,
  },
  {
    city: "Baldwin Park",
    latitude: 34.0852868,
    longitude: -117.9608978,
  },
  {
    city: "Chino Hills",
    latitude: 33.9898188,
    longitude: -117.7325848,
  },
  {
    city: "Alameda",
    latitude: 37.7652065,
    longitude: -122.2416355,
  },
  {
    city: "Albany",
    latitude: 31.5785074,
    longitude: -84.15574099999999,
  },
  {
    city: "Arlington Heights",
    latitude: 42.0883603,
    longitude: -87.98062650000001,
  },
  {
    city: "Scranton",
    latitude: 41.408969,
    longitude: -75.66241219999999,
  },
  {
    city: "Evanston",
    latitude: 42.0450722,
    longitude: -87.68769689999999,
  },
  {
    city: "Kalamazoo",
    latitude: 42.2917069,
    longitude: -85.5872286,
  },
  {
    city: "Baytown",
    latitude: 29.7355047,
    longitude: -94.97742740000001,
  },
  {
    city: "Upland",
    latitude: 34.09751,
    longitude: -117.6483876,
  },
  {
    city: "Springdale",
    latitude: 36.18674420000001,
    longitude: -94.1288141,
  },
  {
    city: "Bethlehem",
    latitude: 40.6259316,
    longitude: -75.37045789999999,
  },
  {
    city: "Schaumburg",
    latitude: 42.0333607,
    longitude: -88.0834059,
  },
  {
    city: "Mount Pleasant",
    latitude: 32.8323225,
    longitude: -79.82842579999999,
  },
  {
    city: "Auburn",
    latitude: 47.30732279999999,
    longitude: -122.2284532,
  },
  {
    city: "Decatur",
    latitude: 39.8403147,
    longitude: -88.9548001,
  },
  {
    city: "San Ramon",
    latitude: 37.7799273,
    longitude: -121.9780153,
  },
  {
    city: "Pleasanton",
    latitude: 37.6624312,
    longitude: -121.8746789,
  },
  {
    city: "Wyoming",
    latitude: 42.9133602,
    longitude: -85.7053085,
  },
  {
    city: "Lake Charles",
    latitude: 30.2265949,
    longitude: -93.2173758,
  },
  {
    city: "Plymouth",
    latitude: 45.0105194,
    longitude: -93.4555093,
  },
  {
    city: "Bolingbrook",
    latitude: 41.69864159999999,
    longitude: -88.0683955,
  },
  {
    city: "Pharr",
    latitude: 26.1947962,
    longitude: -98.1836216,
  },
  {
    city: "Appleton",
    latitude: 44.2619309,
    longitude: -88.41538469999999,
  },
  {
    city: "Gastonia",
    latitude: 35.262082,
    longitude: -81.18730049999999,
  },
  {
    city: "Folsom",
    latitude: 38.6779591,
    longitude: -121.1760583,
  },
  {
    city: "Southfield",
    latitude: 42.4733688,
    longitude: -83.2218731,
  },
  {
    city: "Rochester Hills",
    latitude: 42.65836609999999,
    longitude: -83.1499322,
  },
  {
    city: "New Britain",
    latitude: 41.6612104,
    longitude: -72.7795419,
  },
  {
    city: "Goodyear",
    latitude: 33.4353394,
    longitude: -112.3576567,
  },
  {
    city: "Canton",
    latitude: 40.79894729999999,
    longitude: -81.378447,
  },
  {
    city: "Warner Robins",
    latitude: 32.6130007,
    longitude: -83.624201,
  },
  {
    city: "Union City",
    latitude: 37.5933918,
    longitude: -122.0438298,
  },
  {
    city: "Perris",
    latitude: 33.7825194,
    longitude: -117.2286478,
  },
  {
    city: "Manteca",
    latitude: 37.7974273,
    longitude: -121.2160526,
  },
  {
    city: "Iowa City",
    latitude: 41.6611277,
    longitude: -91.5301683,
  },
  {
    city: "Jonesboro",
    latitude: 35.84229670000001,
    longitude: -90.704279,
  },
  {
    city: "Wilmington",
    latitude: 39.7390721,
    longitude: -75.5397878,
  },
  {
    city: "Lynwood",
    latitude: 33.930293,
    longitude: -118.2114603,
  },
  {
    city: "Loveland",
    latitude: 40.3977612,
    longitude: -105.0749801,
  },
  {
    city: "Pawtucket",
    latitude: 41.878711,
    longitude: -71.38255579999999,
  },
  {
    city: "Boynton Beach",
    latitude: 26.5317866,
    longitude: -80.0905465,
  },
  {
    city: "Waukesha",
    latitude: 43.0116784,
    longitude: -88.2314813,
  },
  {
    city: "Gulfport",
    latitude: 30.3674198,
    longitude: -89.0928155,
  },
  {
    city: "Apple Valley",
    latitude: 34.5008311,
    longitude: -117.1858759,
  },
  {
    city: "Passaic",
    latitude: 40.8567662,
    longitude: -74.1284764,
  },
  {
    city: "Rapid City",
    latitude: 44.0805434,
    longitude: -103.2310149,
  },
  {
    city: "Layton",
    latitude: 41.0602216,
    longitude: -111.9710529,
  },
  {
    city: "Lafayette",
    latitude: 40.4167022,
    longitude: -86.87528689999999,
  },
  {
    city: "Turlock",
    latitude: 37.4946568,
    longitude: -120.8465941,
  },
  {
    city: "Muncie",
    latitude: 40.1933767,
    longitude: -85.3863599,
  },
  {
    city: "Temple",
    latitude: 31.0982344,
    longitude: -97.342782,
  },
  {
    city: "Missouri City",
    latitude: 29.6185669,
    longitude: -95.5377215,
  },
  {
    city: "Redlands",
    latitude: 34.0555693,
    longitude: -117.1825381,
  },
  {
    city: "Santa Fe",
    latitude: 35.6869752,
    longitude: -105.937799,
  },
  {
    city: "Lauderhill",
    latitude: 26.1403635,
    longitude: -80.2133808,
  },
  {
    city: "Milpitas",
    latitude: 37.4323341,
    longitude: -121.8995741,
  },
  {
    city: "Palatine",
    latitude: 42.1103041,
    longitude: -88.03424000000001,
  },
  {
    city: "Missoula",
    latitude: 46.87871759999999,
    longitude: -113.996586,
  },
  {
    city: "Rock Hill",
    latitude: 34.9248667,
    longitude: -81.02507840000001,
  },
  {
    city: "Jacksonville",
    latitude: 34.7540524,
    longitude: -77.4302414,
  },
  {
    city: "San Francisco",
    latitude: 35.9250637,
    longitude: -86.8688899,
  },
  {
    city: "Flagstaff",
    latitude: 35.1982836,
    longitude: -111.651302,
  },
  {
    city: "Flower Mound",
    latitude: 33.0145673,
    longitude: -97.0969552,
  },
  {
    city: "Weston",
    latitude: 26.1003654,
    longitude: -80.3997748,
  },
  {
    city: "Waterloo",
    latitude: 42.492786,
    longitude: -92.34257749999999,
  },
  {
    city: "Union City",
    latitude: 40.6975898,
    longitude: -74.26316349999999,
  },
  {
    city: "Mount Vernon",
    latitude: 40.9125992,
    longitude: -73.8370786,
  },
  {
    city: "Fort Myers",
    latitude: 26.640628,
    longitude: -81.8723084,
  },
  {
    city: "Dothan",
    latitude: 31.2232313,
    longitude: -85.3904888,
  },
  {
    city: "Rancho Cordova",
    latitude: 38.5890723,
    longitude: -121.302728,
  },
  {
    city: "Redondo Beach",
    latitude: 33.8491816,
    longitude: -118.3884078,
  },
  {
    city: "Jackson",
    latitude: 35.6145169,
    longitude: -88.81394689999999,
  },
  {
    city: "Pasco",
    latitude: 46.2395793,
    longitude: -119.1005657,
  },
  {
    city: "St. Charles",
    latitude: 38.7881062,
    longitude: -90.4974359,
  },
  {
    city: "Eau Claire",
    latitude: 44.811349,
    longitude: -91.4984941,
  },
  {
    city: "North Richland Hills",
    latitude: 32.8342952,
    longitude: -97.2289029,
  },
  {
    city: "Bismarck",
    latitude: 46.8083268,
    longitude: -100.7837392,
  },
  {
    city: "Yorba Linda",
    latitude: 33.8886259,
    longitude: -117.8131125,
  },
  {
    city: "Kenner",
    latitude: 29.9940924,
    longitude: -90.2417434,
  },
  {
    city: "Walnut Creek",
    latitude: 37.9100783,
    longitude: -122.0651819,
  },
  {
    city: "Frederick",
    latitude: 39.41426879999999,
    longitude: -77.4105409,
  },
  {
    city: "Oshkosh",
    latitude: 44.0247062,
    longitude: -88.5426136,
  },
  {
    city: "Pittsburg",
    latitude: 38.0279762,
    longitude: -121.8846806,
  },
  {
    city: "Palo Alto",
    latitude: 37.4418834,
    longitude: -122.1430195,
  },
  {
    city: "Bossier City",
    latitude: 32.5159852,
    longitude: -93.7321228,
  },
  {
    city: "Portland",
    latitude: 43.66147100000001,
    longitude: -70.2553259,
  },
  {
    city: "St. Cloud",
    latitude: 45.5579451,
    longitude: -94.16324039999999,
  },
  {
    city: "Davis",
    latitude: 38.5449065,
    longitude: -121.7405167,
  },
  {
    city: "South San Francisco",
    latitude: 37.654656,
    longitude: -122.4077498,
  },
  {
    city: "Camarillo",
    latitude: 34.2163937,
    longitude: -119.0376023,
  },
  {
    city: "North Little Rock",
    latitude: 34.769536,
    longitude: -92.2670941,
  },
  {
    city: "Schenectady",
    latitude: 42.8142432,
    longitude: -73.9395687,
  },
  {
    city: "Gaithersburg",
    latitude: 39.1434406,
    longitude: -77.2013705,
  },
  {
    city: "Harlingen",
    latitude: 26.1906306,
    longitude: -97.69610259999999,
  },
  {
    city: "Woodbury",
    latitude: 44.9238552,
    longitude: -92.9593797,
  },
  {
    city: "Eagan",
    latitude: 44.8041322,
    longitude: -93.1668858,
  },
  {
    city: "Yuba City",
    latitude: 39.1404477,
    longitude: -121.6169108,
  },
  {
    city: "Maple Grove",
    latitude: 45.0724642,
    longitude: -93.4557877,
  },
  {
    city: "Youngstown",
    latitude: 41.0997803,
    longitude: -80.6495194,
  },
  {
    city: "Skokie",
    latitude: 42.0324025,
    longitude: -87.7416246,
  },
  {
    city: "Kissimmee",
    latitude: 28.2919557,
    longitude: -81.40757099999999,
  },
  {
    city: "Johnson City",
    latitude: 36.3134397,
    longitude: -82.3534727,
  },
  {
    city: "Victoria",
    latitude: 28.8052674,
    longitude: -97.0035982,
  },
  {
    city: "San Clemente",
    latitude: 33.4269728,
    longitude: -117.6119925,
  },
  {
    city: "Bayonne",
    latitude: 40.6687141,
    longitude: -74.1143091,
  },
  {
    city: "Laguna Niguel",
    latitude: 33.5225261,
    longitude: -117.7075526,
  },
  {
    city: "East Orange",
    latitude: 40.767323,
    longitude: -74.2048677,
  },
  {
    city: "Shawnee",
    latitude: 39.02284849999999,
    longitude: -94.7151865,
  },
  {
    city: "Homestead",
    latitude: 25.4687224,
    longitude: -80.4775569,
  },
  {
    city: "Rockville",
    latitude: 39.0839973,
    longitude: -77.1527578,
  },
  {
    city: "Delray Beach",
    latitude: 26.4614625,
    longitude: -80.0728201,
  },
  {
    city: "Janesville",
    latitude: 42.6827885,
    longitude: -89.0187222,
  },
  {
    city: "Conway",
    latitude: 35.0886963,
    longitude: -92.4421011,
  },
  {
    city: "Pico Rivera",
    latitude: 33.9830688,
    longitude: -118.096735,
  },
  {
    city: "Lorain",
    latitude: 41.452819,
    longitude: -82.1823746,
  },
  {
    city: "Montebello",
    latitude: 34.0165053,
    longitude: -118.1137535,
  },
  {
    city: "Lodi",
    latitude: 38.1341477,
    longitude: -121.2722194,
  },
  {
    city: "New Braunfels",
    latitude: 29.7030024,
    longitude: -98.1244531,
  },
  {
    city: "Marysville",
    latitude: 48.0517637,
    longitude: -122.1770818,
  },
  {
    city: "Tamarac",
    latitude: 26.2128609,
    longitude: -80.2497707,
  },
  {
    city: "Madera",
    latitude: 36.9613356,
    longitude: -120.0607176,
  },
  {
    city: "Conroe",
    latitude: 30.3118769,
    longitude: -95.45605119999999,
  },
  {
    city: "Santa Cruz",
    latitude: 36.9741171,
    longitude: -122.0307963,
  },
  {
    city: "Eden Prairie",
    latitude: 44.8546856,
    longitude: -93.47078599999999,
  },
  {
    city: "Cheyenne",
    latitude: 41.1399814,
    longitude: -104.8202462,
  },
  {
    city: "Daytona Beach",
    latitude: 29.2108147,
    longitude: -81.0228331,
  },
  {
    city: "Alpharetta",
    latitude: 34.0753762,
    longitude: -84.2940899,
  },
  {
    city: "Hamilton",
    latitude: 39.3995008,
    longitude: -84.5613355,
  },
  {
    city: "Waltham",
    latitude: 42.3764852,
    longitude: -71.2356113,
  },
  {
    city: "Coon Rapids",
    latitude: 45.1732394,
    longitude: -93.30300629999999,
  },
  {
    city: "Haverhill",
    latitude: 42.7762015,
    longitude: -71.0772796,
  },
  {
    city: "Council Bluffs",
    latitude: 41.2619444,
    longitude: -95.8608333,
  },
  {
    city: "Taylor",
    latitude: 42.240872,
    longitude: -83.2696509,
  },
  {
    city: "Utica",
    latitude: 43.100903,
    longitude: -75.232664,
  },
  {
    city: "Ames",
    latitude: 42.034722,
    longitude: -93.61999999999999,
  },
  {
    city: "La Habra",
    latitude: 33.9319578,
    longitude: -117.9461734,
  },
  {
    city: "Encinitas",
    latitude: 33.0369867,
    longitude: -117.2919818,
  },
  {
    city: "Bowling Green",
    latitude: 36.9685219,
    longitude: -86.4808043,
  },
  {
    city: "Burnsville",
    latitude: 44.7677424,
    longitude: -93.27772259999999,
  },
  {
    city: "Greenville",
    latitude: 34.85261759999999,
    longitude: -82.3940104,
  },
  {
    city: "West Des Moines",
    latitude: 41.5772115,
    longitude: -93.711332,
  },
  {
    city: "Cedar Park",
    latitude: 30.505198,
    longitude: -97.8202888,
  },
  {
    city: "Tulare",
    latitude: 36.2077288,
    longitude: -119.3473379,
  },
  {
    city: "Monterey Park",
    latitude: 34.0625106,
    longitude: -118.1228476,
  },
  {
    city: "Vineland",
    latitude: 39.4863773,
    longitude: -75.02596369999999,
  },
  {
    city: "Terre Haute",
    latitude: 39.4667034,
    longitude: -87.41390919999999,
  },
  {
    city: "North Miami",
    latitude: 25.8900949,
    longitude: -80.1867138,
  },
  {
    city: "Mansfield",
    latitude: 32.5631924,
    longitude: -97.1416768,
  },
  {
    city: "West Allis",
    latitude: 43.0166806,
    longitude: -88.0070315,
  },
  {
    city: "Bristol",
    latitude: 41.67176480000001,
    longitude: -72.9492703,
  },
  {
    city: "Taylorsville",
    latitude: 40.66772479999999,
    longitude: -111.9388258,
  },
  {
    city: "Malden",
    latitude: 42.4250964,
    longitude: -71.066163,
  },
  {
    city: "Meriden",
    latitude: 41.5381535,
    longitude: -72.80704349999999,
  },
  {
    city: "Blaine",
    latitude: 45.1607987,
    longitude: -93.23494889999999,
  },
  {
    city: "Wellington",
    latitude: 26.6617635,
    longitude: -80.2683571,
  },
  {
    city: "Cupertino",
    latitude: 37.3229978,
    longitude: -122.0321823,
  },
  {
    city: "Springfield",
    latitude: 44.0462362,
    longitude: -123.0220289,
  },
  {
    city: "Rogers",
    latitude: 36.3320196,
    longitude: -94.1185366,
  },
  {
    city: "St. Clair Shores",
    latitude: 42.4974085,
    longitude: -82.89636039999999,
  },
  {
    city: "Gardena",
    latitude: 33.8883487,
    longitude: -118.3089624,
  },
  {
    city: "Pontiac",
    latitude: 42.6389216,
    longitude: -83.29104679999999,
  },
  {
    city: "National City",
    latitude: 32.6781085,
    longitude: -117.0991967,
  },
  {
    city: "Grand Junction",
    latitude: 39.0638705,
    longitude: -108.5506486,
  },
  {
    city: "Rocklin",
    latitude: 38.7907339,
    longitude: -121.2357828,
  },
  {
    city: "Chapel Hill",
    latitude: 35.9131996,
    longitude: -79.0558445,
  },
  {
    city: "Casper",
    latitude: 42.866632,
    longitude: -106.313081,
  },
  {
    city: "Broomfield",
    latitude: 39.9205411,
    longitude: -105.0866504,
  },
  {
    city: "Petaluma",
    latitude: 38.232417,
    longitude: -122.6366524,
  },
  {
    city: "South Jordan",
    latitude: 40.5621704,
    longitude: -111.929658,
  },
  {
    city: "Springfield",
    latitude: 39.9242266,
    longitude: -83.8088171,
  },
  {
    city: "Great Falls",
    latitude: 47.4941836,
    longitude: -111.2833449,
  },
  {
    city: "Lancaster",
    latitude: 40.0378755,
    longitude: -76.3055144,
  },
  {
    city: "North Port",
    latitude: 27.044224,
    longitude: -82.2359254,
  },
  {
    city: "Lakewood",
    latitude: 47.1717649,
    longitude: -122.518458,
  },
  {
    city: "Marietta",
    latitude: 33.95260200000001,
    longitude: -84.5499327,
  },
  {
    city: "San Rafael",
    latitude: 37.9735346,
    longitude: -122.5310874,
  },
  {
    city: "Royal Oak",
    latitude: 42.4894801,
    longitude: -83.1446485,
  },
  {
    city: "Des Plaines",
    latitude: 42.0333623,
    longitude: -87.88339909999999,
  },
  {
    city: "Huntington Park",
    latitude: 33.9816812,
    longitude: -118.2250725,
  },
  {
    city: "La Mesa",
    latitude: 32.7678287,
    longitude: -117.0230839,
  },
  {
    city: "Orland Park",
    latitude: 41.6303103,
    longitude: -87.85394250000002,
  },
  {
    city: "Auburn",
    latitude: 32.6098566,
    longitude: -85.48078249999999,
  },
  {
    city: "Lakeville",
    latitude: 44.6496868,
    longitude: -93.24271999999999,
  },
  {
    city: "Owensboro",
    latitude: 37.7719074,
    longitude: -87.1111676,
  },
  {
    city: "Moore",
    latitude: 35.3395079,
    longitude: -97.48670279999999,
  },
  {
    city: "Jupiter",
    latitude: 26.9342246,
    longitude: -80.0942087,
  },
  {
    city: "Idaho Falls",
    latitude: 43.49165139999999,
    longitude: -112.0339645,
  },
  {
    city: "Dubuque",
    latitude: 42.5005583,
    longitude: -90.66457179999999,
  },
  {
    city: "Bartlett",
    latitude: 35.2045328,
    longitude: -89.8739753,
  },
  {
    city: "Rowlett",
    latitude: 32.9029017,
    longitude: -96.56388,
  },
  {
    city: "Novi",
    latitude: 42.48059,
    longitude: -83.4754913,
  },
  {
    city: "White Plains",
    latitude: 41.03398620000001,
    longitude: -73.7629097,
  },
  {
    city: "Arcadia",
    latitude: 34.1397292,
    longitude: -118.0353449,
  },
  {
    city: "Redmond",
    latitude: 47.6739881,
    longitude: -122.121512,
  },
  {
    city: "Lake Elsinore",
    latitude: 33.6680772,
    longitude: -117.3272615,
  },
  {
    city: "Ocala",
    latitude: 29.1871986,
    longitude: -82.14009229999999,
  },
  {
    city: "Tinley Park",
    latitude: 41.5731442,
    longitude: -87.7932939,
  },
  {
    city: "Port Orange",
    latitude: 29.1383165,
    longitude: -80.9956105,
  },
  {
    city: "Medford",
    latitude: 42.4184296,
    longitude: -71.1061639,
  },
  {
    city: "Oak Lawn",
    latitude: 41.719978,
    longitude: -87.7479528,
  },
  {
    city: "Rocky Mount",
    latitude: 35.9382103,
    longitude: -77.7905339,
  },
  {
    city: "Kokomo",
    latitude: 40.486427,
    longitude: -86.13360329999999,
  },
  {
    city: "Coconut Creek",
    latitude: 26.2517482,
    longitude: -80.17893509999999,
  },
  {
    city: "Bowie",
    latitude: 39.0067768,
    longitude: -76.77913649999999,
  },
  {
    city: "Berwyn",
    latitude: 41.85058739999999,
    longitude: -87.7936685,
  },
  {
    city: "Midwest City",
    latitude: 35.4495065,
    longitude: -97.3967019,
  },
  {
    city: "Fountain Valley",
    latitude: 33.7091847,
    longitude: -117.9536697,
  },
  {
    city: "Buckeye",
    latitude: 33.3703197,
    longitude: -112.5837766,
  },
  {
    city: "Dearborn Heights",
    latitude: 42.3369816,
    longitude: -83.27326269999999,
  },
  {
    city: "Woodland",
    latitude: 38.67851570000001,
    longitude: -121.7732971,
  },
  {
    city: "Noblesville",
    latitude: 40.0455917,
    longitude: -86.0085955,
  },
  {
    city: "Valdosta",
    latitude: 30.8327022,
    longitude: -83.2784851,
  },
  {
    city: "Diamond Bar",
    latitude: 34.0286226,
    longitude: -117.8103367,
  },
  {
    city: "Manhattan",
    latitude: 39.18360819999999,
    longitude: -96.57166939999999,
  },
  {
    city: "Santee",
    latitude: 32.8383828,
    longitude: -116.9739167,
  },
  {
    city: "Taunton",
    latitude: 41.900101,
    longitude: -71.0897674,
  },
  {
    city: "Sanford",
    latitude: 28.8028612,
    longitude: -81.269453,
  },
  {
    city: "Kettering",
    latitude: 39.68950359999999,
    longitude: -84.1688274,
  },
  {
    city: "New Brunswick",
    latitude: 40.4862157,
    longitude: -74.4518188,
  },
  {
    city: "Decatur",
    latitude: 34.6059253,
    longitude: -86.9833417,
  },
  {
    city: "Chicopee",
    latitude: 42.1487043,
    longitude: -72.6078672,
  },
  {
    city: "Anderson",
    latitude: 40.1053196,
    longitude: -85.6802541,
  },
  {
    city: "Margate",
    latitude: 26.2445263,
    longitude: -80.206436,
  },
  {
    city: "Weymouth Town",
    latitude: 42.2180724,
    longitude: -70.94103559999999,
  },
  {
    city: "Hempstead",
    latitude: 40.7062128,
    longitude: -73.6187397,
  },
  {
    city: "Corvallis",
    latitude: 44.5645659,
    longitude: -123.2620435,
  },
  {
    city: "Eastvale",
    latitude: 33.952463,
    longitude: -117.5848025,
  },
  {
    city: "Porterville",
    latitude: 36.06523,
    longitude: -119.0167679,
  },
  {
    city: "West Haven",
    latitude: 41.2705484,
    longitude: -72.9469711,
  },
  {
    city: "Brentwood",
    latitude: 37.931868,
    longitude: -121.6957863,
  },
  {
    city: "Paramount",
    latitude: 33.8894598,
    longitude: -118.1597911,
  },
  {
    city: "Grand Forks",
    latitude: 47.9252568,
    longitude: -97.0328547,
  },
  {
    city: "Georgetown",
    latitude: 30.6332618,
    longitude: -97.6779842,
  },
  {
    city: "St. Peters",
    latitude: 38.7874699,
    longitude: -90.6298922,
  },
  {
    city: "Shoreline",
    latitude: 47.7556531,
    longitude: -122.3415178,
  },
  {
    city: "Mount Prospect",
    latitude: 42.0664167,
    longitude: -87.9372908,
  },
  {
    city: "Hanford",
    latitude: 36.3274502,
    longitude: -119.6456844,
  },
  {
    city: "Normal",
    latitude: 40.5142026,
    longitude: -88.9906312,
  },
  {
    city: "Rosemead",
    latitude: 34.0805651,
    longitude: -118.072846,
  },
  {
    city: "Lehi",
    latitude: 40.3916172,
    longitude: -111.8507662,
  },
  {
    city: "Pocatello",
    latitude: 42.8713032,
    longitude: -112.4455344,
  },
  {
    city: "Highland",
    latitude: 34.1283442,
    longitude: -117.2086513,
  },
  {
    city: "Novato",
    latitude: 38.1074198,
    longitude: -122.5697032,
  },
  {
    city: "Port Arthur",
    latitude: 29.8849504,
    longitude: -93.93994699999999,
  },
  {
    city: "Carson City",
    latitude: 39.1637984,
    longitude: -119.7674034,
  },
  {
    city: "San Marcos",
    latitude: 29.8832749,
    longitude: -97.9413941,
  },
  {
    city: "Hendersonville",
    latitude: 36.3047735,
    longitude: -86.6199957,
  },
  {
    city: "Elyria",
    latitude: 41.3683798,
    longitude: -82.10764859999999,
  },
  {
    city: "Revere",
    latitude: 42.4084302,
    longitude: -71.0119948,
  },
  {
    city: "Pflugerville",
    latitude: 30.4393696,
    longitude: -97.62000429999999,
  },
  {
    city: "Greenwood",
    latitude: 39.6136578,
    longitude: -86.10665259999999,
  },
  {
    city: "Bellevue",
    latitude: 41.1543623,
    longitude: -95.9145568,
  },
  {
    city: "Wheaton",
    latitude: 41.8661403,
    longitude: -88.1070127,
  },
  {
    city: "Smyrna",
    latitude: 33.8839926,
    longitude: -84.51437609999999,
  },
  {
    city: "Sarasota",
    latitude: 27.3364347,
    longitude: -82.53065269999999,
  },
  {
    city: "Blue Springs",
    latitude: 39.0169509,
    longitude: -94.2816148,
  },
  {
    city: "Colton",
    latitude: 34.0739016,
    longitude: -117.3136547,
  },
  {
    city: "Euless",
    latitude: 32.8370727,
    longitude: -97.08195409999999,
  },
  {
    city: "Castle Rock",
    latitude: 39.3722121,
    longitude: -104.8560902,
  },
  {
    city: "Cathedral City",
    latitude: 33.7805388,
    longitude: -116.4668036,
  },
  {
    city: "Kingsport",
    latitude: 36.548434,
    longitude: -82.5618186,
  },
  {
    city: "Lake Havasu City",
    latitude: 34.483901,
    longitude: -114.3224548,
  },
  {
    city: "Pensacola",
    latitude: 30.42130899999999,
    longitude: -87.2169149,
  },
  {
    city: "Hoboken",
    latitude: 40.7439905,
    longitude: -74.0323626,
  },
  {
    city: "Yucaipa",
    latitude: 34.033625,
    longitude: -117.0430865,
  },
  {
    city: "Watsonville",
    latitude: 36.910231,
    longitude: -121.7568946,
  },
  {
    city: "Richland",
    latitude: 46.2856907,
    longitude: -119.2844621,
  },
  {
    city: "Delano",
    latitude: 35.7688425,
    longitude: -119.2470536,
  },
  {
    city: "Hoffman Estates",
    latitude: 42.0629915,
    longitude: -88.12271989999999,
  },
  {
    city: "Florissant",
    latitude: 38.789217,
    longitude: -90.322614,
  },
  {
    city: "Placentia",
    latitude: 33.8722371,
    longitude: -117.8703363,
  },
  {
    city: "West New York",
    latitude: 40.7878788,
    longitude: -74.0143064,
  },
  {
    city: "Dublin",
    latitude: 37.7021521,
    longitude: -121.9357918,
  },
  {
    city: "Oak Park",
    latitude: 41.8850317,
    longitude: -87.7845025,
  },
  {
    city: "Peabody",
    latitude: 42.5278731,
    longitude: -70.9286609,
  },
  {
    city: "Perth Amboy",
    latitude: 40.5067723,
    longitude: -74.2654234,
  },
  {
    city: "Battle Creek",
    latitude: 42.3211522,
    longitude: -85.17971419999999,
  },
  {
    city: "Bradenton",
    latitude: 27.4989278,
    longitude: -82.5748194,
  },
  {
    city: "Gilroy",
    latitude: 37.0057816,
    longitude: -121.5682751,
  },
  {
    city: "Milford",
    latitude: 41.2306979,
    longitude: -73.064036,
  },
  {
    city: "Albany",
    latitude: 44.6365107,
    longitude: -123.1059282,
  },
  {
    city: "Ankeny",
    latitude: 41.7317884,
    longitude: -93.6001278,
  },
  {
    city: "La Crosse",
    latitude: 43.8013556,
    longitude: -91.23958069999999,
  },
  {
    city: "Burlington",
    latitude: 36.0956918,
    longitude: -79.43779909999999,
  },
  {
    city: "DeSoto",
    latitude: 32.5896998,
    longitude: -96.8570738,
  },
  {
    city: "Harrisonburg",
    latitude: 38.4495688,
    longitude: -78.8689155,
  },
  {
    city: "Minnetonka",
    latitude: 44.9211836,
    longitude: -93.4687489,
  },
  {
    city: "Elkhart",
    latitude: 41.6819935,
    longitude: -85.9766671,
  },
  {
    city: "Lakewood",
    latitude: 41.4819932,
    longitude: -81.7981908,
  },
  {
    city: "Glendora",
    latitude: 34.1361187,
    longitude: -117.865339,
  },
  {
    city: "Southaven",
    latitude: 34.9889818,
    longitude: -90.0125913,
  },
  {
    city: "Charleston",
    latitude: 38.3498195,
    longitude: -81.6326234,
  },
  {
    city: "Joplin",
    latitude: 37.08422710000001,
    longitude: -94.51328099999999,
  },
  {
    city: "Enid",
    latitude: 36.3955891,
    longitude: -97.8783911,
  },
  {
    city: "Palm Beach Gardens",
    latitude: 26.8233946,
    longitude: -80.13865469999999,
  },
  {
    city: "Brookhaven",
    latitude: 33.8651033,
    longitude: -84.3365917,
  },
  {
    city: "Plainfield",
    latitude: 40.6337136,
    longitude: -74.4073736,
  },
  {
    city: "Grand Island",
    latitude: 40.9263957,
    longitude: -98.3420118,
  },
  {
    city: "Palm Desert",
    latitude: 33.7222445,
    longitude: -116.3744556,
  },
  {
    city: "Huntersville",
    latitude: 35.410694,
    longitude: -80.84285040000002,
  },
  {
    city: "Tigard",
    latitude: 45.4312294,
    longitude: -122.7714861,
  },
  {
    city: "Lenexa",
    latitude: 38.9536174,
    longitude: -94.73357089999999,
  },
  {
    city: "Saginaw",
    latitude: 43.4194699,
    longitude: -83.9508068,
  },
  {
    city: "Kentwood",
    latitude: 42.8694731,
    longitude: -85.64474919999999,
  },
  {
    city: "Doral",
    latitude: 25.8195424,
    longitude: -80.3553302,
  },
  {
    city: "Apple Valley",
    latitude: 44.7319094,
    longitude: -93.21772000000001,
  },
  {
    city: "Grapevine",
    latitude: 32.9342919,
    longitude: -97.0780654,
  },
  {
    city: "Aliso Viejo",
    latitude: 33.5676842,
    longitude: -117.7256083,
  },
  {
    city: "Sammamish",
    latitude: 47.61626829999999,
    longitude: -122.0355736,
  },
  {
    city: "Casa Grande",
    latitude: 32.8795022,
    longitude: -111.7573521,
  },
  {
    city: "Pinellas Park",
    latitude: 27.8428025,
    longitude: -82.6995443,
  },
  {
    city: "Troy",
    latitude: 42.7284117,
    longitude: -73.69178509999999,
  },
  {
    city: "West Sacramento",
    latitude: 38.5804609,
    longitude: -121.530234,
  },
  {
    city: "Burien",
    latitude: 47.4703767,
    longitude: -122.3467918,
  },
  {
    city: "Commerce City",
    latitude: 39.8083196,
    longitude: -104.9338675,
  },
  {
    city: "Monroe",
    latitude: 32.5093109,
    longitude: -92.1193012,
  },
  {
    city: "Cerritos",
    latitude: 33.8583483,
    longitude: -118.0647871,
  },
  {
    city: "Downers Grove",
    latitude: 41.8089191,
    longitude: -88.01117459999999,
  },
  {
    city: "Coral Gables",
    latitude: 25.72149,
    longitude: -80.2683838,
  },
  {
    city: "Wilson",
    latitude: 35.7212689,
    longitude: -77.9155395,
  },
  {
    city: "Niagara Falls",
    latitude: 43.0962143,
    longitude: -79.0377388,
  },
  {
    city: "Poway",
    latitude: 32.9628232,
    longitude: -117.0358646,
  },
  {
    city: "Edina",
    latitude: 44.8896866,
    longitude: -93.3499489,
  },
  {
    city: "Cuyahoga Falls",
    latitude: 41.1339449,
    longitude: -81.48455849999999,
  },
  {
    city: "Rancho Santa Margarita",
    latitude: 33.640855,
    longitude: -117.603104,
  },
  {
    city: "Harrisburg",
    latitude: 40.2731911,
    longitude: -76.8867008,
  },
  {
    city: "Huntington",
    latitude: 38.4192496,
    longitude: -82.44515400000002,
  },
  {
    city: "La Mirada",
    latitude: 33.9172357,
    longitude: -118.0120086,
  },
  {
    city: "Cypress",
    latitude: 33.8169599,
    longitude: -118.0372852,
  },
  {
    city: "Caldwell",
    latitude: 43.66293839999999,
    longitude: -116.6873596,
  },
  {
    city: "Logan",
    latitude: 41.7369803,
    longitude: -111.8338359,
  },
  {
    city: "Galveston",
    latitude: 29.3013479,
    longitude: -94.7976958,
  },
  {
    city: "Sheboygan",
    latitude: 43.7508284,
    longitude: -87.71453,
  },
  {
    city: "Middletown",
    latitude: 39.5150576,
    longitude: -84.39827629999999,
  },
  {
    city: "Murray",
    latitude: 40.6668916,
    longitude: -111.8879909,
  },
  {
    city: "Roswell",
    latitude: 33.3942655,
    longitude: -104.5230242,
  },
  {
    city: "Parker",
    latitude: 39.5186002,
    longitude: -104.7613633,
  },
  {
    city: "Bedford",
    latitude: 32.844017,
    longitude: -97.1430671,
  },
  {
    city: "East Lansing",
    latitude: 42.7369792,
    longitude: -84.48386540000001,
  },
  {
    city: "Methuen",
    latitude: 42.7262016,
    longitude: -71.1908924,
  },
  {
    city: "Covina",
    latitude: 34.0900091,
    longitude: -117.8903397,
  },
  {
    city: "Alexandria",
    latitude: 31.3112936,
    longitude: -92.4451371,
  },
  {
    city: "Olympia",
    latitude: 47.0378741,
    longitude: -122.9006951,
  },
  {
    city: "Euclid",
    latitude: 41.5931049,
    longitude: -81.5267873,
  },
  {
    city: "Mishawaka",
    latitude: 41.6619927,
    longitude: -86.15861559999999,
  },
  {
    city: "Salina",
    latitude: 38.8402805,
    longitude: -97.61142369999999,
  },
  {
    city: "Azusa",
    latitude: 34.1336186,
    longitude: -117.9075627,
  },
  {
    city: "Newark",
    latitude: 40.0581205,
    longitude: -82.4012642,
  },
  {
    city: "Chesterfield",
    latitude: 38.6631083,
    longitude: -90.5770675,
  },
  {
    city: "Leesburg",
    latitude: 39.1156615,
    longitude: -77.56360149999999,
  },
  {
    city: "Dunwoody",
    latitude: 33.9462125,
    longitude: -84.3346473,
  },
  {
    city: "Hattiesburg",
    latitude: 31.3271189,
    longitude: -89.29033919999999,
  },
  {
    city: "Roseville",
    latitude: 42.4972583,
    longitude: -82.9371409,
  },
  {
    city: "Bonita Springs",
    latitude: 26.339806,
    longitude: -81.7786972,
  },
  {
    city: "Portage",
    latitude: 42.2011538,
    longitude: -85.5800022,
  },
  {
    city: "St. Louis Park",
    latitude: 44.9597376,
    longitude: -93.3702186,
  },
  {
    city: "Collierville",
    latitude: 35.042036,
    longitude: -89.6645266,
  },
  {
    city: "Middletown",
    latitude: 41.5623209,
    longitude: -72.6506488,
  },
  {
    city: "Stillwater",
    latitude: 36.1156071,
    longitude: -97.0583681,
  },
  {
    city: "East Providence",
    latitude: 41.8137116,
    longitude: -71.3700545,
  },
  {
    city: "Lawrence",
    latitude: 39.8386516,
    longitude: -86.0252612,
  },
  {
    city: "Wauwatosa",
    latitude: 43.0494572,
    longitude: -88.0075875,
  },
  {
    city: "Mentor",
    latitude: 41.6661573,
    longitude: -81.339552,
  },
  {
    city: "Ceres",
    latitude: 37.5949316,
    longitude: -120.9577098,
  },
  {
    city: "Cedar Hill",
    latitude: 32.5884689,
    longitude: -96.9561152,
  },
  {
    city: "Mansfield",
    latitude: 40.75839,
    longitude: -82.5154471,
  },
  {
    city: "Binghamton",
    latitude: 42.09868669999999,
    longitude: -75.91797380000001,
  },
  {
    city: "Coeur d'Alene",
    latitude: 47.6776832,
    longitude: -116.7804664,
  },
  {
    city: "San Luis Obispo",
    latitude: 35.2827524,
    longitude: -120.6596156,
  },
  {
    city: "Minot",
    latitude: 48.2329668,
    longitude: -101.2922906,
  },
  {
    city: "Palm Springs",
    latitude: 33.8302961,
    longitude: -116.5452921,
  },
  {
    city: "Pine Bluff",
    latitude: 34.2284312,
    longitude: -92.00319549999999,
  },
  {
    city: "Texas City",
    latitude: 29.383845,
    longitude: -94.9027002,
  },
  {
    city: "Summerville",
    latitude: 33.0185039,
    longitude: -80.17564809999999,
  },
  {
    city: "Twin Falls",
    latitude: 42.5629668,
    longitude: -114.4608711,
  },
  {
    city: "Jeffersonville",
    latitude: 38.2775702,
    longitude: -85.7371847,
  },
  {
    city: "San Jacinto",
    latitude: 33.7839084,
    longitude: -116.958635,
  },
  {
    city: "Madison",
    latitude: 34.6992579,
    longitude: -86.74833180000002,
  },
  {
    city: "Altoona",
    latitude: 40.5186809,
    longitude: -78.3947359,
  },
  {
    city: "Columbus",
    latitude: 39.2014404,
    longitude: -85.9213796,
  },
  {
    city: "Beavercreek",
    latitude: 39.7092262,
    longitude: -84.06326849999999,
  },
  {
    city: "Apopka",
    latitude: 28.6934076,
    longitude: -81.5322149,
  },
  {
    city: "Elmhurst",
    latitude: 41.8994744,
    longitude: -87.9403418,
  },
  {
    city: "Maricopa",
    latitude: 33.0581063,
    longitude: -112.0476423,
  },
  {
    city: "Farmington",
    latitude: 36.72805830000001,
    longitude: -108.2186856,
  },
  {
    city: "Glenview",
    latitude: 42.0697509,
    longitude: -87.7878408,
  },
  {
    city: "Cleveland Heights",
    latitude: 41.5200518,
    longitude: -81.556235,
  },
  {
    city: "Draper",
    latitude: 40.5246711,
    longitude: -111.8638226,
  },
  {
    city: "Lincoln",
    latitude: 38.891565,
    longitude: -121.2930079,
  },
  {
    city: "Sierra Vista",
    latitude: 31.5455001,
    longitude: -110.2772856,
  },
  {
    city: "Lacey",
    latitude: 47.03426289999999,
    longitude: -122.8231915,
  },
  {
    city: "Biloxi",
    latitude: 30.3960318,
    longitude: -88.88530779999999,
  },
  {
    city: "Strongsville",
    latitude: 41.3144966,
    longitude: -81.83569,
  },
  {
    city: "Barnstable Town",
    latitude: 41.7003208,
    longitude: -70.3002024,
  },
  {
    city: "Wylie",
    latitude: 33.0151201,
    longitude: -96.5388789,
  },
  {
    city: "Sayreville",
    latitude: 40.45940210000001,
    longitude: -74.360846,
  },
  {
    city: "Kannapolis",
    latitude: 35.4873613,
    longitude: -80.6217341,
  },
  {
    city: "Charlottesville",
    latitude: 38.0293059,
    longitude: -78.47667810000002,
  },
  {
    city: "Littleton",
    latitude: 39.613321,
    longitude: -105.0166498,
  },
  {
    city: "Titusville",
    latitude: 28.6122187,
    longitude: -80.8075537,
  },
  {
    city: "Hackensack",
    latitude: 40.8859325,
    longitude: -74.0434736,
  },
  {
    city: "Newark",
    latitude: 37.5296593,
    longitude: -122.0402399,
  },
  {
    city: "Pittsfield",
    latitude: 42.4500845,
    longitude: -73.2453824,
  },
  {
    city: "York",
    latitude: 39.9625984,
    longitude: -76.727745,
  },
  {
    city: "Lombard",
    latitude: 41.8800296,
    longitude: -88.00784349999999,
  },
  {
    city: "Attleboro",
    latitude: 41.94454409999999,
    longitude: -71.2856082,
  },
  {
    city: "DeKalb",
    latitude: 41.9294736,
    longitude: -88.75036469999999,
  },
  {
    city: "Blacksburg",
    latitude: 37.2295733,
    longitude: -80.4139393,
  },
  {
    city: "Dublin",
    latitude: 40.0992294,
    longitude: -83.1140771,
  },
  {
    city: "Haltom City",
    latitude: 32.7995738,
    longitude: -97.26918169999999,
  },
  {
    city: "Lompoc",
    latitude: 34.6391501,
    longitude: -120.4579409,
  },
  {
    city: "El Centro",
    latitude: 32.792,
    longitude: -115.5630514,
  },
  {
    city: "Danville",
    latitude: 37.8215929,
    longitude: -121.9999606,
  },
  {
    city: "Jefferson City",
    latitude: 38.57670170000001,
    longitude: -92.1735164,
  },
  {
    city: "Cutler Bay",
    latitude: 25.5808323,
    longitude: -80.34685929999999,
  },
  {
    city: "Oakland Park",
    latitude: 26.1723065,
    longitude: -80.1319893,
  },
  {
    city: "North Miami Beach",
    latitude: 25.9331488,
    longitude: -80.1625463,
  },
  {
    city: "Freeport",
    latitude: 40.6576022,
    longitude: -73.58318349999999,
  },
  {
    city: "Moline",
    latitude: 41.5067003,
    longitude: -90.51513419999999,
  },
  {
    city: "Coachella",
    latitude: 33.6803003,
    longitude: -116.173894,
  },
  {
    city: "Fort Pierce",
    latitude: 27.4467056,
    longitude: -80.3256056,
  },
  {
    city: "Smyrna",
    latitude: 35.9828412,
    longitude: -86.5186045,
  },
  {
    city: "Bountiful",
    latitude: 40.8893895,
    longitude: -111.880771,
  },
  {
    city: "Fond du Lac",
    latitude: 43.7730448,
    longitude: -88.4470508,
  },
  {
    city: "Everett",
    latitude: 42.40843,
    longitude: -71.0536625,
  },
  {
    city: "Danville",
    latitude: 36.5859718,
    longitude: -79.39502279999999,
  },
  {
    city: "Keller",
    latitude: 32.9341893,
    longitude: -97.229298,
  },
  {
    city: "Belleville",
    latitude: 38.5200504,
    longitude: -89.9839935,
  },
  {
    city: "Bell Gardens",
    latitude: 33.9652918,
    longitude: -118.1514588,
  },
  {
    city: "Cleveland",
    latitude: 35.1595182,
    longitude: -84.8766115,
  },
  {
    city: "North Lauderdale",
    latitude: 26.217305,
    longitude: -80.2258811,
  },
  {
    city: "Fairfield",
    latitude: 39.3454673,
    longitude: -84.5603187,
  },
  {
    city: "Salem",
    latitude: 42.51954,
    longitude: -70.8967155,
  },
  {
    city: "Rancho Palos Verdes",
    latitude: 33.7444613,
    longitude: -118.3870173,
  },
  {
    city: "San Bruno",
    latitude: 37.6304904,
    longitude: -122.4110835,
  },
  {
    city: "Concord",
    latitude: 43.2081366,
    longitude: -71.5375718,
  },
  {
    city: "Burlington",
    latitude: 44.4758825,
    longitude: -73.21207199999999,
  },
  {
    city: "Apex",
    latitude: 35.732652,
    longitude: -78.85028559999999,
  },
  {
    city: "Midland",
    latitude: 43.6155825,
    longitude: -84.2472116,
  },
  {
    city: "Altamonte Springs",
    latitude: 28.6611089,
    longitude: -81.3656242,
  },
  {
    city: "Hutchinson",
    latitude: 38.0608445,
    longitude: -97.92977429999999,
  },
  {
    city: "Buffalo Grove",
    latitude: 42.1662831,
    longitude: -87.9631308,
  },
  {
    city: "Urbandale",
    latitude: 41.6266555,
    longitude: -93.71216559999999,
  },
  {
    city: "State College",
    latitude: 40.7933949,
    longitude: -77.8600012,
  },
  {
    city: "Urbana",
    latitude: 40.1105875,
    longitude: -88.2072697,
  },
  {
    city: "Plainfield",
    latitude: 41.632223,
    longitude: -88.2120315,
  },
  {
    city: "Manassas",
    latitude: 38.7509488,
    longitude: -77.47526669999999,
  },
  {
    city: "Bartlett",
    latitude: 41.9950276,
    longitude: -88.1856301,
  },
  {
    city: "Kearny",
    latitude: 40.7684342,
    longitude: -74.1454214,
  },
  {
    city: "Oro Valley",
    latitude: 32.3909071,
    longitude: -110.966488,
  },
  {
    city: "Findlay",
    latitude: 41.04422,
    longitude: -83.6499321,
  },
  {
    city: "Rohnert Park",
    latitude: 38.3396367,
    longitude: -122.7010984,
  },
  {
    city: "Westfield",
    latitude: 42.1250929,
    longitude: -72.749538,
  },
  {
    city: "Linden",
    latitude: 40.6220478,
    longitude: -74.24459019999999,
  },
  {
    city: "Sumter",
    latitude: 33.9204354,
    longitude: -80.3414693,
  },
  {
    city: "Wilkes-Barre",
    latitude: 41.2459149,
    longitude: -75.88130749999999,
  },
  {
    city: "Woonsocket",
    latitude: 42.00287609999999,
    longitude: -71.51478390000001,
  },
  {
    city: "Leominster",
    latitude: 42.5250906,
    longitude: -71.759794,
  },
  {
    city: "Shelton",
    latitude: 41.3164856,
    longitude: -73.0931641,
  },
  {
    city: "Brea",
    latitude: 33.9166805,
    longitude: -117.9000604,
  },
  {
    city: "Covington",
    latitude: 39.0836712,
    longitude: -84.5085536,
  },
  {
    city: "Rockwall",
    latitude: 32.93123360000001,
    longitude: -96.4597089,
  },
  {
    city: "Meridian",
    latitude: 32.3643098,
    longitude: -88.703656,
  },
  {
    city: "Riverton",
    latitude: 40.521893,
    longitude: -111.9391023,
  },
  {
    city: "St. Cloud",
    latitude: 28.2489016,
    longitude: -81.2811801,
  },
  {
    city: "Quincy",
    latitude: 39.9356016,
    longitude: -91.4098726,
  },
  {
    city: "Morgan Hill",
    latitude: 37.1305012,
    longitude: -121.6543901,
  },
  {
    city: "Warren",
    latitude: 41.2375569,
    longitude: -80.81841659999999,
  },
  {
    city: "Edmonds",
    latitude: 47.8106521,
    longitude: -122.3773552,
  },
  {
    city: "Burleson",
    latitude: 32.5420821,
    longitude: -97.3208492,
  },
  {
    city: "Beverly",
    latitude: 42.5584283,
    longitude: -70.880049,
  },
  {
    city: "Mankato",
    latitude: 44.1635775,
    longitude: -93.99939959999999,
  },
  {
    city: "Hagerstown",
    latitude: 39.6417629,
    longitude: -77.71999319999999,
  },
  {
    city: "Prescott",
    latitude: 34.5400242,
    longitude: -112.4685025,
  },
  {
    city: "Campbell",
    latitude: 37.2871651,
    longitude: -121.9499568,
  },
  {
    city: "Cedar Falls",
    latitude: 42.5348993,
    longitude: -92.4453161,
  },
  {
    city: "Beaumont",
    latitude: 33.9294606,
    longitude: -116.977248,
  },
  {
    city: "La Puente",
    latitude: 34.0200114,
    longitude: -117.9495083,
  },
  {
    city: "Crystal Lake",
    latitude: 42.2411344,
    longitude: -88.31619649999999,
  },
  {
    city: "Fitchburg",
    latitude: 42.5834228,
    longitude: -71.8022955,
  },
  {
    city: "Carol Stream",
    latitude: 41.91252859999999,
    longitude: -88.13479269999999,
  },
  {
    city: "Hickory",
    latitude: 35.7344538,
    longitude: -81.3444573,
  },
  {
    city: "Streamwood",
    latitude: 42.0255827,
    longitude: -88.17840849999999,
  },
  {
    city: "Norwich",
    latitude: 41.5242649,
    longitude: -72.07591049999999,
  },
  {
    city: "Coppell",
    latitude: 32.9545687,
    longitude: -97.01500779999999,
  },
  {
    city: "San Gabriel",
    latitude: 34.09611110000001,
    longitude: -118.1058333,
  },
  {
    city: "Holyoke",
    latitude: 42.2042586,
    longitude: -72.6162009,
  },
  {
    city: "Bentonville",
    latitude: 36.3728538,
    longitude: -94.2088172,
  },
  {
    city: "Florence",
    latitude: 34.79981,
    longitude: -87.677251,
  },
  {
    city: "Peachtree Corners",
    latitude: 33.9698929,
    longitude: -84.2214551,
  },
  {
    city: "Brentwood",
    latitude: 36.0331164,
    longitude: -86.78277720000001,
  },
  {
    city: "Bozeman",
    latitude: 45.6769979,
    longitude: -111.0429339,
  },
  {
    city: "New Berlin",
    latitude: 42.9764027,
    longitude: -88.1084224,
  },
  {
    city: "Goose Creek",
    latitude: 32.9810059,
    longitude: -80.03258670000001,
  },
  {
    city: "Huntsville",
    latitude: 30.7235263,
    longitude: -95.55077709999999,
  },
  {
    city: "Prescott Valley",
    latitude: 34.6100243,
    longitude: -112.315721,
  },
  {
    city: "Maplewood",
    latitude: 44.9530215,
    longitude: -92.9952153,
  },
  {
    city: "Romeoville",
    latitude: 41.6475306,
    longitude: -88.0895061,
  },
  {
    city: "Duncanville",
    latitude: 32.6518004,
    longitude: -96.9083366,
  },
  {
    city: "Atlantic City",
    latitude: 39.3642834,
    longitude: -74.4229266,
  },
  {
    city: "Clovis",
    latitude: 34.4047987,
    longitude: -103.2052272,
  },
  {
    city: "The Colony",
    latitude: 33.0806083,
    longitude: -96.89283089999999,
  },
  {
    city: "Culver City",
    latitude: 34.0211224,
    longitude: -118.3964665,
  },
  {
    city: "Marlborough",
    latitude: 42.3459271,
    longitude: -71.5522874,
  },
  {
    city: "Hilton Head Island",
    latitude: 32.216316,
    longitude: -80.752608,
  },
  {
    city: "Moorhead",
    latitude: 46.8737648,
    longitude: -96.76780389999999,
  },
  {
    city: "Calexico",
    latitude: 32.6789476,
    longitude: -115.4988834,
  },
  {
    city: "Bullhead City",
    latitude: 35.1359386,
    longitude: -114.5285981,
  },
  {
    city: "Germantown",
    latitude: 35.0867577,
    longitude: -89.8100858,
  },
  {
    city: "La Quinta",
    latitude: 33.6633573,
    longitude: -116.3100095,
  },
  {
    city: "Lancaster",
    latitude: 39.7136754,
    longitude: -82.5993294,
  },
  {
    city: "Wausau",
    latitude: 44.9591352,
    longitude: -89.6301221,
  },
  {
    city: "Sherman",
    latitude: 33.6356618,
    longitude: -96.6088805,
  },
  {
    city: "Ocoee",
    latitude: 28.5691677,
    longitude: -81.5439619,
  },
  {
    city: "Shakopee",
    latitude: 44.7973962,
    longitude: -93.5272861,
  },
  {
    city: "Woburn",
    latitude: 42.4792618,
    longitude: -71.1522765,
  },
  {
    city: "Bremerton",
    latitude: 47.5673202,
    longitude: -122.6329356,
  },
  {
    city: "Rock Island",
    latitude: 41.5094771,
    longitude: -90.5787476,
  },
  {
    city: "Muskogee",
    latitude: 35.7478769,
    longitude: -95.3696909,
  },
  {
    city: "Cape Girardeau",
    latitude: 37.3058839,
    longitude: -89.51814759999999,
  },
  {
    city: "Annapolis",
    latitude: 38.9784453,
    longitude: -76.4921829,
  },
  {
    city: "Greenacres",
    latitude: 26.6276276,
    longitude: -80.1353896,
  },
  {
    city: "Ormond Beach",
    latitude: 29.2858129,
    longitude: -81.0558894,
  },
  {
    city: "Hallandale Beach",
    latitude: 25.9812024,
    longitude: -80.14837899999999,
  },
  {
    city: "Stanton",
    latitude: 33.8025155,
    longitude: -117.9931165,
  },
  {
    city: "Puyallup",
    latitude: 47.1853785,
    longitude: -122.2928974,
  },
  {
    city: "Pacifica",
    latitude: 37.6138253,
    longitude: -122.4869194,
  },
  {
    city: "Hanover Park",
    latitude: 41.9994722,
    longitude: -88.1450735,
  },
  {
    city: "Hurst",
    latitude: 32.8234621,
    longitude: -97.1705678,
  },
  {
    city: "Lima",
    latitude: 40.742551,
    longitude: -84.1052256,
  },
  {
    city: "Marana",
    latitude: 32.436381,
    longitude: -111.2224422,
  },
  {
    city: "Carpentersville",
    latitude: 42.1211364,
    longitude: -88.2578582,
  },
  {
    city: "Oakley",
    latitude: 37.9974219,
    longitude: -121.7124536,
  },
  {
    city: "Huber Heights",
    latitude: 39.843947,
    longitude: -84.12466080000002,
  },
  {
    city: "Lancaster",
    latitude: 32.5920798,
    longitude: -96.7561082,
  },
  {
    city: "Montclair",
    latitude: 34.0775104,
    longitude: -117.6897776,
  },
  {
    city: "Wheeling",
    latitude: 42.1391927,
    longitude: -87.9289591,
  },
  {
    city: "Brookfield",
    latitude: 43.0605671,
    longitude: -88.1064787,
  },
  {
    city: "Park Ridge",
    latitude: 42.0111412,
    longitude: -87.84061919999999,
  },
  {
    city: "Florence",
    latitude: 34.1954331,
    longitude: -79.7625625,
  },
  {
    city: "Roy",
    latitude: 41.1616108,
    longitude: -112.0263313,
  },
  {
    city: "Winter Garden",
    latitude: 28.5652787,
    longitude: -81.58618469999999,
  },
  {
    city: "Chelsea",
    latitude: 42.3917638,
    longitude: -71.0328284,
  },
  {
    city: "Valley Stream",
    latitude: 40.6642699,
    longitude: -73.70846449999999,
  },
  {
    city: "Spartanburg",
    latitude: 34.9495672,
    longitude: -81.9320482,
  },
  {
    city: "Lake Oswego",
    latitude: 45.42067489999999,
    longitude: -122.6706498,
  },
  {
    city: "Friendswood",
    latitude: 29.5293998,
    longitude: -95.2010447,
  },
  {
    city: "Westerville",
    latitude: 40.1261743,
    longitude: -82.92906959999999,
  },
  {
    city: "Northglenn",
    latitude: 39.8961821,
    longitude: -104.9811468,
  },
  {
    city: "Phenix City",
    latitude: 32.4709761,
    longitude: -85.0007653,
  },
  {
    city: "Grove City",
    latitude: 39.88145189999999,
    longitude: -83.0929644,
  },
  {
    city: "Texarkana",
    latitude: 33.425125,
    longitude: -94.04768820000001,
  },
  {
    city: "Addison",
    latitude: 41.931696,
    longitude: -87.9889556,
  },
  {
    city: "Dover",
    latitude: 39.158168,
    longitude: -75.5243682,
  },
  {
    city: "Lincoln Park",
    latitude: 42.2505943,
    longitude: -83.1785361,
  },
  {
    city: "Calumet City",
    latitude: 41.6155909,
    longitude: -87.5294871,
  },
  {
    city: "Muskegon",
    latitude: 43.2341813,
    longitude: -86.24839209999999,
  },
  {
    city: "Aventura",
    latitude: 25.9564812,
    longitude: -80.1392121,
  },
  {
    city: "Martinez",
    latitude: 38.0193657,
    longitude: -122.1341321,
  },
  {
    city: "Greenfield",
    latitude: 42.9614039,
    longitude: -88.0125865,
  },
  {
    city: "Apache Junction",
    latitude: 33.4150485,
    longitude: -111.5495777,
  },
  {
    city: "Monrovia",
    latitude: 34.1442616,
    longitude: -118.0019482,
  },
  {
    city: "Weslaco",
    latitude: 26.1595194,
    longitude: -97.9908366,
  },
  {
    city: "Keizer",
    latitude: 44.9901194,
    longitude: -123.0262077,
  },
  {
    city: "Spanish Fork",
    latitude: 40.114955,
    longitude: -111.654923,
  },
  {
    city: "Beloit",
    latitude: 42.5083482,
    longitude: -89.03177649999999,
  },
  {
    city: "Panama City",
    latitude: 30.1588129,
    longitude: -85.6602058,
  },
];
